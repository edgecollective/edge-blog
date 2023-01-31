---
pageTitle: Satellite Modem Prototyping
layout: layout.njk
date: 2023-01-23
updated: 2023-01-23
tags: notes 
image: img/rockblock9603.jpg
blurb: Using a satellite modem to send data from off-grid. 
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
