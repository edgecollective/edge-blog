---
pageTitle: Mothbot Prototyping
layout: layout.njk
date: 2020-09-02
updated: 2020-10-06
tags: notes
#image: img/ec_flower_logo_small.png
image: /img/mothbot/mothbot.png
blurb: Prototyping the Mothbot -- an Arduino-compatible LoRa node for remote monitoring applications.
---


## Table of Contents

- [Mothbot Version 3 Parts List](#mothbot_ver3_parts)

## TODO

- Cite the JeeLab post on running the 328p at 3.3V and 16MHz, using UNO bootloader 

## Background

Mothbot is based on the initial JeeNode design by JeeLabs.

It's similar to many 'minimal Arduino' designs.  For example:
- Jameco 'build your own arduino' [kit](https://www.jameco.com/webapp/wcs/stores/servlet/Product_10001_10001_2151259_-1)
- associated [tutorial](https://www.jameco.com/jameco/workshop/jamecobuilds/arduinocircuit.html)

## Burning a bootloader on a 328P using a 328P

Guide [here](http://www.vwlowen.co.uk/arduino/bootloader/page2.htm)


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

---

## Misc Notes

### Aside on STM32

Nice note on [STM32 boards](https://jeelabs.org/2015/11/25/pi-based-stm32f103-development/index.html) from Jeenode, by the way.


### Installing Arduino Libraries

Adafruit tutorail on installing Arduino libraries [here](https://learn.adafruit.com/adafruit-all-about-arduino-libraries-install-use).


---

## Sensor notes

### HC-SR04

[Adafruit page](https://www.adafruit.com/product/3942)

### SHT10

[Adafruit page](https://www.adafruit.com/product/1298)

### AM2315

[Adafruit library](https://github.com/adafruit/Adafruit_AM2315)

---

## Mothbot Version 1.0 Notes

Made explicit i2c header that will allow for display.  But this means that certain i2c sensors are no longer useful via screw terminal.  But, added a 'qwiic' connector for i2c ... so maybe what we do is to make a qwiic adapter for AM2315 (i2c version).  

Might need to change screw terminal size to 5mm, as they're far easier to source, it seems ...

Consider placing mounting holes at proper separation for 3XAA battery holder mounting holes ...

---

## Mothbot Version 2.0 Notes

1. Need bigger spacing on MCP1700 footprint
2. Need C1 & R1 to be 0.1 uF and 10K (as they are), apparently, for bootloader to auto-reset properly (timing issue?)
3. Note: I cannibalized C1 from a ver 1.0 Mothbot, need to replace!
4. Reset button doesn't seem to work?
5. Swapped A4 & A5 (they are SDA and SCL, not SCL and SDA, respectively) -- need to fix in order for monitor to work
6. Add 0.1" headers for all terminals, as per i2c ... space as per breadboard?
7. Match mounting hole spacing to battery pack?
8. Nice [note](https://jeelabs.org/2013/05/16/measuring-the-battery-without-draining-it/index.html) on measuring the battery level without draining it.

----

## Mothbot Version 3.0 Notes

|[ ![parts.jpg](/img/mothbot/version3_draft.png)](/img/mothbot/version3_draft.png)|
|:--:|
|  First stab at version 3. |


|[ ![parts.jpg](/img/mothbot/3drender.png)](/img/mothbot/3drender.png)|
|:--:|
|  3D Render of Final for Verison 3. |

|[ ![parts.jpg](/img/mothbot/mothbot_top.png)](/img/mothbot/mothbot_top.png)|
|:--:|
|  Final of version 3, as submitted to OSHPARK. Board design files are [here](https://github.com/edgecollective/dippy-slim/tree/master/ver3) |

Update (13 OCT 2020):  Version 3 passed the following tests:

- Power
- Programmable
- LoRa Radio
- i2c port
- i2c Screen
- D4 works


|[ ![figA2](/img/mothbot/mothbot_v3_mvp.png)](/img/mothbot/mothbot_v3_mvp.png)|
|:--:|
| Minimal version of the Mothbot version 3. |


|[ ![figA2](/img/mothbot/ver3_success.png)](/img/mothbot/ver3_success.png)|
|:--:|
| Mothbot Version 3 seems to work! See the Mothbot Version 3 [initial build video](https://youtu.be/YAIVfK-kL4o).|

Things to change:
- make the resistor footprints longer so that they can lie flat
- larger text for the scre terminals
- J1 and J3 terminals are obscured by i2c display -- move stuff?

### Notes on Display

- Current (larger) display is nice, but prevents access to screw terminals. Uses 'VCC GND SCL SDA'
- Can add a rearranged i2c port at the 'top' of U3 (the ATMEGA), arranged as 'GND VCC SCL SDA', and accommodate a [smaller screen](https://www.amazon.com/Pieces-Display-Module-SSD1306-3-3V-5V/dp/B08CDN5PSJ/ref=sr_1_8?dchild=1&keywords=SSD1306&qid=1602675432&sr=8-8).  
- Note: 'GND VCC SCL SDA' [is also common](https://www.amazon.com/Display-Module-SSD1306-Du-pont-Arduino/dp/B07VDXYDVY/ref=sr_1_9?dchild=1&keywords=SSD1306&qid=1602675432&sr=8-9) for the larger displays. 

So, maybe we switch over to 'GND VCC SCL SDA' in general, move pins to above U3. 

### <a name="mothbot_ver3_parts"></a> Mothbot Version 3 Parts List / BOM

- [BOM in spreadsheet form](https://docs.google.com/spreadsheets/d/10DjISUPHa8-PfmeBYISGM-iekXHcvAeN48qu73FdD7M/edit?usp=sharing). Includes link to PCB files on github and for ordering via OSHPark.

Some of the parts list on Amazon:

Aside: some of the Mothbot parts via Amazon:
- [the rfm95](https://www.amazon.com/gp/product/B07VWQY6GG/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1)
- [inexpensive FTDI clone](https://www.amazon.com/gp/product/B07X4ZTRD2/ref=ppx_yo_dt_b_asin_title_o01_s01?ie=UTF8&psc=1)
- [cute helical antennae](https://www.amazon.com/gp/product/B07MD9G9LG/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1)
- [MCP1700 voltage reg](https://www.amazon.com/gp/product/B00M1E0FVM/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&psc=1)
- [Crystal](https://www.amazon.com/gp/product/B00SWK2HCO/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1)
- [328p w/ Arduino UNO bootloader](https://www.amazon.com/gp/product/B01263IMU8/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1)

Also: 
- [Heltec Wifi + Lora based on ESP32](https://www.amazon.com/gp/product/B076MSLFC9/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&psc=1)


Update 14 OCT 2020:

|[ ![figA2](/img/mothbot/mothbot_success.png)](/img/mothbot/feather_and_mothbot_talking.mp4)|
|:--:|
| Sands Fish's build of the Mothbot! |

----

## Misc

Using Electron to talk to serial port: 
- [Nice example](https://github.com/serialport/electron-serialport.git)
- [Electron boilerplates](https://www.electronjs.org/community#boilerplates)
- [Read the serialport using NodeJS](https://hackernoon.com/arduino-serial-data-796c4f7d27ce)
- [Full project on using Electron with serialport](https://girishjoshi.io/post/access-serialport-from-electron-application-and-creating-gui-for-micropython-repl-on-esp8266/) <--- this is the one to try

## Work Log

---

Oct 24 2020

Created dimensions document for Mothbot ver 0.1, [here](https://github.com/edgecollective/dippy-slim/blob/master/ver1/mothbot_dim/mothbot_dim.pdf).

---

NOV 16 2020

Photo of latest version in action here:

![](/img/mothbot/mothbot_am2315.jpg)

## Web USB

Nice description [here](https://learn.adafruit.com/using-webusb-with-arduino-and-tinyusb)

---
2021-01-13 18:46:49

New repo for Mothbot design files and code [here](https://github.com/edgecollective/mothbot)

---
2021-01-14 21:23:57

If the mothbot isn't receiving, it might be because the 'INT' pin isn't soldered properly:
e
![](/img/mothbot/mothbot_rev4_int_d2_14_matchup.png)

---
2021-01-15 10:44:21

Below pulled in from 'e-ink' notes ...


### Grid Squares

Ham Radio for Arduino and Picaxe book --- [Description](http://www.arrl.org/shop/Ham-Radio-for-Arduino-and-PICAXE/), [Amazon](https://www.amazon.com/Ham-Radio-Arduino-Picaxe-Arrl/dp/087259324X).

Source code for generating tiles from OSM is [here](http://hamradioprojects.com/authors/wa5znu/+marinus/code/)

Grid square locator on above site is broken; perhaps [this](https://www.k2dsl.com/2008/08/27/finding-grid-square-locators/) works?

Grid square locator [here](http://www.arrl.org/grid-squares).

Computing lat / lon [here](https://stevemorse.org/jcal/latlon.php).

Conant road lat / lon: 42.41158	-71.2983

Grid square utility [here](http://www.levinecentral.com/ham/grid_square.php) works, but doesn't give 10 character grid squares ...

Another tool is [here](https://dxcluster.ha8tks.hu/hamgeocoding/), which generates a nice overlay ... <-- this is the tool to use!

So, the combined tools are:
- identifying your grid square in ham radio, [here](https://dxcluster.ha8tks.hu/hamgeocoding/).
- using a python script to grab the tiles, [here](http://hamradioprojects.com/authors/wa5znu/+marinus/osm/) -- seems to be broken.

Example grid square: 


Finding gridsquares from lat / lon [here](https://www.amsat.org/amsat-new/tools/grids.php)


Generator [here](https://dxcluster.ha8tks.hu/hamgeocoding/).  Uses a nice open source [geocoding app](https://nominatim.org/) that works with OSM.  The author, [ha8tks](https://twitter.com/ha8tks?lang=en), has a [repo on github](https://github.com/ha8tks/Leaflet.Maidenhead) that applies the GridSquare layout in Leaflet.

![](/img/eink/gridquare.png)

![](/img/eink/weston.png)

Reference on gridsquares [here](https://www.amsat.org/amsat-new/tools/grids.php)

Ham radio chat on grid squares [here](https://www.youtube.com/watch?v=3w2SPj5Hs5Q).

General term for this is the [Maidenhead Gridsquare System](https://en.wikipedia.org/wiki/Maidenhead_Locator_System).

(Alternative:  the [World Geodetic System](https://en.wikipedia.org/wiki/World_Geodetic_System))

Nice [explanation](https://www.hamradio.in/circuits/grid_locator_system.php) of the grid locator system.

Nice [historical background](http://www.jonit.com/fieldlist/maidenhead.htm) on the system. 

Really nice [video explanation](https://www.youtube.com/watch?v=rlkUAHGw_Sg) of grid squares.

![](/img/eink/gridquare.png)

![](/img/eink/weston.png)

Reference on gridsquares [here](https://www.amsat.org/amsat-new/tools/grids.php)

Ham radio chat on grid squares [here](https://www.youtube.com/watch?v=3w2SPj5Hs5Q).

General term for this is the [Maidenhead Gridsquare System](https://en.wikipedia.org/wiki/Maidenhead_Locator_System).

(Alternative:  the [World Geodetic System](https://en.wikipedia.org/wiki/World_Geodetic_System))

Nice [explanation](https://www.hamradio.in/circuits/grid_locator_system.php) of the grid locator system.

Nice [historical background](http://www.jonit.com/fieldlist/maidenhead.htm) on the system. 

Really nice [video explanation](https://www.youtube.com/watch?v=rlkUAHGw_Sg) of grid squares.

---
2021-01-15 10:48:51

Leaflet + Maidenhead Locator system [here](https://github.com/ha8tks/Leaflet.Maidenhead)

Key file is [here](https://github.com/ha8tks/Leaflet.Maidenhead/blob/master/src/L.Maidenhead.js) -- this is how to figure out GPS on the system.

---
2021-01-15 21:25:09

![](/img/mothbot/back_and_forth_mv4.png)

![](/img/mothbot/433_900_compare.png)

---
2021-01-16 21:17:20

Some cosmetic fixes, resulting in rev4B!  [github](https://github.com/edgecollective/mothbot/tree/main/ver4B/hardware) | [oshpark](https://oshpark.com/shared_projects/h7LluxAz)

---
2021-01-17 08:50:37

Itsybitsy [schematic](https://cdn-learn.adafruit.com/assets/assets/000/054/505/original/adafruit_products_schem.png?1527457190), with power circuit:

![](/img/mothbot/itsybitsy_power.png)

Tiny pico power [schematic](https://github.com/tinypico/tinypico-hardware/blob/master/TinyPICO%20Release%20P3/TinyPICO_Schematic.pdf) and power circuit:

![](/img/mothbot/tinypico_power.png)

associated p-channel (d-s) LP0404N3T5G mosfet -- [LP0404N3T5G datasheet](https://datasheet.lcsc.com/szlcsc/Leshan-Radio-LP0404N3T5G_C172433.pdf)

---
2021-01-28 14:06:53

## Low Power

[https://github.com/rocketscream/Low-Power](https://github.com/rocketscream/Low-Power)

Put device into very deep sleep and listen to serial -- code example [https://arduino.stackexchange.com/questions/13167/put-atmega328-in-very-deep-sleep-and-listen-to-serial](https://arduino.stackexchange.com/questions/13167/put-atmega328-in-very-deep-sleep-and-listen-to-serial)