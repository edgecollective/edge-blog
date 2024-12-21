---
pageTitle: Upgrades after lightning strike 
layout: layout.njk
date: 2024-10-31
updated: Last Modified 
tags: grassnomads 
image: /img/placeholder.png
blurb: Taking the opportunity to simplify the overall circuit. 
---

Circuitpython code for identifying possible uart pin pair combinations: [https://learn.adafruit.com/adafruit-itsybitsy-nrf52840-express/circuitpython-uart-serial](https://learn.adafruit.com/adafruit-itsybitsy-nrf52840-express/circuitpython-uart-serial)

## IB NRF 

Looks like any pin combinations work

## IB M4

RX pin: board.A3         TX pin: board.A2
RX pin: board.D4         TX pin: board.A2
RX pin: board.D5         TX pin: board.A2
RX pin: board.SDA        TX pin: board.A2
RX pin: board.A1         TX pin: board.A4
RX pin: board.A5         TX pin: board.A4
RX pin: board.D2         TX pin: board.A4
RX pin: board.D0         TX pin: board.D1
RX pin: board.D10        TX pin: board.D1
RX pin: board.D11        TX pin: board.D1
RX pin: board.D12        TX pin: board.D1
RX pin: board.D9         TX pin: board.D1
RX pin: board.D10        TX pin: board.D12
RX pin: board.D11        TX pin: board.D12
RX pin: board.LED        TX pin: board.D12
RX pin: board.D3         TX pin: board.D12
RX pin: board.APA102_MOSI        TX pin: board.D12
RX pin: board.D0         TX pin: board.LED
RX pin: board.D10        TX pin: board.LED
RX pin: board.D11        TX pin: board.LED
RX pin: board.D12        TX pin: board.LED
RX pin: board.D9         TX pin: board.LED
RX pin: board.D10        TX pin: board.APA102_SCK
RX pin: board.D11        TX pin: board.APA102_SCK
RX pin: board.LED        TX pin: board.APA102_SCK
RX pin: board.D3         TX pin: board.APA102_SCK
RX pin: board.APA102_MOSI        TX pin: board.APA102_SCK
RX pin: board.A3         TX pin: board.SCL
RX pin: board.D4         TX pin: board.SCL
RX pin: board.D5         TX pin: board.SCL
RX pin: board.SDA        TX pin: board.SCL
RX pin: board.D4         TX pin: board.SDA
RX pin: board.D5         TX pin: board.SDA
RX pin: board.SCL        TX pin: board.SDA

## IB KB RP2040 

RX pin: board.A3         TX pin: board.A2
RX pin: board.RX         TX pin: board.A2
RX pin: board.SCL        TX pin: board.A2
RX pin: board.A3         TX pin: board.TX
RX pin: board.RX         TX pin: board.TX
RX pin: board.SCL        TX pin: board.TX
RX pin: board.A3         TX pin: board.SDA
RX pin: board.RX         TX pin: board.SDA
RX pin: board.SCL        TX pin: board.SDA
RX pin: board.D5         TX pin: board.D4
RX pin: board.D9         TX pin: board.D4
RX pin: board.D5         TX pin: board.D8
RX pin: board.D9         TX pin: board.D8
RX pin: board.D5         TX pin: board.MISO
RX pin: board.D9         TX pin: board.MISO

NOTE:  the depth sensor should receive on the 'created' UART -- only need to coordinate the RX pin -- while the satellite modem should have the 'true' board UART as defined.


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





