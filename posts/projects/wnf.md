---
pageTitle: Greenhouse Monitoring at Wolfe's Neck Farm in Freeport, Maine (USA)
layout: layout.njk
date: 2020-04-14
updated: 2021-06-12
tags: projects
image: img/wnf/greenhouse.JPG
blurb: Setting up an "off-grid" greenhouse monitoring system. 
---

<!--<img src="/img/wnf/wnf_gateway_location.png">-->


<img src="/img/wnf/initial_setup.png">

## Super fancy Relay prototype

Repository for the relay prototype is [here](https://github.com/edgecollective/wnf-greenhouse/tree/master/hardware/relay).  Some pictures:

<img src="/img/wnf/relay_schem.png">

<img src="/img/wnf/relay_board.png">

<img src="/img/wnf/relay_3d.png">

<img src="/img/wnf/relay_3d_back.png">

<img src="/img/wnf/farmos_data.png">

## Diana's version

<img src="/img/wnf/diana_schem.png">

## WNF Visit July 07 2020

[Photo Album](https://photos.app.goo.gl/JcmCqubvK7mDYiEe7)

| ![Temp differences](/img/wnf/wnf_greenhouse_daily.png) |
|:--|
| **Mini-greenhouse**. Placed one of the external probes next to the relay node -- very large temp difference -- indicating that the enclosure is acting like a mini-greenhouse on the BME280 sensor inside the enclosure ... and that we should only use external temp and humidity sensors from now on.
 |

## Humidity Testing

Reference for cross-comparison among similar sensors [here](http://www.kandrsmith.org/RJS/Misc/Hygrometers/calib_many.html).

| [![exp1](/img/wnf/humidity_exp_1_three_sec_intervals.png)](/img/wnf/humidity_exp_1_three_sec_intervals.png) |
|:--|
| **Exp 1.**  A: DHT22 #1; B: DHT22 #2. |

| [![exp2](/img/wnf/humidity_exp_2_three_sec_intervals.png)](/img/wnf/humidity_exp_2_three_sec_intervals.png) |
|:--|
| **Exp 2.** A: DHT22 #3; B: DHT22 #2. |

| [![exp3](/img/wnf/humidity_exp_3_three_sec_intervals.png)](/img/wnf/humidity_exp_3_three_sec_intervals.png) |
|:--|
| **Exp 3.** A: DHT22 #4; B: DHT22 #2. |

| [![exp4](/img/wnf/humidity_exp_4_three_sec_intervals.png)](/img/wnf/humidity_exp_4_three_sec_intervals.png) |
|:--|
| **Exp 4.** A: DHT22 #4; B: DHT22 #3. |

## Salt test

Using a trick for calibrating a hygrometer, following the method described [here](https://www.famous-smoke.com/cigaradvisor/how-do-you-calibrate-a-hygrometer) and [here](https://www.neptunecigar.com/tips/how-to-calibrate-your-hygrometer).  For NaCl at room temp, we expect 75% RH.   

| [![exp5](/img/wnf/salt_overnight.png)](/img/wnf/salt_overnight.png) |
|:--|
| **Exp 5.** Overnight table salt test. For NaCl at room temp, we expect 75% RH.   Note that around 7 AM there was a sudden temp fluctuation, likely due to some direct sunlight on the system (sitting near a window). |

