---
pageTitle: Vale da Lama Greenhouse Monitoring
layout: layout.njk
date: 2020-10-07
updated: 2020-10-21
tags: notes 
image: img/placeholder.png
blurb: Greenhouse monitoring electronics at Vale da Lama
---

## TODO

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





