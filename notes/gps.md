---
pageTitle: Off-grid GPS
layout: layout.njk
date: Last Modified
updated: Last Modified
tags: notes 
image: /img/gps/spark_gps.png
blurb: Off-grid gps navigation
---

---
2021-10-05 12:29:14

[https://www.sparkfun.com/products/15210](https://www.sparkfun.com/products/15210)

schematic for sparkfun project [https://cdn.sparkfun.com/assets/3/c/2/2/e/SparkFun_Ublox_SAM-M8Q.pdf](https://cdn.sparkfun.com/assets/3/c/2/2/e/SparkFun_Ublox_SAM-M8Q.pdf)

![](/img/gps/spark_gps.png)

EC project stub: [https://github.com/edgecollective/gps](https://github.com/edgecollective/gps)

2032 batt holder [https://www.digikey.com/en/products/detail/keystone-electronics/3034/4499289](https://www.digikey.com/en/products/detail/keystone-electronics/3034/4499289)

keystone 1060 batt holder for 2032 [https://www.digikey.com/en/products/detail/keystone-electronics/1060/303556](https://www.digikey.com/en/products/detail/keystone-electronics/1060/303556)

keystone 1058 batt holder [https://www.digikey.com/en/products/detail/keystone-electronics/1058/5255484](https://www.digikey.com/en/products/detail/keystone-electronics/1058/5255484)

compass [https://learn.adafruit.com/lsm303-accelerometer-slash-compass-breakout/downloads](https://learn.adafruit.com/lsm303-accelerometer-slash-compass-breakout/downloads)

![](/img/gps/side_button_type.png)

---
2021-10-13 14:15:47

Neo-6M module [https://create.arduino.cc/projecthub/ruchir1674/how-to-interface-gps-module-neo-6m-with-arduino-8f90ad](https://create.arduino.cc/projecthub/ruchir1674/how-to-interface-gps-module-neo-6m-with-arduino-8f90ad)

gps + compass [https://www.amazon.com/dp/B078Y6323W/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B078Y6323W&pd_rd_w=aGiBN&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=WPpic&pf_rd_r=H40Q96B44260656MZAJC&pd_rd_r=aafb6106-3094-419c-a62e-49b3e5661f3f&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFBTUc2Tjc4MFFVRlUmZW5jcnlwdGVkSWQ9QTA5NjMzMTFON1czTTBVREgyVEkmZW5jcnlwdGVkQWRJZD1BMTAzOTc4MjRFWlpYQkJSMzJYSCZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=](https://www.amazon.com/dp/B078Y6323W/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B078Y6323W&pd_rd_w=aGiBN&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=WPpic&pf_rd_r=H40Q96B44260656MZAJC&pd_rd_r=aafb6106-3094-419c-a62e-49b3e5661f3f&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFBTUc2Tjc4MFFVRlUmZW5jcnlwdGVkSWQ9QTA5NjMzMTFON1czTTBVREgyVEkmZW5jcnlwdGVkQWRJZD1BMTAzOTc4MjRFWlpYQkJSMzJYSCZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=)

---
2021-10-13 15:22:33

neo-6m black pinout ![](/img/gps/neo-6m-black-pinout.png)

---
2021-10-29 15:49:19

beitan gps + compass widget [https://www.amazon.com/dp/B078Y6323W](https://www.amazon.com/dp/B078Y6323W)

pinout:

![](/img/gps/beitan.png)

repo with previous 'compass experiments' -- [https://github.com/edgecollective/compass-experiments](https://github.com/edgecollective/compass-experiments)

---
2021-11-18 13:01:19

Going to keep going by working on dc4 [https://github.com/edgecollective/dog-compass](https://github.com/edgecollective/dog-compass)

Switching over to the feather sense -- has on-board compass + accel -- [https://learn.adafruit.com/adafruit-feather-sense](https://learn.adafruit.com/adafruit-feather-sense)

DC4 uses 10DOF breakout, gets compass and gps readings ...

basing DC5 off of 10DOF, and this code: [https://github.com/edgecollective/compass-experiments/blob/main/ver_0.4-alpha/base_featherm0_i2c_compass_oled_lora/base_featherm0_i2c_compass_oled_lora.ino](https://github.com/edgecollective/compass-experiments/blob/main/ver_0.4-alpha/base_featherm0_i2c_compass_oled_lora/base_featherm0_i2c_compass_oled_lora.ino)

DC5 can now do the compass thing. [https://github.com/edgecollective/dog-compass/tree/c405d9c2479334dbd5f5723fbf30fd0d8ae008ed/dc5](https://github.com/edgecollective/dog-compass/tree/c405d9c2479334dbd5f5723fbf30fd0d8ae008ed/dc5)

remote (r1) is based directly off this code: [https://github.com/edgecollective/compass-experiments/blob/main/ver_0.4-alpha/remote_featherm0/remote_featherm0.ino](https://github.com/edgecollective/compass-experiments/blob/main/ver_0.4-alpha/remote_featherm0/remote_featherm0.ino)

---
2021-11-19 08:08:38

How to calibrate the 10DOF / 9DOF sensor ...

---
2021-11-19 11:51:13

MIT App inventor

[http://iot.appinventor.mit.edu/assets/tutorials/MIT_App_Inventor_Basic_Connection.pdf](http://iot.appinventor.mit.edu/assets/tutorials/MIT_App_Inventor_Basic_Connection.pdf)

Example codes for receiving text [https://community.appinventor.mit.edu/t/ble-esp32-bluetooth-send-receive-arduino-ide-multitouch/1980/7](https://community.appinventor.mit.edu/t/ble-esp32-bluetooth-send-receive-arduino-ide-multitouch/1980/7)

---
2021-11-19 12:30:48

[https://www.reddit.com/r/esp32/comments/q3jm20/advice_on_pushing_gps_positions_from_esp32_to/](https://www.reddit.com/r/esp32/comments/q3jm20/advice_on_pushing_gps_positions_from_esp32_to/)

[https://github.com/Buffalchill/ESP32-BLE-Appinventor2](https://github.com/Buffalchill/ESP32-BLE-Appinventor2)

[https://arduinoplusplus.wordpress.com/2017/05/23/reliable-bluetooth-le-comms-between-arduino-and-mit-app-inventor-ai2/](https://arduinoplusplus.wordpress.com/2017/05/23/reliable-bluetooth-le-comms-between-arduino-and-mit-app-inventor-ai2/)

[https://github.com/RuiSantosdotme/ESP32-Course/tree/master/code](https://github.com/RuiSantosdotme/ESP32-Course/tree/master/code)

---
2021-11-19 13:19:29

Below example apk worked:

[https://github.com/dwblair/ESP32-Course](https://github.com/dwblair/ESP32-Course)

Associated post to extend to two values, here: [https://rntlab.com/question/esp32-ble-to-mit-app/](https://rntlab.com/question/esp32-ble-to-mit-app/)

---
2021-12-02 12:44:58

This device now in stock:

[https://www.adafruit.com/product/4413](https://www.adafruit.com/product/4413)

Great post on magnetic sensor calibration: [https://learn.adafruit.com/adafruit-sensorlab-magnetometer-calibration](https://learn.adafruit.com/adafruit-sensorlab-magnetometer-calibration)

---
2021-12-02 13:15:00

Okay, looks like this is the GPS module to work with for now: 

[https://www.amazon.com/Microcontroller-Compatible-Sensitivity-Navigation-Positioning/dp/B07P8YMVNT/ref=sr_1_3?keywords=gps%2Barduino&qid=1638468855&sr=8-3&th=1](https://www.amazon.com/Microcontroller-Compatible-Sensitivity-Navigation-Positioning/dp/B07P8YMVNT/ref=sr_1_3?keywords=gps%2Barduino&qid=1638468855&sr=8-3&th=1)

The LSM303 module via amazon: [https://www.amazon.com/HiLetgo-LSM303DLHC-Compass-Accelerometer-Magnetometer/dp/B07X3GFKYD/ref=sr_1_5?keywords=magnetometer+accelerometer&qid=1638469212&sr=8-5](https://www.amazon.com/HiLetgo-LSM303DLHC-Compass-Accelerometer-Magnetometer/dp/B07X3GFKYD/ref=sr_1_5?keywords=magnetometer+accelerometer&qid=1638469212&sr=8-5)

LSM303 flora: [https://www.amazon.com/Adafruit-Flora-Accelerometer-Compass-Sensor/dp/B00OKJFELC](https://www.amazon.com/Adafruit-Flora-Accelerometer-Compass-Sensor/dp/B00OKJFELC)

LSM303 via adafruit STEMMA: [https://www.adafruit.com/product/4413](https://www.adafruit.com/product/4413)

LSM303 in some random Amazon package: [https://www.amazon.com/HiLetgo-LSM303DLHC-Compass-Accelerometer-Magnetometer/dp/B07X3GFKYD/ref=sr_1_1?keywords=LSM303&qid=1638470322&sr=8-1](https://www.amazon.com/HiLetgo-LSM303DLHC-Compass-Accelerometer-Magnetometer/dp/B07X3GFKYD/ref=sr_1_1?keywords=LSM303&qid=1638470322&sr=8-1)

---
2021-12-06 15:18:49

M0 wake from interrupt code example: [https://github.com/ProjectsByJRP/M0_Sleep_External_Int](https://github.com/ProjectsByJRP/M0_Sleep_External_Int)

Also: the RTCZero library is available

This seems to be the edge-mount SMA part: [https://www.digikey.com/en/products/detail/samtec-inc/SMA-J-P-H-ST-EM1/2602450](https://www.digikey.com/en/products/detail/samtec-inc/SMA-J-P-H-ST-EM1/2602450)

Appropriate lora antenna on Digikey: [https://www.digikey.com/en/products/detail/seeed-technology-co.,-ltd/318020389/15277460?utm_adgroup=RF%20Antennas&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Product_RF%2FIF%20and%20RFID_NEW&utm_term=&utm_content=RF%20Antennas&gclid=CjwKCAiAhreNBhAYEiwAFGGKPACMhG_iZ7Z5NfBJH9PoIr5wcTi-rGeWcapD-65skeYaGehZQl5PVhoCm2UQAvD_BwE](https://www.digikey.com/en/products/detail/seeed-technology-co.,-ltd/318020389/15277460?utm_adgroup=RF%20Antennas&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Product_RF%2FIF%20and%20RFID_NEW&utm_term=&utm_content=RF%20Antennas&gclid=CjwKCAiAhreNBhAYEiwAFGGKPACMhG_iZ7Z5NfBJH9PoIr5wcTi-rGeWcapD-65skeYaGehZQl5PVhoCm2UQAvD_BwE)

QT to male header cable on adafruit: [https://www.adafruit.com/product/4209](https://www.adafruit.com/product/4209)

horiztonal JST 4 pin connector / stemma [https://www.adafruit.com/product/4392](https://www.adafruit.com/product/4392) -- hor

vertical (through-hole) JST 4 pin connector: [https://www.adafruit.com/product/4390](https://www.adafruit.com/product/4390) -- even nicer! use this on CO2!

adafruit monochrome OLED 128x64 that works with stemma -- nice find! [https://www.adafruit.com/product/326](https://www.adafruit.com/product/326) 

image transfer, bluetooth BLE [https://learn.adafruit.com/bluefruit-le-connect/image-transfer](https://learn.adafruit.com/bluefruit-le-connect/image-transfer)

tile downloader via OSM: [https://wiki.openstreetmap.org/wiki/OpenLayers_Local_Tiles_Example](https://wiki.openstreetmap.org/wiki/OpenLayers_Local_Tiles_Example)

downloading tiles [https://help.openstreetmap.org/questions/43792/can-i-download-osm-tiles-for-offline-use](https://help.openstreetmap.org/questions/43792/can-i-download-osm-tiles-for-offline-use)

openmaptiles [https://openmaptiles.org/](https://openmaptiles.org/)

create vector tiles from openstreetmap [https://openmaptiles.org/docs/generate/generate-openmaptiles/](https://openmaptiles.org/docs/generate/generate-openmaptiles/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/GxnbLshM1iM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

openlayers with tile coords for debugging [https://openlayers.org/en/latest/examples/canvas-tiles.html](https://openlayers.org/en/latest/examples/canvas-tiles.html)

---
2021-12-07 10:51:27

Adafruit TFT display I have for testing: [https://www.adafruit.com/product/358](https://www.adafruit.com/product/358)

Associated product tutorial: [https://learn.adafruit.com/1-8-tft-display/downloads](https://learn.adafruit.com/1-8-tft-display/downloads)

imagemagick create 24 bit bitmap: 

> convert 2color.bmp -type truecolor 24bit.bmp

resize:

> convert dragon_sm.gif    -resize 64x64

If use '^', it will fill the image based on smallest dimension:

> convert dragon_sm.gif    -resize 64x64^

Simple plotting code using Adafruit graphics library: 

[https://forum.arduino.cc/t/another-free-graph-function-for-plotting-in-cartesian-space/354751](https://forum.arduino.cc/t/another-free-graph-function-for-plotting-in-cartesian-space/354751)

Waveshare display [https://www.amazon.com/gp/product/B0728BJTZC/ref=sw_img_1?smid=&psc=1](https://www.amazon.com/gp/product/B0728BJTZC/ref=sw_img_1?smid=&psc=1)

---
2021-12-24 12:25:22

gps module pinout
![](/img/gps/gps_module_pinout.png)

working version as of today:

[https://github.com/edgecollective/dog-compass/tree/9dd1343122612f8e2b601ca395b1c6348577246c/v3](https://github.com/edgecollective/dog-compass/tree/9dd1343122612f8e2b601ca395b1c6348577246c/v3)

---
2021-12-29 14:48:24

Kicad layout ver4 / 'base_a' [https://github.com/edgecollective/dog-compass/tree/3671ac027cc06751b30f98f3e344d27f657715df/v4/hardware/base_a/kicad](https://github.com/edgecollective/dog-compass/tree/3671ac027cc06751b30f98f3e344d27f657715df/v4/hardware/base_a/kicad)

---
2021-12-29 21:13:27

Basic layout with sharp screen placement and gps 'stalk':

[https://github.com/edgecollective/dog-compass/tree/5e5f83493c11156845356251b360087a64f98a79/v4](https://github.com/edgecollective/dog-compass/tree/5e5f83493c11156845356251b360087a64f98a79/v4)

To do: 
- check mosfet footprint
- add QWIIC connector
- add 'divot' for JST cable
- add anchor 'holes'
- check size of gps antenna and make 'stalk' appropriately

---
2021-12-30 12:38:49

For now, going to go with this version of the GPS module:

[https://www.amazon.com/dp/B01D1D0F5M](https://www.amazon.com/dp/B01D1D0F5M)

Cheap, large antenna, and flat back for taping

---
2022-01-03 16:31:03

Note:  the BNO005 IMU has 'suspend' capability in adafruit arduino library -- 

[https://github.com/adafruit/Adafruit_BNO055/blob/master/Adafruit_BNO055.cpp#L791](https://github.com/adafruit/Adafruit_BNO055/blob/master/Adafruit_BNO055.cpp#L791)

-- so let's just connect it to 3V & GND, don't put it on mosfet as yet

apparently suspend should use 0.04 mA (40 uA?), cf [https://cdn-shop.adafruit.com/datasheets/BST_BNO055_DS000_12.pdf](https://cdn-shop.adafruit.com/datasheets/BST_BNO055_DS000_12.pdf)

---
2022-01-04 12:09:11

Adafruit edge-launch connector: [https://www.adafruit.com/product/1864](https://www.adafruit.com/product/1864)

Note: requires a .8mm thickness board. Should we go with through-hole instead?

Maybe no: for simpler antennas, better to have ability to just go 'straight out' ... 
(although could have right-angle through-hole ...)

Through-hole might be safer for now -- amphenol part that seems to work: [https://www.digikey.com/en/products/detail/amphenol-rf/132136RP/1011910?s=N4IgjCBcoLQBxVAYygMwIYBsDOBTANCAPZQDa4YArCALoC%2BdhATGeAMxNhsBsASgAq06QA](https://www.digikey.com/en/products/detail/amphenol-rf/132136RP/1011910?s=N4IgjCBcoLQBxVAYygMwIYBsDOBTANCAPZQDa4YArCALoC%2BdhATGeAMxNhsBsASgAq06QA)

eep! $11 on digikey!

okay, more specs:  

- looks like lora comes in SMA and RP-SMA
- looks like we want 50 Ohm impedance 

Maybe edge-mount is better in terms of price ...

Okay Amphenol 132134 -- vertical, through-hole, SMA is $5 on digikey: [https://www.digikey.com/en/products/detail/amphenol-rf/132134/1011907?utm_adgroup=Connectors%20and%20Interconnects&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Supplier_Amphenol%20RF_0115_Co-op&utm_term=&utm_content=Connectors%20and%20Interconnects&gclid=Cj0KCQiA_c-OBhDFARIsAIFg3exWn5x0L7IgpDIH9tc9GQhpB8LEb58bqIZu1k5v-SAiMrYhqyfy_aIaAu0iEALw_wcB](https://www.digikey.com/en/products/detail/amphenol-rf/132134/1011907?utm_adgroup=Connectors%20and%20Interconnects&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Supplier_Amphenol%20RF_0115_Co-op&utm_term=&utm_content=Connectors%20and%20Interconnects&gclid=Cj0KCQiA_c-OBhDFARIsAIFg3exWn5x0L7IgpDIH9tc9GQhpB8LEb58bqIZu1k5v-SAiMrYhqyfy_aIaAu0iEALw_wcB)

$5 Molex edge-launch 0732511150 SMA: [https://www.digikey.com/en/products/detail/molex/0732511150/1465156](https://www.digikey.com/en/products/detail/molex/0732511150/1465156); datasheet: [https://www.molex.com/pdm_docs/sd/732511150_sd.pdf](https://www.molex.com/pdm_docs/sd/732511150_sd.pdf)

looks like it would accommodate 1.6 mm thickness board ...

Molex 0733910083 SMA-RA right-angle through-holde, cheap -- $4 -- [https://www.digikey.com/en/products/detail/molex/0733910083/9740783](https://www.digikey.com/en/products/detail/molex/0733910083/9740783)

check footprint:  same as prior -- seems standard through-hole footprint -- 

Verdict: let's do through-hole for now to eliminate variable of board thickness 

---
2022-01-05 13:44:48

Pinout assignments

A0 Free / optional lorawan
A1 Speaker 
A2 Button A
A3 Button B
A4 Button C
A5 Write Permit

D0  RX
D1  TX
D5  Sharp Display
D6  LoRa RST
D9  GPS Power Switch
D10  free (so that we can use microsd breakout)
D11  LoRa CS 
D12  LoRa IRQ 
D13  free

Submitted to JLCPCB 5-JAN-2021: version 4 of 'tracker' v 0.1

[https://github.com/edgecollective/dog-compass/tree/1715f4772cc23040eaecd5674919c41211422053/v4/hardware/base_b/kicad](https://github.com/edgecollective/dog-compass/tree/1715f4772cc23040eaecd5674919c41211422053/v4/hardware/base_b/kicad)


## scavenger hunt

[https://earth.google.com/web/search/23+Conant+Road,+Lincoln,+MA/@42.41195031,-71.29780961,60.10623401a,201.46198822d,35y,-15.43062123h,0.43027734t,0r/data=CigiJgokCQD_c9EGN0VAEa9z9t8aNEVAGZfvq4v_0VHAITsSNA681FHA](https://earth.google.com/web/search/23+Conant+Road,+Lincoln,+MA/@42.41195031,-71.29780961,60.10623401a,201.46198822d,35y,-15.43062123h,0.43027734t,0r/data=CigiJgokCQD_c9EGN0VAEa9z9t8aNEVAGZfvq4v_0VHAITsSNA681FHA)

![](/img/gps/scavenger_one.png)

![](/img/gps/map_area.png)

---
2022-01-07 13:17:37

CUI SMT buzzer options:

[https://www.digikey.com/en/products/detail/cui-devices/CSS-0575A-SMT-TR/2364642](https://www.digikey.com/en/products/detail/cui-devices/CSS-0575A-SMT-TR/2364642)

Nice article on buzzers [https://www.cuidevices.com/blog/buzzer-basics-technologies-tones-and-driving-circuits](https://www.cuidevices.com/blog/buzzer-basics-technologies-tones-and-driving-circuits)

good guide to rp-sma vs sma [https://www.spo-comm.de/en/blog/know-how/what-is-the-difference-between-sma-and-rp-sma](https://www.spo-comm.de/en/blog/know-how/what-is-the-difference-between-sma-and-rp-sma)

adafruit uses rp-sma antennae, so that's what we'll go with 

---
2022-01-08 13:26:21

![](/img/gps/power_switch_schem.png)

![](/img/gps/qwiic.png)

![](/img/gps/on_off.png)

![](/img/gps/remote_node.png)

match container -- [https://www.amazon.com/Alltrapod-Large-Capacity-Containers-Bundle/dp/B07WHV6QDP/ref=asc_df_B07WHV6QDP/?tag=&linkCode=df0&hvadid=385115658454&hvpos=&hvnetw=g&hvrand=3636123725976048146&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001876&hvtargid=pla-862591379194&ref=&adgrpid=78796009375&th=1](https://www.amazon.com/Alltrapod-Large-Capacity-Containers-Bundle/dp/B07WHV6QDP/ref=asc_df_B07WHV6QDP/?tag=&linkCode=df0&hvadid=385115658454&hvpos=&hvnetw=g&hvrand=3636123725976048146&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001876&hvtargid=pla-862591379194&ref=&adgrpid=78796009375&th=1)

3 7/8 " by 1 1/8 " 

5 x 3 in plastic container [https://www.amazon.com/HUELE-Waterproof-Shockproof-Airtight-Container/dp/B076T9V97B/ref=sr_1_8?crid=2YLXIOJKUXZ0Z&keywords=waterproof%2Bcamping%2Bpouch%2Bplastic&qid=1641670849&sprefix=waterproof%2Bcamping%2Bpouch%2Bplastic%2Caps%2C53&sr=8-8&th=1](https://www.amazon.com/HUELE-Waterproof-Shockproof-Airtight-Container/dp/B076T9V97B/ref=sr_1_8?crid=2YLXIOJKUXZ0Z&keywords=waterproof%2Bcamping%2Bpouch%2Bplastic&qid=1641670849&sprefix=waterproof%2Bcamping%2Bpouch%2Bplastic%2Caps%2C53&sr=8-8&th=1)

![](/img/gps/plastic_container.png)

5 pack clear cosmetics bag [https://www.amazon.com/Cosmetics-Wobe-Organizing-Waterproof-Organizer/dp/B07C1P1LMN/ref=sr_1_24?crid=2YLXIOJKUXZ0Z&keywords=waterproof+camping+pouch+plastic&qid=1641670849&sprefix=waterproof+camping+pouch+plastic%2Caps%2C53&sr=8-24](https://www.amazon.com/Cosmetics-Wobe-Organizing-Waterproof-Organizer/dp/B07C1P1LMN/ref=sr_1_24?crid=2YLXIOJKUXZ0Z&keywords=waterproof+camping+pouch+plastic&qid=1641670849&sprefix=waterproof+camping+pouch+plastic%2Caps%2C53&sr=8-24)

PVC pencil case [https://www.amazon.com/Xgood-Zippered-Toiletry-Capacity-Portable/dp/B07SG86Z9X/ref=pd_day0fbt_img_1/140-5573154-8774608?pd_rd_w=JTux5&pf_rd_p=bcb8482a-3db5-4b0b-9f15-b86e24acdb00&pf_rd_r=3JE1N7KR74ZFSGSYKT4F&pd_rd_r=17735ec6-3a0c-49e5-9a2d-f61011cdb18b&pd_rd_wg=blNcJ&pd_rd_i=B07SG86Z9X&th=1](https://www.amazon.com/Xgood-Zippered-Toiletry-Capacity-Portable/dp/B07SG86Z9X/ref=pd_day0fbt_img_1/140-5573154-8774608?pd_rd_w=JTux5&pf_rd_p=bcb8482a-3db5-4b0b-9f15-b86e24acdb00&pf_rd_r=3JE1N7KR74ZFSGSYKT4F&pd_rd_r=17735ec6-3a0c-49e5-9a2d-f61011cdb18b&pd_rd_wg=blNcJ&pd_rd_i=B07SG86Z9X&th=1)

small plastic zip document bag w/ string [https://www.amazon.com/dp/B07BRYMSM6/ref=sspa_dk_detail_7?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFVME4wOUlBRlJYUDImZW5jcnlwdGVkSWQ9QTEwMzg1MzExME02VDBKSFBBMTNOJmVuY3J5cHRlZEFkSWQ9QTAxODE3NzEzT1FWSFNaOTlNMTJMJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=](https://www.amazon.com/dp/B07BRYMSM6/ref=sspa_dk_detail_7?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFVME4wOUlBRlJYUDImZW5jcnlwdGVkSWQ9QTEwMzg1MzExME02VDBKSFBBMTNOJmVuY3J5cHRlZEFkSWQ9QTAxODE3NzEzT1FWSFNaOTlNMTJMJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=)

plastic pouch with holes

[https://www.amazon.com/dp/B07RC79KYS/ref=sspa_dk_detail_0?pd_rd_w=sgMiO&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=eodH7&pf_rd_r=85R3QKXRNJJ4X65AWCZG&pd_rd_r=38bb9236-f594-40c9-8484-78a038d6c367&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFFRVUwVlZaTk1VVzgmZW5jcnlwdGVkSWQ9QTAyNzc0ODAyWThKRlNGOUhGV0s1JmVuY3J5cHRlZEFkSWQ9QTAwMjEyMjdSNVdGTVpRMjlYMTImd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1](https://www.amazon.com/dp/B07RC79KYS/ref=sspa_dk_detail_0?pd_rd_w=sgMiO&pf_rd_p=54ed5474-54a8-4c7f-a88a-45f748d18166&pd_rd_wg=eodH7&pf_rd_r=85R3QKXRNJJ4X65AWCZG&pd_rd_r=38bb9236-f594-40c9-8484-78a038d6c367&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFFRVUwVlZaTk1VVzgmZW5jcnlwdGVkSWQ9QTAyNzc0ODAyWThKRlNGOUhGV0s1JmVuY3J5cHRlZEFkSWQ9QTAwMjEyMjdSNVdGTVpRMjlYMTImd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1)

![](/img/gps/plastic_pouch_waterproof.png)

---

![](/img/gps/pouch1.png)

[https://www.amazon.com/LABUK-Pencil-Zipper-School-Storage/dp/B08GS97MMR/ref=sr_1_6?keywords=plastic%2Bpencil%2Bcase%2Bstrap&qid=1641671460&sr=8-6&th=1](https://www.amazon.com/LABUK-Pencil-Zipper-School-Storage/dp/B08GS97MMR/ref=sr_1_6?keywords=plastic%2Bpencil%2Bcase%2Bstrap&qid=1641671460&sr=8-6&th=1)

![](/img/gps/node_update.png)

---
2022-01-08 21:34:19

Boards ordered for remote node 

![](/img/gps/node_v01.png)

![](/img/gps/node_v01_back.png)

---
2022-01-11 09:28:54

Adding a clicky marker to Leaflet [https://gis.stackexchange.com/questions/172508/add-an-event-listener-on-a-marker-in-leaflet/172586](https://gis.stackexchange.com/questions/172508/add-an-event-listener-on-a-marker-in-leaflet/172586)

---
2022-01-12 14:26:09

Revised header for sharp display -- sent in tracker ver 0.2:

[https://github.com/edgecollective/dog-compass/tree/ca2bd9620cc31ee5a6c63c52db3a900ba1eb024b/tracker_v_0.2](https://github.com/edgecollective/dog-compass/tree/ca2bd9620cc31ee5a6c63c52db3a900ba1eb024b/tracker_v_0.2)

JLCPCB Order #: Y47-2489114A  2022-01-13 (china time)

"the other rule of thumb for 3D printed cases with heat-set inserts for your PCB mounting holes--I want ideally a 8mm circle with no components on either side, centered on each mtg hole."

---
2022-01-13 12:06:20

Through hole slide switch right angle: [https://www.digikey.com/en/products/detail/c-k/OS103011MA7QP1/1981432](https://www.digikey.com/en/products/detail/c-k/OS103011MA7QP1/1981432)

ideal -- through hole slide switch right angle (out of stock): [https://www.digikey.com/en/products/detail/e-switch/EG1270/6076](https://www.digikey.com/en/products/detail/e-switch/EG1270/6076)


good one to go with: 

EG_1213

![](/img/gps/eg_1213.png)

[https://www.digikey.com/en/products/detail/e-switch/EG1213/101735](https://www.digikey.com/en/products/detail/e-switch/EG1213/101735)

similar alternative:

C&K OS102011MA1QN1

[https://www.digikey.com/en/products/detail/c-k/OS102011MA1QN1/1981430](https://www.digikey.com/en/products/detail/c-k/OS102011MA1QN1/1981430)

[https://www.digikey.com/en/products/detail/apem-inc/MHSS1105/1949465](https://www.digikey.com/en/products/detail/apem-inc/MHSS1105/1949465)

![](/img/co2/side_switch.png)

---
2022-01-13 12:51:15

Nice reference for sharp display: 
[https://learn.adafruit.com/circuitpython-display-support-using-displayio/ui-quickstart](https://learn.adafruit.com/circuitpython-display-support-using-displayio/ui-quickstart)

![](/img/co2/switch_dim_hack.png)

gps -- make piezo a through-hole buzzer -- use right angle switch -- all ports on one side ... 

would be nice to have a buzzer on the remote node, just to have a 'buzzer badge'

update: test piezo when it arrives, for loudness ... then add / or not

---
2022-01-18 17:10:31

Button pressing in circuitpython [https://learn.adafruit.com/multi-tasking-with-circuitpython/buttons](https://learn.adafruit.com/multi-tasking-with-circuitpython/buttons)

Circuitpython debouncer library: [https://learn.adafruit.com/debouncer-library-python-circuitpython-buttons-sensors/](https://learn.adafruit.com/debouncer-library-python-circuitpython-buttons-sensors/)

library repository:
[https://github.com/adafruit/Adafruit_CircuitPython_Debouncer](https://github.com/adafruit/Adafruit_CircuitPython_Debouncer)

---
2022-01-21 22:23:15

latest 'trace.py' code will show latest 100 datapoints [https://github.com/edgecollective/dog-compass/blob/28695531aa75c3c57e9ae1f70cf4403398ea132d/tracker_v_0.2/firmware/CPY/v5/trace.py](https://github.com/edgecollective/dog-compass/blob/28695531aa75c3c57e9ae1f70cf4403398ea132d/tracker_v_0.2/firmware/CPY/v5/trace.py)

note: the labels on the switches need to be updated, they're covered currently ...

---
2022-01-22 20:56:09

Testing IMU on tracker 0.2 ...

[https://learn.adafruit.com/adafruit-bno055-absolute-orientation-sensor/python-circuitpython?gclid=CjwKCAiA866PBhAYEiwANkIneOXNnFsFH7Ze19fHe8GXVNl8cL2wZGaBEhDoZfnJrhVcmaFCj2RVnxoCz7IQAvD_BwE](https://learn.adafruit.com/adafruit-bno055-absolute-orientation-sensor/python-circuitpython?gclid=CjwKCAiA866PBhAYEiwANkIneOXNnFsFH7Ze19fHe8GXVNl8cL2wZGaBEhDoZfnJrhVcmaFCj2RVnxoCz7IQAvD_BwE)

via [https://github.com/adafruit/Adafruit_CircuitPython_BNO055/blob/cd0f90659517b0682252fe534b1a28e9424c5dfd/adafruit_bno055.py#L354](https://github.com/adafruit/Adafruit_CircuitPython_BNO055/blob/cd0f90659517b0682252fe534b1a28e9424c5dfd/adafruit_bno055.py#L354)

```
    @property
    def calibration_status(self):
        """Tuple containing sys, gyro, accel, and mag calibration data."""
        calibration_data = self._read_register(_CALIBRATION_REGISTER)
        sys = (calibration_data >> 6) & 0x03
        gyro = (calibration_data >> 4) & 0x03
        accel = (calibration_data >> 2) & 0x03
        mag = calibration_data & 0x03
        return sys, gyro, accel, mag
```

---
2022-01-24 12:20:44

Magnetic declination at 10 Conant Rd, Lincoln, MA 

![](/img/gps/noaa_mag_declination.png)

via: [https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml](https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml)

Datasheet for bno-005 bosch absolute sensor [https://cdn-shop.adafruit.com/datasheets/BST_BNO055_DS000_12.pdf](https://cdn-shop.adafruit.com/datasheets/BST_BNO055_DS000_12.pdf)

---
2022-01-27 16:29:5

Latest circuitpython setup:

dog-compass/tracker_v_0.2/firmware/CPY/v5/base_gps_radio.py on the base,

and 

dog-compass/node_v_0.1/firmware/CPY/v5/gps_radio.py on the remote

unfortunately, can't do sufficient math in circuitpython, because don't have the floating point precision

switching to arduino!

---
2022-01-27 21:37:06

have radio, gps, and imu ... and comm from remote node ... up and running!

need to test angle, and add graphics, next ...

---
2022-01-29 21:39:40

Working pair of remote node and tracker:

![](/img/gps/working_tracker.jpg)

Remote node (v_0.1): [https://github.com/edgecollective/dog-compass/tree/c831426e3f56c6998b5059f3d2dd5fc5f9f557b8/node/node_v_0.1/firmware/arduino/v1/remote](https://github.com/edgecollective/dog-compass/tree/c831426e3f56c6998b5059f3d2dd5fc5f9f557b8/node/node_v_0.1/firmware/arduino/v1/remote)

Base / Tracker node (v_0.2): [https://github.com/edgecollective/dog-compass/tree/c831426e3f56c6998b5059f3d2dd5fc5f9f557b8/tracker/tracker_v_0.2/firmware/arduino/v1/base](https://github.com/edgecollective/dog-compass/tree/c831426e3f56c6998b5059f3d2dd5fc5f9f557b8/tracker/tracker_v_0.2/firmware/arduino/v1/base)

---
2022-02-02 14:26:42

Issue with floating point precision in python perhaps resolved with Decimal class ... 

Adafruit GPS library for Circuitpython [https://github.com/adafruit/Adafruit_CircuitPython_GPS](https://github.com/adafruit/Adafruit_CircuitPython_GPS)

started gps experiment at 1500 on FEB 2

![](/img/gps/spread_1840.png)

![](/img/gps/spread_1940.png)

![](/img/gps/hist_latitude.png)

![](/img/gps/hist_longitude.png)

from dual_gps.txt ...

note that the green line -- which is running circuitpython -- seems relatively discretized ...

![](/img/gps/discrete.png)

---
2022-02-03 13:05:18

42.41222395647637, -71.29805764333454

converting incoming nema to degrees:

[https://forums.raspberrypi.com/viewtopic.php?t=175163](https://forums.raspberrypi.com/viewtopic.php?t=175163)

Lat : 3137.36664 becomes 31 degrees and 37.26664 seconds = 31 + 37.36664/60 = 31.6227773
Lon : 00212.21149 becomes 2 degrees and 12.21149 seconds = 2 + 12.21149/60 = 2.20352483

Note: in below figure, the 'base' node has the smaller gps antenna ..

![](/img/gps/dual_gps_labeled.png)

via [https://github.com/edgecollective/dog-compass/blob/main/tracker/tracker_v_0.2/firmware/CPY/v6/analysis/](https://github.com/edgecollective/dog-compass/blob/main/tracker/tracker_v_0.2/firmware/CPY/v6/analysis/)

![](/img/gps/indoors_2_feet.png)

![](/img/gps/indoors_20_feet.png)

---
2022-02-03 19:58:37

Signal strength vs distance

![](/img/gps/base_walk.png)

![](/img/gps/sig_strength.png)

Plotting code used: [https://github.com/edgecollective/dog-compass/blob/1aa356f5e9fd41f634622cdf9d10ee23f7e90a0a/tracker/tracker_v_0.2/firmware/arduino/analysis/pydist.py](https://github.com/edgecollective/dog-compass/blob/1aa356f5e9fd41f634622cdf9d10ee23f7e90a0a/tracker/tracker_v_0.2/firmware/arduino/analysis/pydist.py)

Dataset: [https://github.com/edgecollective/dog-compass/blob/1aa356f5e9fd41f634622cdf9d10ee23f7e90a0a/tracker/tracker_v_0.2/firmware/arduino/analysis/output.txt](https://github.com/edgecollective/dog-compass/blob/1aa356f5e9fd41f634622cdf9d10ee23f7e90a0a/tracker/tracker_v_0.2/firmware/arduino/analysis/output.txt)

Using this code on the 'base' node, which outputs the proper strings [https://github.com/edgecollective/dog-compass/tree/1aa356f5e9fd41f634622cdf9d10ee23f7e90a0a/tracker/tracker_v_0.2/firmware/arduino/v1/base](https://github.com/edgecollective/dog-compass/tree/1aa356f5e9fd41f634622cdf9d10ee23f7e90a0a/tracker/tracker_v_0.2/firmware/arduino/v1/base)

And is read in by this code: [https://github.com/edgecollective/dog-compass/blob/1aa356f5e9fd41f634622cdf9d10ee23f7e90a0a/tracker/tracker_v_0.2/firmware/arduino/analysis/readline.py](https://github.com/edgecollective/dog-compass/blob/1aa356f5e9fd41f634622cdf9d10ee23f7e90a0a/tracker/tracker_v_0.2/firmware/arduino/analysis/readline.py)

3d plot:

![](/img/gps/gratuitous_3d.png)

Generated using this code: [https://github.com/edgecollective/dog-compass/blob/1aa356f5e9fd41f634622cdf9d10ee23f7e90a0a/tracker/tracker_v_0.2/firmware/arduino/analysis/3dplot.py](https://github.com/edgecollective/dog-compass/blob/1aa356f5e9fd41f634622cdf9d10ee23f7e90a0a/tracker/tracker_v_0.2/firmware/arduino/analysis/3dplot.py)

---
2022-02-05 18:19:10

# Enclosure design

[https://hackaday.com/2017/05/24/practical-enclosure-design-optimized-for-3d-printing/](https://hackaday.com/2017/05/24/practical-enclosure-design-optimized-for-3d-printing/)

[https://hackaday.com/2020/11/16/simple-tips-for-better-3d-printed-enclosures/](https://hackaday.com/2020/11/16/simple-tips-for-better-3d-printed-enclosures/)

[https://hackaday.com/2021/12/12/customize-these-3d-printed-cases/](https://hackaday.com/2021/12/12/customize-these-3d-printed-cases/)

[https://willem.aandewiel.nl/index.php/2022/01/02/yet-another-parametric-projectbox-generator/](https://willem.aandewiel.nl/index.php/2022/01/02/yet-another-parametric-projectbox-generator/)

[https://hackaday.com/2022/01/31/this-parametric-project-box-generator-is-super-easy/](https://hackaday.com/2022/01/31/this-parametric-project-box-generator-is-super-easy/)

Prusa 3D Printer [https://www.prusa3d.com/category/original-prusa-mini/](https://www.prusa3d.com/category/original-prusa-mini/)

---
2022-02-05 20:42:43

[GPS mapper notebook](/img/gps/gps_mapper.ipynb)

![](/img/gps/gps_signal.png)

Folium docs [https://python-visualization.github.io/folium/quickstart.html#Getting-Started](https://python-visualization.github.io/folium/quickstart.html#Getting-Started)

Online jupyter notebook: [https://jupyterlite.readthedocs.io/](https://jupyterlite.readthedocs.io/)