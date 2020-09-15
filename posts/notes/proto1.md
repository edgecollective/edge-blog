---
pageTitle: Low Power experiments with SAMD21 
layout: layout.njk
date: 2020-08-23
updated: 2020-09-15
tags: notes 
image: /img/proto1/proto.jpg
blurb: Seeing what low current sleep modes are possible with various hardware designs. 
---

## Sparkfun SAMD21 breakout

Experimenting with the [Sparkfun SAMD21 Mini Breakout](https://www.sparkfun.com/products/13664).
 By powering it directly on the 3V line, we avoid the regulator.  Was able to achieve 0.03 mA sleep current.  Next test will be to put an RFM95 LoRa module in the mix. 

![sparkpower](/img/proto1/spark_power.png)

![current](/img/proto1/current.jpg)


## Adafruit Feather

Have only been able to achieve 0.2 mA sleep current on this.  Somehow disabling the voltage regulator by pulling EN to ground, and powering the device on the 3V line, results in even higher sleep currents. 

**Update 15 Sep 2020**: Using [this code](https://gist.github.com/dwblair/b69a20dcf87314348bac970db574a723) -- on a Feather M0 LoRa without any sensors attached -- was able to get down to 0.09 mA (90 uA).  This isn't so far away from what one might expect for the AP2112K LDO used on the Feather (~ 60 uA), plus the M0 itself in standby sleep mode (~ 10 uA), plus the RFM95 radio in sleep mode (a few uA, I believe). 

![radio](/img/radio.jpg)

## Arm Programming

Nice [notes on ARM programming](https://learn.sparkfun.com/tutorials/arm-programming?_ga=2.31674685.2071070740.1598130081-351514117.1580570302) from Sparkfun. 




