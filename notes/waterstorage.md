---
pageTitle: Remote Water Storage Monitoring System 
layout: layout.njk
date: 2023-03-08
updated: 2023-03-08
tags: notes 
image: /img/ojofeliz/twintowers.jpeg
blurb: Developing a remote water storage monitoring system.  
---

Working with CPy 7 on Feather Blue Sense for now ...

Guide [https://learn.adafruit.com/using-the-rockblock-iridium-modem?view=all#circuitpython-example](https://learn.adafruit.com/using-the-rockblock-iridium-modem?view=all#circuitpython-example)

Rockblock Circuitpython library [https://github.com/adafruit/Adafruit_CircuitPython_RockBlock](https://github.com/adafruit/Adafruit_CircuitPython_RockBlock)

Library documentation [https://docs.circuitpython.org/projects/rockblock/en/latest/api.html](https://docs.circuitpython.org/projects/rockblock/en/latest/api.html)

# ESP32-S2 TFT

Guide [https://learn.adafruit.com/adafruit-esp32-s2-tft-feather/circuitpython](https://learn.adafruit.com/adafruit-esp32-s2-tft-feather/circuitpython)

Adding an additional serial port to the Feather S2

# Maxbotix

Guide for maxbotic sensors: [https://www.maxbotix.com/tutorials.htm](https://www.maxbotix.com/tutorials.htm)

Sensor output options: [https://www.maxbotix.com/tutorials2/sensor-output-options.htm](https://www.maxbotix.com/tutorials2/sensor-output-options.htm)

# 1-wire sensor

Guide to Circuitpython [here](https://learn.adafruit.com/using-ds18b20-temperature-sensor-with-circuitpython/circuitpython?gclid=CjwKCAiAoL6eBhA3EiwAXDom5mIOC8cvQlFba_1gHHcrOiyseLnxqKod4WhS_KgQP5pCrCnVg9h3ihoCKwcQAvD_BwE)

---

Using CPY 7.X on the Feather Bluefruit Sense for now

![](/img/blue_sat_upload.png)

---

Message 75 and 76 are in the format:

```
data = struct.pack("f",batt_voltage)
data += struct.pack("f",depth_inches)
data += struct.pack("2f", sht.relative_humidity, sht.temperature)
data += struct.pack("2f", bmp.pressure, bmp.temperature)
```   

E.g. Message 75:

```
IMEI: 300234065897350
MOMSN: 75
Transmit Time: 2023-01-25T00:36:18Z UTC
Iridium Latitude: 42.4393
Iridium Longitude: -70.7191
Iridium CEP: 544.0
Iridium Session Status: 2
Data: 982f854090673f43bc35bb410028cf4188577d44646ccf41
```

Example python3 code for decoding:

```
>>> data=bytes.fromhex("982f854090673f43bc35bb410028cf4188577d44646ccf41")
>>> struct.unpack("<6f", data)
(4.162059783935547, 191.404541015625, 23.40123748779297, 25.89453125, 1013.36767578125, 25.92792510986328)
```

Initial version of satellite modem that sends depth and sensor data, waits 1 minute in between:

[https://github.com/dwblair/rockblock-ultrasonic/tree/b1fe20872cbe983c372010ae1e78fe4a9b0b035e/feather-bluefruit](https://github.com/dwblair/rockblock-ultrasonic/tree/b1fe20872cbe983c372010ae1e78fe4a9b0b035e/feather-bluefruit)

Looks as though it's 1 credit per message.

The highest rate is 0.145 British Pounds per credit for 100 credits (.099 BP per credit when buying 1000 credits).

So that's a purchase of $17.86 for 100 credits ($.18 per credits); or $121.94 for 1000 credits ($.12 per credit)

We might be able to pack more data in per message ... i.e., we could perhaps send several hours' worth of data once per day ...

But let's say we want to send one message per day. That's one credit per day.

So, 30 credits per month.

The line rental is $16 per month.

That's $5.40 per month for the messages, and $16 per month for the line rental -- so, that's about $22 per month

# Decoding python structs using javascript

[https://www.thethingsnetwork.org/forum/t/payload-formats-howto/3441/3](https://www.thethingsnetwork.org/forum/t/payload-formats-howto/3441/3)

[https://stackoverflow.com/questions/37471158/converting-ieee-754-from-bit-stream-into-float-in-javascript/37471538#37471538](https://stackoverflow.com/questions/37471158/converting-ieee-754-from-bit-stream-into-float-in-javascript/37471538#37471538)

Better: a nodejs package python-struct: [https://www.npmjs.com/package/python-struct](https://www.npmjs.com/package/python-struct)

Or alternatively: [https://github.com/lyngklip/structjs](https://github.com/lyngklip/structjs) which seems to include easy to use source code ...
 
Using python-struct ...

Better link? [https://stackoverflow.com/questions/5605108/pack-unpack-functions-for-node-js](https://stackoverflow.com/questions/5605108/pack-unpack-functions-for-node-js)

Working code using structjs:

Gist: [https://gist.github.com/dwblair/cc651bcb3bd11f13840c074c80bd924b](https://gist.github.com/dwblair/cc651bcb3bd11f13840c074c80bd924b)

Structjs: [https://github.com/lyngklip/structjs](https://github.com/lyngklip/structjs)

Working repository (needed to make it a 'type':'module' ... ?): [https://github.com/dwblair/js-python-struct-converter](https://github.com/dwblair/js-python-struct-converter)

# Sending / relaying data on server / rock7 side

rockblock webhooks: [https://docs.rockblock.rock7.com/docs/integration-with-application](https://docs.rockblock.rock7.com/docs/integration-with-application)

# Data compression for rockblock

Suggestions on compressing data for the rockblock [https://docs.rockblock.rock7.com/docs/compressing-your-data](https://docs.rockblock.rock7.com/docs/compressing-your-data)

# Adaptive retry for rockblock

[https://docs.rockblock.rock7.com/docs/adaptive-retry](https://docs.rockblock.rock7.com/docs/adaptive-retry)

# Rockblock Credit System

> Credits are used each time you transmit. 1 credit is used per 50 bytes (or part thereof) of message sent or received. 1 credit is also used if you check your mailbox and there are no messages waiting (A mailbox check). Credits do not expire unless you do not use your account at all for 12 months. Credits are shared/pooled between all of the devices on your account

[https://docs.rockblock.rock7.com/docs/iridium-contract-costs](https://docs.rockblock.rock7.com/docs/iridium-contract-costs)

---

Rockblock is sending depth data, pulling readings from analog pin on the depth sensor. The Circuipython firmware is v 7.X, and is from here: [https://github.com/dwblair/rockblock-ultrasonic/tree/main/firmware/v1](https://github.com/dwblair/rockblock-ultrasonic/tree/main/firmware/v1)

The rockblock sends it data to the rockblock server, which has a 'webhook' that sends an HTTP POST JSON of data to 159.65.226.222:4000

The firmware on the rockblock encodes its data using a python struct approach

A 'relay server' is running at 159.65.226.222:4000, using code from here: [https://github.com/edgecollective/iridium-bayou-relay](https://github.com/edgecollective/iridium-bayou-relay). The relay server decodes the data using a js version of the python struct approach, and then does an HTTP POST of the data to bayou.pvos.org at the '2ifhwi34ue4j' data feed

---

Sleep stats for Feather S2: [https://learn.adafruit.com/adafruit-esp32-feather-v2/power-management](https://learn.adafruit.com/adafruit-esp32-feather-v2/power-management)

Smaller sharp display (adafruit product) -- [https://www.digikey.com/en/products/detail/adafruit-industries-llc/3502/7386264](https://www.digikey.com/en/products/detail/adafruit-industries-llc/3502/7386264)

Larger sharp display: [https://www.digikey.com/en/products/detail/sharp-microelectronics/LS013B7DH03/5300387](https://www.digikey.com/en/products/detail/sharp-microelectronics/LS013B7DH03/5300387)

Sharp memory family [https://www.mouser.com/datasheet/2/365/Sharp_Memory_LCD_Brochure_2015-746065.pdf](https://www.mouser.com/datasheet/2/365/Sharp_Memory_LCD_Brochure_2015-746065.pdf)

---

# Wed Mar  8 06:00:46 PM EST 2023

Sleep mode in Feather ESP32 S2 TFT

[https://learn.adafruit.com/deep-sleep-with-circuitpython/power-consumption](https://learn.adafruit.com/deep-sleep-with-circuitpython/power-consumption)

Seems like we get less than 0.1 mA in deep sleep!

Maxbotix 7092 datasheet: [/img/ojofeliz/PD11838z_-XL-MaxSonar-WR_Datasheet-website.pdf](/img/ojofeliz/PD11838z_-XL-MaxSonar-WR_Datasheet-website.pdf)

Notes:

Feather ESP32 S2 seems like a good chip to use.

Sleep current will likely be dictated by the ultrasonic sensor module.

Datasheet suggests that average current for module is 2 mA.  We might be able to turn on/off, too.

First order: don't worry about turning off ultrasonic.  Solar charging will likely provide ample energy. 

First pass:  looks like Feather S2 doesn't like talking to its uart?

![](/img/ojofeliz/rockblock_bug.png)

Looks like there is a delay in response to the SBDIX command

Added a delay in adafruit_rockblock.py when sending that command!

Also note: reference /gitwork/rockblock-ultrasonic/firmware/v2 for model code that was working on the nrf

# Fri Mar 10 10:22:56 AM EST 2023

selecting a fluid level sensor [https://www.digikey.com/en/articles/selecting-a-fluid-level-sensor-what-you-need-to-know](https://www.digikey.com/en/articles/selecting-a-fluid-level-sensor-what-you-need-to-know)

PVC float switch: [https://www.digikey.com/en/products/detail/LS01-1A66-PA-500W/374-1000-ND/385414](https://www.digikey.com/en/products/detail/LS01-1A66-PA-500W/374-1000-ND/385414) -- $14

Optomax liquid level detector -- $25 -- [https://www.adafruit.com/product/3397?gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbg3aIRxX2yRx9D1Ut7yRgv7RB8RR9syOGakpW9teGRHD29flF-9ktoaAk5bEALw_wcB](https://learn.sparkfun.com/tutorials/photon-remote-water-level-sensor/all)

Sparkfun project to turn a pump on/off on a farm -- [https://learn.sparkfun.com/tutorials/photon-remote-water-level-sensor/all](https://learn.sparkfun.com/tutorials/photon-remote-water-level-sensor/all)

---

MAX-8C-0 GPS [https://www.digikey.com/en/products/detail/u-blox/MAX-8C-0/9818046?utm_adgroup=RF%20Receivers&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Product_RF%2FIF%20and%20RFID_NEW&utm_term=&utm_content=RF%20Receivers&gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPYnJRd-75hcJdGih4Ak45dsa16eMpyGar6BehzO7gil4-arKGloGIcaAoBNEALw_wcB](https://www.digikey.com/en/products/detail/u-blox/MAX-8C-0/9818046?utm_adgroup=RF%20Receivers&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Product_RF%2FIF%20and%20RFID_NEW&utm_term=&utm_content=RF%20Receivers&gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPYnJRd-75hcJdGih4Ak45dsa16eMpyGar6BehzO7gil4-arKGloGIcaAoBNEALw_wcB)

SAM-M8Q-0 GPS (with antenna) [https://www.digikey.com/en/products/detail/u-blox/SAM-M8Q-0/7393574](https://www.digikey.com/en/products/detail/u-blox/SAM-M8Q-0/7393574)

---

Pinouts on ESP32-S2 TFT

[https://learn.adafruit.com/assets/109051](https://learn.adafruit.com/assets/109051)

RFM95 in Circuitpython [https://github.com/adafruit/Adafruit_CircuitPython_RFM9x](https://github.com/adafruit/Adafruit_CircuitPython_RFM9x)

mesh lora [https://github.com/bsppbep/mesh_lora](https://github.com/bsppbep/mesh_lora)

transmit an image via rfm95 [https://github.com/jerryneedell/mlx90640_rfm9x](https://github.com/jerryneedell/mlx90640_rfm9x)

experimenting with feather m0 lora memory [https://github.com/jerryneedell/feather_m0_rfm9x_memory](https://github.com/jerryneedell/feather_m0_rfm9x_memory)

spi bus error: [https://github.com/adafruit/circuitpython/issues/7304](https://github.com/adafruit/circuitpython/issues/7304)

---

combo:

adafruit i2c gps, with circuipython support: [https://www.adafruit.com/product/4415](https://www.adafruit.com/product/4415) 

i2c precision altitude: [https://www.adafruit.com/product/4494](https://www.adafruit.com/product/4494)

feather esp32 s2 tft 

and radio modules ... (do i have them?)

and batteries

nano vna v2 [https://www.amazon.com/NanoVNA-NanoVNA-F-Analyzer-50kHz-3000MHz-Aluminum/dp/B08NPHYLH7/ref=sr_1_3?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPY7Z9C4KkOYVSxnQ-x3w7dNGZM3epxF7jlTmOBX6aE9bM175YhUR3saAv0IEALw_wcB&hvadid=580879611030&hvdev=c&hvlocphy=9001876&hvnetw=g&hvqmt=e&hvrand=7259948964369384814&hvtargid=kwd-919825042460&hydadcr=13185_13399519&keywords=nanovna+v2&qid=1678748869&sr=8-3](https://www.amazon.com/NanoVNA-NanoVNA-F-Analyzer-50kHz-3000MHz-Aluminum/dp/B08NPHYLH7/ref=sr_1_3?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPY7Z9C4KkOYVSxnQ-x3w7dNGZM3epxF7jlTmOBX6aE9bM175YhUR3saAv0IEALw_wcB&hvadid=580879611030&hvdev=c&hvlocphy=9001876&hvnetw=g&hvqmt=e&hvrand=7259948964369384814&hvtargid=kwd-919825042460&hydadcr=13185_13399519&keywords=nanovna+v2&qid=1678748869&sr=8-3)

sam m8q featherwing [https://hackaday.io/project/168430-u-blox-sam-m8q-gps-featherwing](https://hackaday.io/project/168430-u-blox-sam-m8q-gps-featherwing)

---

North Jahren solar well 35.98789907447341, -104.8167669015538

South HQ solar well 35.98751529327594, -104.81660879964933

Jarosa Camp 36.02089727268662, -104.7680715149748

line of sight calculator https://www.scadacore.com/tools/rf-path/rf-line-of-sight/

![](/img/ojofeliz/South_HQ_well.png)

# Connecticut circuitpython lora mesh test

treehouse: 41.898891720871454, -72.24480179618855

stenta: 41.76515928573123, -72.20066097255132

![](/img/ojofeliz/treehouse_to_browns_rd.png)

# Mar 14 2023

Calculating an elevation between two points: [https://stackoverflow.com/questions/10486525/obtaining-the-highest-terrain-elevation-between-two-geographic-points](https://stackoverflow.com/questions/10486525/obtaining-the-highest-terrain-elevation-between-two-geographic-points)

GPS [https://learn.adafruit.com/adafruit-ultimate-gps-featherwing/circuitpython-library](https://learn.adafruit.com/adafruit-ultimate-gps-featherwing/circuitpython-library)

post request adafruit wifi [https://learn.adafruit.com/ethernet-for-circuitpython/usage-with-requests](https://learn.adafruit.com/ethernet-for-circuitpython/usage-with-requests)

# Mar 16 2023

The Radiohead Mesh algorithm seems straightforward, but would take time and effort to port to Circuitpython.  

Meanwhile, the Feather M0 LoRa is back in stock.  So, current plan: simply use the Feather M0 LoRa in Arduino-land to experiment with mesh networking, for now. 

Arduino UF2 creation tool: [https://github.com/blurfl/makeUF2-tool](https://github.com/blurfl/makeUF2-tool)

Microsoft uf2tool [https://github.com/Microsoft/uf2](https://github.com/Microsoft/uf2)

Advanced Radiohead library usage: [https://learn.adafruit.com/adafruit-rfm69hcw-and-rfm96-rfm95-rfm98-lora-packet-padio-breakouts/advanced-circuitpython-library-usage-2](https://learn.adafruit.com/adafruit-rfm69hcw-and-rfm96-rfm95-rfm98-lora-packet-padio-breakouts/advanced-circuitpython-library-usage-2)

# Mar 17 2023

Working on CPy version of mesh setup here: [https://github.com/edgecollective/lora-circuitpy-mesh](https://github.com/edgecollective/lora-circuitpy-mesh)

When 'read only' error, try:

> import storage
> storage.erase_filesystem()

# Deployment of water sensor prototype in CT, Mar 20 2023

Data feed from cistern in Storrs, CT:

[http://bayou.pvos.org/data/6hs74zsv4ecj?plot_param=distance_meters](http://bayou.pvos.org/data/6hs74zsv4ecj?plot_param=distance_meters)

Nice paper evaluating energy performance of RockBlock satellite modem: [https://www.mdpi.com/1424-8220/21/21/7235](https://www.mdpi.com/1424-8220/21/21/7235)