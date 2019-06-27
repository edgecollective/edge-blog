---
pageTitle: Remote Soil Moisture Monitoring 
layout: layout.njk
---

-----
*June 25, 2019*

## Project Goals

An Edge Collective client was looking to establish some baseline soil measurements around tree planting sites in order to begin to assess the impact of regenerative agriculture practices there; specifically, the impact of biochar on soil moisture.

We're planning on beginning by creating two instrumentation setups, one at each measurement site (“biochar” and “non-biochar”).  Each setup will operate on 12V battery power, and measure soil moisture and temperature locally every 30 minutes.  One of the setups (“Remote Node”, Fig 1) will send its data to a “Gateway Node” via LoRa radio; and the “Gateway Node” will then send the combined datasets to FarmOS via cellular modem. We will be using HOBO / Decagon Soil Moisture probes as our sensors.


<img src="/img/field_1/config_1.png">

-----
*June 26, 2019*

## Cellular Posting to FarmOS

*-- Update, 18.00 --*

We'll begin by setting up a quick 'end-to-end' test system for transmitting data from a Quahog to FarmOS via a cellular modem (the Adafruit FONA cellular module). 

Because the FONA can only use TSL 1.0, and FarmOS is setup to require higher than TSL 1.0 to POST, we'll be using a 'relay server' -- a very simple NodeJS script, [farmos-relay](https://github.com/edgecollective/farmos-relay), that receives POSTs from the FONA (accepting TSL 1.0) and then re-broadcasts to FarmOS.  (Note: we should look into the security of doing things this way.)

*-- Update, 18:55 --* 

I've reproduced the Quahog FONA code so that it posts to FarmOS via the above relay script.  The micropython script is [relay.py](git@github.com:edgecollective/knuth-soil-remote.git).

I've also got a Feather M0 LoRa running CircuitPython posting every second to the Quahog via LoRa; that code is called [rad_alice.py](https://github.com/edgecollective/knuth-soil-remote/blob/master/feather/rad_alice.py)

Next, to hook these up together so that the Feather is posting (fake, at this point, until I hook up the sensors) data to the Quahog, and then that data is posted to FarmOS.  If I can get that running, I'll run it overnight at 30 minute intervals.  It'd be nice to include a 1-wire sensor, or equivalent, if possible so that temperature data were collected. I'll see how far I can get ...

*-- Update, 19:15 --*

To make things easier, I'm rewriting the Feather LoRa code so that it'll just post (test) data once on boot, after two seconds.  That code is [here](https://github.com/edgecollective/knuth-soil-remote/blob/master/feather/rad_alice.py).  That way when I want to test the remote --> gateway system, I can just press the "Reset" button the Feather, and after two seconds it'll send some test data through the system.  At this point it's just CSV format data; in the future I'll try to send JSON and parse it on the other end.

*-- Update, 19:43 --*

I've got the Quahog receiving the Feather data via LoRa, and printing it out on the OLED, with this commit of [rad_relay.py](https://github.com/edgecollective/knuth-soil-remote/blob/5767ee35aad9d368e93ba1d583416a532b8b608b/quahog/rad_relay.py) Micropython code on the Quahog. 

*-- Update, 20:06 --*

Cool! We've got the end-to-end demo (with faked data) now:  Remote Node -- (LoRa radio) --> Quahog -- (cellular) --> relay server --> FarmOS!  The relevant code is [this version](https://github.com/edgecollective/knuth-soil-remote/blob/a53c40da56e1735645031fd489de680767c98ef1/quahog/rad_relay.py) of rad_relay.py on the Quahog.

<img src="/img/field_1/end_to_end.png" width=300>

<img src="/img/field_1/farmos_post.png" height=300>

TODO: 

- Getting some temp data posted. I'll implement OneWire on the Feather side for this.
- Detecting the network status of the FONA and waiting until it's connected to attempt to post.

*-- Update, 20:39 --*

[rad_onewire.py](https://github.com/edgecollective/knuth-soil-remote/blob/master/feather/rad_onewire.py) on the Feather will measure temp every interval, and post via LoRa ...

*-- Update, 21.:01 --*

Alright, looks like we're consistently posting!  The latest code is:

- Feather: [rad_onewire.py](https://github.com/edgecollective/knuth-soil-remote/blob/master/feather/rad_onewire.py) (copied as main.py onto the Feather so that it runs on boot)
- Quahog: [rad_relay.py](https://github.com/edgecollective/knuth-soil-remote/blob/master/quahog/rad_relay.py)
- FarmOS data: [test data](https://wolfesneck.farmos.net/farm/sensor/knuthtestone) at the Wolfesneck FarmOS instance.  




