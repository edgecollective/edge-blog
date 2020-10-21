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