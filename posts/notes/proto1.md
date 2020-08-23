---
pageTitle: SAMD21 Low power 
layout: layout.njk
date: 2020-08-23
updated: 2020-08-23
tags: notes 
image: /img/proto1/proto.jpg
blurb: Low power experiments 
---

## Sparkfun SAMD21 breakout

Experimenting with the [Sparkfun SAMD21 Mini Breakout](https://www.sparkfun.com/products/13664).
 By powering it directly on the 3V line, we avoid the regulator.  Was able to achieve 0.03 mA sleep current.  Next test will be to put an RFM95 LoRa module in the mix. 

![sparkpower](/img/proto1/spark_power.png)

![current](/img/proto1/current.jpg)


## Adafruit Feather

Have only been able to achieve 0.2 mA sleep current on this.  Somehow disabling the voltage regulator by pulling EN to ground, and powering the device on the 3V line, results in even higher sleep currents.  




