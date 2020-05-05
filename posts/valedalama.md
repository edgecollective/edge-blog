---
pageTitle: Valedalama 
layout: layout.njk
date: 2020-04-13
updated: 2020-04-13
image: /img/valedalama/cover.JPG
blurb: Farm monitoring infrastructure in Portugal 
---

-----
*April 13, 2020*

## SQLite 
Great [talk on Sqllite](https://www.youtube.com/watch?v=Jib2AmRb_rk), arguing that it's appropriate for a database located on 'the edge'.

<img src="/img/valedalama/about_sqlite.png">

------
*24 Apr 2020*

## Test Feather Code 

[Simple test code](https://gist.github.com/dwblair/c18edaaa2de9a8d5e3a6b47c48797d98)  for Adafruit Feather + RAK 

------
*05 May 2020*

## Configuring the region on the RAK

General setup for the RAK 7243 + Pi firmware is [here](https://doc.rakwireless.com/rak7243c-lorawan-developer-gateway/device-firmware-setup).

Information about the configuration file is [here](https://www.chirpstack.io/network-server/install/config/).

The firmware we're using is [here](https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Firmware/).

Can use 'gateway-config' command line script on RAK to set the region:

```
sudo gateway-config
```

This script modifies this file:

```
/etc/chirpstack-network-server/chirpstack-network-server.toml
```

## Basic Arduino Test Code

Basic test code for sending data to the RAK in OTAA mode is in gist form [here](https://gist.github.com/dwblair/f6a0c3dd07fc3ae073fad3914f77af64).

## Configuring the region on the Arduino

Changing the region on the Arduino requires modifing a special header file.  

See the Adafruit Arduino tutorial [here](https://learn.adafruit.com/the-things-network-for-feather?view=all#region-configuration).


## Adafruit Feather 900 Mhz can be tuned to 868 Mhz band

See the below snippet from the [Adafruit Feather M0 LoRa 900 Mhz product page](https://www.adafruit.com/product/3178):

<img src="/img/valedalama/feather_tunable.png">

## Adafruit LMIC OTAA basic code will attempt to rejoin periodically

See this example serial output:

<img src="/img/valedalama/rejoin.png">

## Needed tweak on Adafruit for EU band

See the forum post [here](https://www.thethingsnetwork.org/forum/t/solved-adafruit-feather-m0-to-connect-to-ttn-over-otaa-unknown-event-20/29990/15):

<img src="/img/valedalama/eu_band_adafruit_tweak.png">

[This](https://www.hackster.io/Amedee/the-things-network-node-for-ttnmapper-org-a8bcd4) might be a useful reference for setting up 868 band.

Current impression is that RAK hardware does indeed distinguish between 868 and 915 Mhz bands ... ?

05 May 2020 13:27 Update:  there is a 'project_config' file located in the 'src' folder on in the lmic library folder itself -- and it's set to the US band -- perhaps this is overriding the project files? Trying setting it to EU and the RAK to EU.  One open question is how specific the RAK Pi Hat is re: freq bands ... can it handle 868?

So the current thinking for getting 868 band to work is:
- change the Arduino lib folder project_config file to 868
- change the sketch lib folder project_config file to 868 (for good measure)
- comment out LMIC_selectSubBand(1);

Meanwhile, note that upload via bossac did work on the Pi. 

Confirmed -- was able to get upload on RAK in US '915' version by setting to '868' following above steps.  Key seems to have been the Arduino library project_config folder issue.  

Note: we are using [mcci-catena arduino-lmic 2.3.2 version](https://github.com/mcci-catena/arduino-lmic/releases/tag/v2.3.2) of library with success.  Later versions haven't always worked. Stick with that for now. 

## Strategy

First:

- set up RAK to 868 via sudo gateway-config
- try loading binary to Feather via RAK


Second:

- make sure we're using proper version of lmic library (see above)
- change the Arduino lib folder project_config file to 868
- change the sketch lib folder project_config file to 868 (for good measure)
- comment out LMIC_selectSubBand(1);

## Wiring Adafruit Feather to BME280

As per instructions [here](https://learn.adafruit.com/adafruit-bme280-humidity-barometric-pressure-temperature-sensor-breakout/arduino-test):

<img src="/img/valedalama/feather_pinouts.jpg">

</br>

<img src="/img/valedalama/bme_280_pins.jpg">

**BME280 ---> Feather**
- VIN --> 3V
- GND --> GND
- SCK --> SCL
- SDI --> SDA

