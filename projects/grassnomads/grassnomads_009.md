---
pageTitle: Marsh Storage Upgrade  
layout: layout.njk
date: 2023-12-15
updated: Last Modified 
tags: grassnomads 
image: /img/ojofeliz/twintowers.jpeg
blurb: Upgrading Marsh Storage to gps and a condensation-proof tank sensor 
---


# Sat Dec 16 04:29:19 PM EST 2023

Working on adding gps module

[Primary guide](https://learn.adafruit.com/adafruit-mini-gps-pa1010d-module) on adafruit mini gps

[circuitpython i2c usage](https://learn.adafruit.com/adafruit-mini-gps-pa1010d-module/circuitpython-python-i2c-usage)

Able to get current time from gps!  Note: it's UTC time.

Goal: to send only at 5 AM and 1 PM MST 


# Tue Dec 19 03:50:14 PM EST 2023

Going to try to use RTC instead of GPS -- might remove a failure mode (connecting to gps network) ...

[Circuitpython code for the DS3231](https://learn.adafruit.com/adafruit-ds3231-precision-rtc-breakout/circuitpython)

Rockblock codes: [https://learn.adafruit.com/using-the-rockblock-iridium-modem/basic-test](https://learn.adafruit.com/using-the-rockblock-iridium-modem/basic-test)


# Fri Dec 22 05:29:03 PM EST 2023

Note: the old smithereen test code is at [http://bayou.pvos.org/data/t2tn5x6krzvw?plot_param=temperature_c](http://bayou.pvos.org/data/t2tn5x6krzvw?plot_param=temperature_c)


# Sat Dec 23 12:18:36 PM EST 2023

[http://bayou.pvos.org/data/hynj3bxfuzst?plot_param=distance_meters&limit=43](http://bayou.pvos.org/data/hynj3bxfuzst?plot_param=distance_meters&limit=43)

![](/img/ojofeliz/sat_pinging.png)

This code seems to be working well: [https://github.com/edgecollective/sweet-p/blob/12ce832cbadbaeb9d29aa78e8f4a9ed8c1cbeef8/ver_0.3/firmware/grassnomads/v2.0/utilities/satellite_hour.py](https://github.com/edgecollective/sweet-p/blob/12ce832cbadbaeb9d29aa78e8f4a9ed8c1cbeef8/ver_0.3/firmware/grassnomads/v2.0/utilities/satellite_hour.py)

This code also works well, and sends temperature: [https://github.com/edgecollective/sweet-p/blob/a9dcde832bb8d2363664934cd545ba1b778fba73/ver_0.3/firmware/grassnomads/v2.0/utilities/satellite_temperature.py](https://github.com/edgecollective/sweet-p/blob/a9dcde832bb8d2363664934cd545ba1b778fba73/ver_0.3/firmware/grassnomads/v2.0/utilities/satellite_temperature.py)


# Tue Dec 26 09:24:59 PM EST 2023

Sending data every 3 hours using new firmware: 

![](/img/ojofeliz/every_three.png)

Latest pics of hardware:

![](/img/ojofeliz/sweetp_version3.jpeg)

![](/img/ojofeliz/tank_combo.jpeg)


# Tue Jan  9 03:23:31 PM EST 2024

Timing via the TPL5100 (see ref for resistor-controlled timings on [Adafruit TPL5110 usage guide](https://learn.adafruit.com/adafruit-tpl5110-power-timer-breakout/usage)

Currently, T1 -- 81.5K -- approx 25 minutes
T2 -- 118.7K -- approx 55 minutes

We want more like 10 minutes. But might be too short, induce too rapid a battery drain.  So, keep T1 at 25 minutes as a backup;  switch T2 to something between 54K and 58K.

Looks like I have 51K, and 68K.  So, 68K would be between 10 and 20 minutes. 

Let's try 51K. And also minimize the wakeup time.  And turn off the radio transmit (if it is).

Looks like true resistance is 50.5 K -- which is about 7.5 min.  Let's try it.   
Current code: 
- sends if the hour is a multiple of 3
- sends lora radio message

Let's cut out the lora for now ...

Updated code testing Jan 9th overnight is [here](https://github.com/edgecollective/sweet-p/tree/99ac31e6b767b3cf7b068945a5aea6a52fc61022/ver_0.3/firmware/grassnomads/v2.0)


# Sun Feb  4 10:25:36 AM EST 2024

Results of deployment late Jan / early Feb 2024 ...

![](/img/ojofeliz/distance_late_jan_2024.png)


# Wed Feb  7 01:16:07 PM EST 2024

Looks like the sensor fails (reads '999 cm') whenever the temp falls below 3 C or so ...

(Note that after Feb 5 or so, we fixed a bug that was dividing the distance by an extra factor of 10;  thus the jump -- before, a reading of '999 cm' would show up as '1 meter';  afterwards it shows up as '10 meters' on the graph.)

![](/img/ojofeliz/sensor_goof_distance.png)

![](/img/ojofeliz/sensor_goof_temp.png)
