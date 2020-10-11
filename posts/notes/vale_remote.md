---
pageTitle: Vale da Lama Remote Node
layout: layout.njk
date: 2020-10-07
updated: 2020-10-07
tags: notes 
image: img/placeholder.png
blurb: Greenhouse node at Vale da Lama
---

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

## Version 4 of the Board

|[ ![fig2](/img/valedalama/remote_v4_schematic.png)](/img/valedalama/remote_v4_schematic.png)|
|:--:|
| Remote schematic, version 4. |

|[ ![fig2](/img/valedalama/remote_v4_board.png)](/img/valedalama/remote_v4_board.png)|
|:--:|
| Remote board, version 4. |

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

