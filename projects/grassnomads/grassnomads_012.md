---
pageTitle: Version 0.4 of board; debugging 999 sensor behavior
layout: layout.njk
date: 2024-12-24
updated: Last Modified 
tags: grassnomads 
image: /img/placeholder.png
blurb: New, simplified sensor circuit; trying to fix the low-temp sensor behavior.
---


# Mon Nov 18 12:10:48 PM EST 2024

Update:  ver 0.4 board seems to work well ...

There are periodic errors on the depth sensor -- reading an 'error' -- when sending via satellite on battery (ie waking up periodically).  Haven't been able to reproduce when plugged in.  Going to try to insert a delay after starting up uart on depth sensor in case that's the issue.  In parallel might try to design version of board that has an extra linear regulator for 3V line in case insufficient current on startup is an issue.

# Mon Nov 18 06:40:46 PM EST 2024

Testing new uart code.  Another source of 'error' might've been the code for reading from the uart -- I think the earlier version wouldn't immediately return the depth once a reasonable depth was reported

Q: if we do get any 999 values, i wonder if we can re-query? 

 
# Tue Nov 19 12:17:18 PM EST 2024

Looks like things are pretty solid ... using 'second_test.py' in sweet-p firmware version 4a

![](/img/ojofeliz/regular_pings.png)

# Fri 20 Dec 2024 05:31:22 PM EST

Recent experiment indicated that the problem is not with the battery, but with the sensor.

On a very cold morning, the system starting reading '999'.  When I swapped in a 'warm' battery, it still read '999'. 

Seems that the sensor itself doesn't do well in the cold.

So, new plan:  

- we'll always try to send whatever data we get, goofy or not, at 5 AM and 1 PM
- if we ever get goofy data, afterwards we'll keep trying every 30 minutes to get 'good' data until we get a good reading we can send


so, when sending ...

now we need to start recording the value of what was sent ...

if last reading was '999' or '-1', and the current value isn't either of those, then should send

okay -- attempting this with code ver 0.4.5

# Tue 24 Dec 2024 10:25:56 AM EST

![](/img/ojofeliz/gn_experiment_dec_24_2024_distance.png)

![](/img/ojofeliz/gn_experiment_dec_24_2024_temperature.png)

![](/img/ojofeliz/gn_experiment_dec_24_2024_battery_volts.png)

Explanation of figure above:

Code was implemented so that the system would, if receiving a '999' value from the sensor, look for the first 'good' sensor value and send it, whether or not a next value was schedule for sending.

Indeed, this approach seemed to work at temperatures at which the system failed; the code seemed to work.

However:  we see above that the sensor stopped sending good values at a certain point.  Why?

- It could be that the sensor is still 'frozen', and hasn't been able to warm up yet
- It could be that the battery is too low
- It could be that the battery is too cold
- It could be that the microcontroller has entered some odd state, so that measuring the sensor on wakeup yields a bad value

I also have noted recently that the sensor seems to be in a 'brownout' fast blinking purple neo pixel state when I open the enclosure

I have also noticed that that micro code seems to freeze / stop during a satellite send attempt, so that the micro never turns itself off

-- update:  actually, the timer chip was not 'on' in this case, so it seems that it wasn't a 'micro doesn't turn itself off' issue.  

In the above data, I opened the enclosure, saw that the sensor was in a 'brownout' state.  I pressed the timer chip 'wakeup' button.  This booted up the system, and the first value to be sent was a good value.

It seems that 'brownout' despite the timer chip being off (its green led was off) is possible because the satellite modem retains power in the capacitor.  Is there a way to change this in the circuit, so that the micro stays fully off?

I think this rules out the sensor being an issue on its own.  It might be that if the micro starts up in an odd state, the initial sensor reading is a goofy one. 

So: not sure why we brownout; it's probably not a terrible thing, in terms of battery; especially if it's getting its power from the satellite modem.

But it seems that this is impacting the initial sensor reading.  

Maybe there's a way to 'reset' the sensor ... or at least read several times from it to attempt to get a non-999 value?

Next steps:  reread the sensor data sheet, see if there's some code setup that can read from the sensor to get a good value.

Maxbotix datasheet on triggering the sensor, here: [https://maxbotix.com/pages/controlling-a-maxsonar-sensor](https://maxbotix.com/pages/controlling-a-maxsonar-sensor)

Currently I may have the satellite modem 3V line connected -- which may be the way that the micro is getting 'back powered' ... need to check ... if it's not necessary, remove!

[rockblock knowledgebase](https://docs.groundcontrol.com/iot/rockblock)

note: someone was able to solve their timer issue by adding a 100nF cap between DONE and GROUND -- see [here](https://forums.adafruit.com/viewtopic.php?t=139674)

[tank sensor datasheet](https://maxbotix.com/pages/xl-tanksensor-wr-datasheet)

# Tue 24 Dec 2024 12:52:39 PM EST

update:  ver 0.4.6 of the firmware implements a 'trigger' on the sensor using pin D12 ... testing now






