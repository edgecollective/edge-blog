---
pageTitle: Test deployment of ultrasonic sensor and radio system in CT
layout: layout.njk
date: 2023-03-20
updated: 2023-03-20
tags: grassnomads 
image: /img/ojofeliz/storrs_4.jpg
blurb: An initial deployment of the ultrasonic sensor to measure water level in a homestead cistern. 
---

# Background

Maxbotic ultrasonic 7092 water depth sensor, sending data via LoRa radio to a Raspberry Pi, which then is posting data online to bayou.pvos.org and farmos via a python script.

# Live data feed (as of Mar 26 2023)

[http://bayou.pvos.org/data/6hs74zsv4ecj?plot_param=distance_meters](http://bayou.pvos.org/data/6hs74zsv4ecj?plot_param=distance_meters)

[![](/img/ojofeliz/storrs_data.png)](http://bayou.pvos.org/data/6hs74zsv4ecj?plot_param=distance_meters)


# Images from the deployment

<iframe width="560" height="315" src="https://www.youtube.com/embed/b7-ZXCsvF3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[![](/img/ojofeliz/storrs_1.jpg)](/img/ojofeliz/storrs_1.jpg)

[![](/img/ojofeliz/storrs_2.jpg)](/img/ojofeliz/storrs_2.jpg)

[![](/img/ojofeliz/storrs_3.jpg)](/img/ojofeliz/storrs_2.jpg)

[![](/img/ojofeliz/storrs_3.jpg)](/img/ojofeliz/storrs_3.jpg)

[![](/img/ojofeliz/storrs_4.jpg)](/img/ojofeliz/storrs_4.jpg)

[![](/img/ojofeliz/storrs_5.jpg)](/img/ojofeliz/storrs_5.jpg)

[![](/img/ojofeliz/storrs_6.jpg)](/img/ojofeliz/storrs_6.jpg)

[![](/img/ojofeliz/storrs_7.jpg)](/img/ojofeliz/storrs_7.jpg)

[![](/img/ojofeliz/storrs_8.jpg)](/img/ojofeliz/storrs_8.jpg)


# Python script for posting to FarmOS

```
import serial
import requests

# Define the serial connection.
ser=serial.Serial('/dev/ttyACM0')

# Read and convert data.
out=ser.readline()
a=eval(out)
b=a.decode("utf-8")
c=b.split(",")
depth_meters=c[0]
voltage=c[1]

# Send to farmOS.
 = 'XXXX'

url = 'https://test.farmos.dev/asset/1f86f3f4-be57-4e16-99f6-84290afd0a7d/data/basic?private_key=' + private_key

payload = {
  'depth_meters': depth_meters,
  'voltage': voltage
}
requests.post(url, json=payload)
```
