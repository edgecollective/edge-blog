---
pageTitle: Mothbot Prototyping
layout: layout.njk
date: 2020-09-02
updated: 2020-09-28
tags: notes
#image: img/ec_flower_logo_small.png
image: /img/mothbot/mothbot.png
blurb: Prototyping the Mothbot -- an Arduino-compatible LoRa node for remote monitoring applications.
---

## First Build of the Mothbot

<iframe width="560" height="315" src="https://www.youtube.com/embed/3588DGfwW04" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



|[ ![parts.jpg](/img/mothbot/parts.jpg)](/img/mothbot/parts.jpg)|
|:--:|
|  |


## First Build Notes / Revision Ideas

- Should we break out a 0.1" i2c header, compatible with an SSD1306 display?  Maybe that's overkill for this project ...
- The footprints for the resistors should be longer 
- soldermask on the antenna hole -- no good -- need to use another approach for making that hole
- add pinout for the higher-voltage DC-DC?  maybe it feeds directly into the 3.3V LDO, too ... or can add jumpers
- radio configuration where there's a relay that is constantly 'on' on top of a pole ... powered by 12V bat ... 12V bat being the go-to off-grid battery ... 
- reorient the power VIN + GND so that the cable will trail / orient towards the ground allowing a vertical antenna? add a mechanical relief location?
- **BIG** -- caps on power circuit should be 1uF.  Pin order messed up on MCP1700.
- soldering the RFM95 -- really need to 'flood' the casselated pins in order for them to be connected properly -- would be good to have a diagnostic

## KiCAD notes

### Custom footprint as logo in KiCAD

Use the 'Bitmap to component converter' in the main KiCad window (the bitmappy-looking 'a' in the below screenshot) to convert a bitmap to a footprint.  Then you can import this footprint directly to the PCB layout (no need to have an associated symbol), as a logo. 

|[ ![parts.jpg](/img/mothbot/converter.png)](/img/mothbot/converter.png)|
|:--:|
|  Screenshot highlighting the 'bitmap to component converter' |

### Design Rules / Templates for OSHPark

[This guide](https://docs.oshpark.com/design-tools/kicad/kicad-design-rules/) has some nice info.

## Reference for QWIIC connector

|[ ![parts.jpg](/img/mothbot/qwiic.png)](/img/mothbot/qwiic.png)|
|:--:|
|  Sparkfun 'QWIIC' I2C Connector |

|[ ![parts.jpg](/img/mothbot/qwiic_board.png)](/img/mothbot/qwiic_board.png)|
|:--:|
|  Sparkfun 'QWIIC' I2C Connector |

[Sparkfun QWIIC reference](https://www.sparkfun.com/qwiic)

[JST SH 4 Pin Connector](https://www.adafruit.com/product/4208)

[Adafruit reference for JST SH 4 Pin QWIIC Pin Ordering](https://www.adafruit.com/product/4210)

## Adding a reset button

|[ ![parts.jpg](/img/mothbot/reset_button.png)](/img/mothbot/reset_button.png)|
|:--:|
|  Footprint for KMR2 pushbutton |

## Adding a DC-DC converter footprint

[TSR12450 Converter](https://www.adafruit.com/product/1065) -- 5V output

[TSR12433 Converter](https://www.adafruit.com/product/1066) -- 3.3V output

|[ ![parts.jpg](/img/mothbot/dc_dc.png)](/img/mothbot/dc_dc.png)|
|:--:|
|  Pinout for DC-DC |

|[ ![parts.jpg](/img/mothbot/dcdc_bottom.png)](/img/mothbot/dcdc_bottom.png)|
|:--:|
|  Footprint for DC-DC |

## Sensor notes

### HC-SR04

[Adafruit page](https://www.adafruit.com/product/3942)

### SHT10

[Adafruit page](https://www.adafruit.com/product/1298)

### AM2315

[Adafruit library](https://github.com/adafruit/Adafruit_AM2315)


### Arduino Libraries

Adafruit tutorail on installing Arduino libraries [here](https://learn.adafruit.com/adafruit-all-about-arduino-libraries-install-use).


## Version 1.0 Notes

Made explicit i2c header that will allow for display.  But this means that certain i2c sensors are no longer useful via screw terminal.  But, added a 'qwiic' connector for i2c ... so maybe what we do is to make a qwiic adapter for AM2315 (i2c version).  

Might need to change screw terminal size to 5mm, as they're far easier to source, it seems ...

Consider placing mounting holes at proper separation for 3XAA battery holder mounting holes ...
