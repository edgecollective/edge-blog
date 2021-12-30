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

