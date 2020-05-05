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