---
pageTitle: Vale da Lama Greenhouse Monitoring
layout: layout.njk
date: 2020-10-07
updated: 2020-10-21
tags: notes 
image: /img/valedalama/3d_render.png
blurb: Greenhouse monitoring electronics at Vale da Lama
---

## Overview

All of this research and prototyping is occurring at [Quinta Vale Da Lama](https://www.valedalama.net/en/).


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

## <a name="bme280_wiring">Wiring Adafruit Feather to BME280</a>

As per instructions [here](https://learn.adafruit.com/adafruit-bme280-humidity-barometric-pressure-temperature-sensor-breakout/arduino-test):

<img src="/img/valedalama/feather_pinouts.jpg">

</br>

<img src="/img/valedalama/bme_280_pins.jpg">

**BME280 ---> Feather**
- VIN --> 3V
- GND --> GND
- SCK --> SCL
- SDI --> SDA

<img src="/img/valedalama/bme_280_feather_wiring.png">

## Code for BME280 + Feather M0 LoRa

Using the BME280 can be accomplished by using the [Adafruit BME280 Arduino Library](https://github.com/adafruit/Adafruit_BME280_Library), which also requires using the [Adafruit Sensor Library](https://github.com/adafruit/Adafruit_Sensor).

## Uplaoding firmware to Adafruit Feather M0 via command line (bossac)

An Adafruit tutorial is [here](https://learn.adafruit.com/welcome-to-circuitpython/non-uf2-installation).  Note that we need the 'arduino' branch of the bossac tool on github, which is version 1.7.X.

```
sudo bossac -p /dev/ttyACM0 -e -w -v -R firmware.bin
```

## Debugging the BME280 sensor

Sensor not working on Walt's RAK.  Q: is it because of connection to Feather / problem with Feather, or is it because of some setting on the Gateway?

Diagnostic:  some basic BME280 test code, non-LoRa -- just prints values out to serial port.  Wrote the binary, and then sent it to Walt's feather remotely -- and got back an error:

<img src="/img/valedalama/bme_test.png">

------
*09 May 2020*

## BME280 Node Fixed

Walt was able to fix the BME280 node by re-soldering nad re-wiring:

<img src="/img/valedalama/success_bme280.png">
</br>
</br>

## Local Sqlite database on USB

We've been able to get a local sqlite database up and running now, stored on a USB flash drive on the RAK:

<img src="/img/valedalama/local_first_iteration_1.png">
</br>
</br>
<img src="/img/valedalama/local_first_iteration_1_rak.png">
</br>
</br>
<img src="/img/valedalama/local_first_node_red.png">
</br>
</br>

## Human-readable date format

And we added a field to the database that provides a human-readable date.

<img src="/img/valedalama/human_readable_date.png">
</br>
</br>
## Overview

[Assembly Guide for Version 4](#version_4_assembly).

[Video explanation](https://youtu.be/LljqFv8GzxA) of the current status as of Oct 07 2020  ..

## AM2315 and 'new' i2c on Feather M0

Issue: we designed a [breakout board](https://github.com/edgecollective/valedalama-greenhouse-remote) (in Eagle CAD) to be milled in Portugal by [Lucio](); but the original intent was for a different, non-i2c sensor; the one we're using now is an i2c sensor (the [AM2315](https://www.adafruit.com/product/1293), and requires:
- 10K pullups on both signal lines
- that the signal lines be used as i2c lines, which isn't standard for the Feather M0 firmware.


## References

### I2C

- [Creating a new I2c interface on the M0 -- Adafruit](https://learn.adafruit.com/using-atsamd21-sercom-to-add-more-spi-i2c-serial-ports/creating-a-new-wire) 

- [Creating a new I2C interface on the M0 -- Sparkfun](https://learn.sparkfun.com/tutorials/adding-more-sercom-ports-for-samd-boards/all)

Ah -- update -- can't reassign the pins because of the 'pad constraint', see the section [here](https://learn.adafruit.com/using-atsamd21-sercom-to-add-more-spi-i2c-serial-ports/creating-a-new-wire#ok-so-lets-make-a-new-i2c-sercom-already-1603458-14).

### AM2315

- [Adafruit AM2315 library](https://github.com/adafruit/Adafruit_AM2315).

|[ ![fig2](/img/valedalama/feather_m0_lora.jpg)](/img/valedalama/feather_m0_lora.jpg)|
|:--:|
| Adafruit Feather M0 LoRa (for pin reference). |

## FAB Farm

[Location](https://www.google.com/maps?q=37.160365,-8.774516&shorturl=1)


|[ ![fig2](/img/valedalama/fabfarm.png)](/img/valedalama/fabfarm.png)|
|:--:|
| Lucio's FAB Farm. |

## Feather BME280 data export from server

One can grab CSV data from the Valedalama server like thus:

> ```http://64.227.0.108:8100/api/csv?limit=1000```

where the 'limit=N' parameter gives the 'most recent N values'.

A snapshot of all of the historical data from "Valedalama BME280 Feather" from the earliest collection date (July 10 2020) up through Oct 10 2020 can be downloaded [here](/data/historical_bme280_as_of_10_oct_2020.csv).

## Board Designs

### Remote

#### Remote Version 4: Eagle CAD

Design files are [here](https://github.com/edgecollective/valedalama-greenhouse-remote)

|[ ![fig2](/img/valedalama/remote_v4_schematic.png)](/img/valedalama/remote_v4_schematic.png)|
|:--:|
| Remote schematic, version 4. |

|[ ![fig2](/img/valedalama/remote_v4_board.png)](/img/valedalama/remote_v4_board.png)|
|:--:|
| Remote board, version 4. |

#### Remote Version 5 in KiCAD: 

Repo is [here](https://github.com/edgecollective/valedalama/tree/master/greenhouse/remote/v5).

|[ ![fig2](/img/valedalama/3d_render.png)](/img/valedalama/3d_render.png)|
|:--:|
| Remote board, version 5. |

--- 

### <a name="version_4_assembly"></a>Assembly Guide for Remote Node Version 4

(Update OCT 30 2020)

Lucio has milled both Version 3 and Version 4 of the remote node.  Current focus is on assembly of Version 4 (design files [here](https://github.com/edgecollective/valedalama-greenhouse-remote/blob/master/pcb/ver4/remote_v4_board.png).  

For reference, Version 4 board design looks like this:

|[ ![fig2](/img/valedalama/remote_v4_board.png)](/img/valedalama/remote_v4_board.png)|
|:--:|
| Remote board, version 4. |

It is a 'mother board' for a Feather M0 LoRa microcontroller.  

The remote board version 4 requires:
- A 1x12 and a 1x16 0.1" / 2.54mm female header, to hold the Feather in place.
- Note: the Feather also requires 1x12 and 1x16 2.54mm male headers soldered to it, as well as an antenna (a straight wire, or a helical one). I think this is already done.
- A 4-position 5mm spacing screw terminal (typically, a pair of 2-position screw terminals)
- A 3-position 5mm screw terminal 
- A 2-position 5mm screw terminal
- 3 resistors (all of them 10K, or all of them 4.7K).

It is obvious from the footprints on the board which of the above go where :)

Note: the ESP32 device only requires that the accompanying antenna that came with the baord be plugged into it (it's a bit fiddly, but no soldering required). 

-----

2020 Nov 10

![](/img/valedalama/v5_success.png)

The associated [version 5 kicad pcb file]() is easy to upload to [Aisler](aisler.net) (German PCB producer) -- about $25 euros for 3 PCBs, 3-5 day turnaround:

![](/img/valedalama/aisler_v5.png)

----

2020 Nov 11

Lucio's setup, with his milled board:

![](/img/valedalama/lucio_setup.jpeg)

Sensor working with the feather:

![](/img/valedalama/feather_working.jpeg)

Data flowing through to Bayou:

![](/img/valedalama/bayou_data.png)

----

2020 Nov 14

Next steps:

- Modify Bayou to allow for inputing date ranges
- Figure out reflashing of boards from command line via Pi
- Figure out setting wifi credentials (and OTA firmware) on ESP via bluetooth
- NRF52 bluetooth OTA firmware update in Arduino possible? If so maybe switch to NRF52 feather
- List the remote board and the esp32 gateway combo -- make a breakout board for the Heltec

Can offer ...

Remote:
- Mothbot
- Feather motherboard (add power input 12V or higher)

Gateway
- Heltec
- Heltec + motherboard (with timer chip)
- Quahog (advantage of power input 12V or higher)

Database:
- FarmOS
- Bayou


So -- all off-the-shelf, o r fully custom.
Along with guides for all of this.


### OTA for the remote node?

NRF52 OTA programming link (weather buoy project) [here](https://opensourceoceanweatherbuoy.wordpress.com/2018/03/11/nrf52-program-sketches-over-the-air/)

### Features to add in REV_C

- Heltec wifi connection debug on display
- Easy way to set up wifi & bayou on Heltec -- via bluetooth, or via 'router setup' / wifi
- Remote node should send status message whether or not the sensors worked

### TODO

- Change Feather send frequency to every 10 minutes
- Change the radio frequency to 868 to match Walt's order

---

2020 Nov 17

|[ ![fig2](/img/valedalama/temp_valedalama.png)](/img/valedalama/temp_valedalama.png)|
|:--:|
| Data coming in from first deploymend of milled board version of the remote node. |

bayou_longer.png
### Server

Pagination strategies with pouchdb -- useful for setting up the server, [here](https://pouchdb.com/2014/04/14/pagination-strategies-with-pouchdb.html)

### Humidity sensor issue?

Looks like the Humidity tends to get pegged ...

![](/img/valedalama/humidity_issue.png)

### Date Conversion formula in Excel

Example is [here[(https://docs.google.com/spreadsheets/d/1yDYKKenBeMRpYumavZ4Df_dnJOKyFEXB-Inp_YYGFdY/edit?usp=sharing).

----

2020 NOV 19

### Added 'hop' parameter and modified units on Bayou display

[![](/img/valedalama/temp_hopped.png)](/img/valedalama/temp_hopped.png)

NOTE:  running the branch 'ticks', code on gitlab [here](https://gitlab.com/dwblair/p2p-farm-server/-/tree/ticks).  Might need to tweak if a new sensor is added, because the ticks currently do only every hour.  

### Humidity sensor details

AM2315 temp + humidity sensor tech details:

[![](/img/valedalama/am2315_details.png)](/img/valedalama/am2315_details.png)

AM2315 [datasheet](https://cdn-shop.adafruit.com/datasheets/AM2315.pdf)

## Architecture Idea

Gateway is Heltec.  Can do AP wifi credentials and FarmOS / Bayou configuration.  

Remote node is Feather / Mothbot.  Has a DIP switch to modify the node ID. 

Both might allow for serial configuration, or OTA programming (need to add SPI Memory to Mothbot if so).

### Battery holders

3XAA holder [here](https://www.amazon.com/LampVPath-Battery-Holder-Leads-Wires/dp/B07WRQ3XTJ/ref=sr_1_7?dchild=1&keywords=3XAA+holder&qid=1605969565&s=electronics&sr=1-7).

Guide to battery holders and mounts [here](https://uk.rs-online.com/web/generalDisplay.html?id=ideas-and-advice/battery-holders-guide).

### Adafruit guide to using the battery on the Feather

Do's and don't's, [here](https://learn.adafruit.com/adafruit-feather-m0-adalogger/power-management).

What if we put use 3.3V regulator and power the Feather this way?  Try this experiment out at home.  Turning a Feather into a lower-power device would be a win.  

Breakout boards for:
- Feather M0 LoRa
- Moteino , and Moteino M0

Using: dip switch + MCP1700

---

2020 NOV 22

Looks like remote node (Feather) is requiring reset periodically (every few days) -- doesn't appear to be a battery issue.  Might be in the code -- e.g. if it doesn't read from sensor successfully.

### ESP32 Watchdog timer

Guide [here](https://iotassistant.io/esp32/enable-hardware-watchdog-timer-esp32-arduino-ide/).

Also, working code [here](https://medium.com/@supotsaeea/esp32-reboot-system-when-watchdog-timeout-4f3536bf17ef). <--- this looks like the proper setup.  Great!

### SAMD21 Watchdog timer

There's a discussion [here](https://eugeniopace.org/arduino/resiliency/2020/05/11/Using-a-Watchdog-to-fix-all-issues.html) <<-- this is a GREAT discussion.

Note that he's also got an e-ink project running, [here](https://eugeniopace.org/arduino/epaper/eink/stoicism/2020/01/18/A-Display-of-Stoic-Quotes-using-Arduino-and-e-Paper-Display.html).

Getting sleepy dog to work, [here](https://github.com/adafruit/Adafruit_SleepyDog/issues/9).

Another blog post on it [here](https://bitknitting.wordpress.com/2016/08/02/backyard-automatic-watering-using-a-featherarduino/).


### AVR Watchdog timers

Another article on the watchdog timer for AVRs is [here](https://create.arduino.cc/projecthub/rafitc/what-is-watchdog-timer-fffe20).

And yet another nice article for WDTs in AVRs is [here](https://circuits4you.com/2018/01/24/tutorial-on-arduino-watchdog-timer-setup/).

Good point made in [this tutorial](https://www.instructables.com/The-Arduino-Hang-Guardian-Arduino-Watchdog-Timer-T/):

> One possible issue with the watchdog timer, depending on the bootloader of your Arduino is that if the watchdog timer value is too low and the bootloader does not reset the timer when uploading new code, you may end up damaging your Arduino board in a way that it will always be stuck in the boot phase. The bootloader will try to start, but the timer will keep resetting the board, never allowing it to properly start. To prevent issues like this, make sure to always use threshold intervals of 2 seconds or more.

Another good description by Electronic Wings, [here](https://www.electronicwings.com/arduino/watchdog-in-arduino).

### Powerdown Sleep

Nice post from Tony D, [here](https://learn.adafruit.com/low-power-wifi-datalogging/power-down-sleep).

### ArduBadge system for Arduino libraries

Check out some of the libraries [here](https://www.ardu-badge.com/).

### Overview of system architecture

- Remote
- Gateway
- Server

### Remote access to Pis

- TeamViewer
- RealVNC
- UV4L.  Discussion [here](https://www.raspberrypi.org/forums/viewtopic.php?t=177028#p1128706).  RPI videoconference setup [here](https://www.linux-projects.org/download/rpi-videoconference-os-image/).

Indeed, this looks like cool software -- browser-based.  Check it [here](https://www.linux-projects.org/uv4l/tutorials/rpi-webapp-screen-audio-keyboard-sharing/).

Ah, a better, RPi-specific set of options is [here](https://raspberrytips.com/remote-desktop-raspberry-pi/).

Jim Spark's guide to port forwarding / SSH with Pis  [here](https://medium.com/@jimip6c12/raspberry-pi-dummy-tutorial-on-port-forwarding-and-ssh-to-pi-remotely-d4fbc2ed3bdf).

He says it's very dangerous to do; and that cloud proxy is better. His guide [here](https://medium.com/@jimip6c12/raspberry-pi-tutorial-on-the-most-secure-way-to-connect-to-your-pi-cloud-proxy-server-11867ddaac95).

pre-burning an image on the pi from remote.it, [here](https://remote.it/blog/how-to-use-a-raspberry-pi-to-remotely-access-your-office-network/).

#### Copy-paste in RealVNC

Descriptive link is [here](https://help.realvnc.com/hc/en-us/articles/360002253738-Copying-and-Pasting-Text).


### Remote Access via hyperssh

Diff of dwblair's hyperssh and mafintosh's versions, [here](https://github.com/mafintosh/hyperssh/compare/master...dwblair:master).

----

2020 NOV 23

REV_A of the 'greenhouse' system uses the following code:

- remote: featherm0_am2315_lora_sleep
- gateway: heltec_wifi_lora_bayou_farmos

Going to try a watchdog timer on the feather ...

Implemented very basic watchdog [here](https://github.com/edgecollective/valedalama/tree/master/greenhouse/REV_A/remote/feather_firmware/featherm0_am2315_lora_watchdog).

![](/img/valedalama/watchdog_attempt.png)


Data [here](http://159.65.226.222:3000/drives/3a28c09fa93ccf15513a055984148b02b0709f545c12013aaf25252f73626f62).

---
2020-11-26 20:33:48

### Design notes

Interesting Things Network post on a BME280 outdoor LoRa node, [here](https://www.thethingsnetwork.org/forum/t/lora-bme280-environmental-node-with-webbased-backend/9264).

Relies on a really low power LoRa node design based on an Atmel 328p -- elegant! -- [here](https://www.thethingsnetwork.org/forum/t/full-arduino-mini-lorawan-below-1ua-sleep-mode/8059) 

Nice post on OLED sleep current, [here](https://bitbanksoftware.blogspot.com/2019/06/how-much-current-do-oled-displays-use.html).  Looks like the 128x65 display I favor uses around 25 uA when asleep.

A nice general review of OLEDs and various libraries and use-cases, [here](https://bengoncalves.wordpress.com/2015/10/01/oled-display-and-arduino-with-power-save-mode/).  Includes code for putting the OLED to sleep.

---

## INTERIM TODO

- Make a mill-able PCB design in Eagle CAD for Lucio to mill [X]
- Make a manfuacture-able PCB design in KiCAD to send to that company in Germany
- Review: contact of company in Germany
- test timer chip with Heltec ESP32
- figure out how to load code remotely to Feather and to ESP32 via Pi
- set up data repository online
- display sensor data on a map

Need designs for:
- the remote node (Feather + sensors)
- the gateway node (Heltec ESP32 + LoRa + timer chip + BME280)


---
2020-11-29 04:42:55

# <a name="update_nov29"></a> Update NOV 29 2020

**Current situation.**  Adding the watchdog timer seems to have made the remote node more robust; it has been operating non-stop for several days now, plugged into the RAK Pi. We'd like to move to installing the device into the greenhouse.  Are there any things we ought to do first to improve the likelihood of success there?

There are two things we might consider doing immediately:  

1. **Reduce remote node power consumption.** The remote node is currently broadcasting every 10 seconds or so, and sleeping in between.  This is far more data than is useful, and will unnecessarily drain the battery.  We should change this to an interval of about 10 minutes or so.
2. **Add remote node battery measurement**.  It would be helpful to add remote battery level measurement to the remote node, so we can better assess the solar charging statistics.  Note: doing so would require re-programming the gateway, as well, to accommodate the additional parameter.   

**Discussion**.  (1) Above (increasing the sleep time between measurements / broadcasts) is an quick fix, which can be accomplished with the Feather plugged into the RAK, and the process has been done before, and recently.  The process for (2) should be straightforward, but hasn't been done before via the RAK.  It could require some fiddling, iterating, back-and-forth, and risks 'breaking' the system until the Arduino IDE is used; and we currently don't have an on-site way of using the Arduino IDE to reprogram the ESP32 (ran into security issues installing ESP32 on Walt's computer).  

**Recommendation**.  In following Lucio's philosophy of making minimal changes in-place to a system that is mostly working, my recommendatoin at this point would be: let's do (1) above (increase the sleep time), and wait on (2) (adding battery level). While it would be nice to measure battery level, adding the feature increases the risk that we'll have a somewhat 'bricked' system for a bit, and it seems that there's a fairly high chance of success if we can sleep the node for 10 minutes (and higher still if we can sleep longer, as we'd be even less likely to run the battery down).  In the meantime, I can work on workflow / testing for (2). 

**Proposed next steps**.  
- On 30 NOV or so, I will test a procedure for accomplishing (1) above -- increasing the remote node sleep time -- locally here in the US, attempting to increase the sleep time on the remote node to approx. 10 minutes.  
- If the code works, we can upload it to the remote node (via the RAK). This will require putting the remote node / Feather in 'bootloader' mode -- i.e. a 'double tap' on the RESET button, resulting in a pulsing red LED.  I will attempt to upload the new code remotely. We can then test this overnight, making sure that the remote node sends data every 10 minutes. 
- If that works, we can then move the remote node to the greenhouse. 

Meanwhile, I will test locally the procedure for accomplishing (2) above -- adding battery level monitoring to the remote node.

----
2020-11-30 08:57:54

### Watchdog Sleep

Use Moteino M0 sleep code as a reference, [here](https://lowpowerlab.com/guide/moteino/moteinom0/).

Test feed [here](http://159.65.226.222:3000/api/drives/0b15fcbcc3a7332e3bb061a7739398ffb2322f7feb9556bcc63e1879f0750ad7/csv)

Alright, looking for every 5 min, after 1606774953 ...

Checking:
- initial: 1606774953 -- Monday, November 30, 2020 5:22:33 PM
- next: 1606775266 -- Monday, November 30, 2020 5:27:46 PM

Works!  When get home will try for 10 minute intervals, and test the power consumption ...

---
2020-12-01 07:36:47

Update on code ...

timestamp difference:
- initial: 1606821668 -- Tuesday, December 1, 2020 6:21:08 AM
- final: 1606822287 -- Tuesday, December 1, 2020 6:31:27 AM

10 minute intervals!

Working code is part of "REV_A" greenhouse suite, [here](https://github.com/edgecollective/valedalama/tree/master/greenhouse/REV_A/remote/feather_firmware/30_NOV/featherm0_am2315_lora_watchdog_sleep).

Also have improved REV_A gateway code that displays wifi status (sort of), [here](https://github.com/edgecollective/valedalama/tree/master/greenhouse/REV_A/gateway/heltec_wifi_lora_bayou_farmos_monitorwifi).

---
2020-12-01 13:37:55

Note -- hadn't fully implemented the watchdog timer in previous REV_A version; and now we send a sensor reading on startup, which is easier for debugging -- latest version (ready for testing) [here](https://github.com/edgecollective/valedalama/tree/master/greenhouse/REV_A/remote/feather_firmware/30_NOV/featherm0_am2315_lora_watchdog_sleep_countup)

---
2020-12-15 08:45:07

![](/img/valedalama/connected.png)

Next steps:
- status of Feather code w/ watchdog and sleep?
- possible to reprogram the gateway remotely?  test locally first ...
- reconfigure the default Bayou graphing view so that appropriate for 10 min intervals, in anticipation of switching to 10 min from 10 sec intervals
- download and save historical CSV data as backup beforehand

Note: device is called walt-rak ... can connect via VNC viewer in Downloads ...

---
2020-12-15 12:25:29

### Programming heltec from command line
    
Guide [here](https://medium.com/jungletronics/esp-idf-programming-guide-wifi-lora-32-v2-53f89e12c96e)

Code is [here](https://github.com/edgecollective/vale-gateway/tree/main/rev_c/heltec_wifi_lora_bayou_testdata_vale/bin)

![](/img/valedalama/remote_1.png)

![](/img/valedalama/remote_2.png)

---
2020-12-17 09:45:17

looks like the p2p2-farm server code requires that hop>=1 in 'get-drives-data.js'

this is now in 'fixhop' branch

remote code sleeps at 0.15 mA

latest remote node code is [here](https://github.com/edgecollective/vale-gateway/tree/main/rev_c/remote_node/featherm0_am2315_lora_watchdog_sleep_countup) -- sleeps at 0.15mA, uses watchdog timer.  

latest gateway code is [here](https://github.com/edgecollective/vale-gateway/tree/main/rev_c/heltec_wifi_lora_bayou_farmos).  

next steps:
- generate binary file for heltec using local wifi, test.
- generate binary file for heltec using vale wifi. load remotely.
- generate binary file for feather.  load remotely.

first: testing that code works at 10 min interval.

command to load onto feather was: ./bossac -p /dev/ttyACM0 -e -w -v -R ./remote_watch_sleep_10min.ino.bin 

bayou feed is located [here](http://159.65.226.222:3000/drives/b02f7797b045956e79c019f889dfb080cadbfda6b468a9505835a82aadd5762c)

---
2020-12-17 15:23:43

![](/img/valedalama/greenhouse_v_0.2.png)

---
2020-12-23 08:17:40

Test of the battery level over a few days ...

![](/img/valedalama/sunny_days.png)

---
2021-01-01 17:48:29

Battery level seems to be holding steady! 

Feed [here](http://159.65.226.222:3000/drives/b02f7797b045956e79c019f889dfb080cadbfda6b468a9505835a82aadd5762c):

![](/img/valedalama/batt_jan2021.png)

---
2021-01-08 08:59:07

Batt level continues to hold ... feed [here](http://159.65.226.222:3000/drives/b02f7797b045956e79c019f889dfb080cadbfda6b468a9505835a82aadd5762c)

![](/img/valedalama/vale_batt_jan8.png)

---
2021-01-18 06:59:00

A month!  ![](/img/valedalama/vale_month.png)


---
2021-01-21 21:06:53

Still going strong! feed [http://159.65.226.222:3000/drives/b02f7797b045956e79c019f889dfb080cadbfda6b468a9505835a82aadd5762c](http://159.65.226.222:3000/drives/b02f7797b045956e79c019f889dfb080cadbfda6b468a9505835a82aadd5762c)


![](/img/valedalama/longrunning.png)


