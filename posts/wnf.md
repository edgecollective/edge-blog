---
pageTitle: Greenhouse Monitoring at Wolfe's Neck Farm in Freeport, Maine (USA).
layout: layout.njk
date: 2020-04-14
updated: 2020-05-12
tags: projects
image: img/wnf/greenhouse.JPG
blurb: Setting up a LoRa- and WiFi- based greenhouse monitoring system. 
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

| ![calibration](/img/wnf/humidity_toptobottom_b_db_s_da_3sec.png) |
|:--|
| %RH Comparison. From top to bottom:  BME280, DHT22_B, SHT10, DHT22_A.  Each count on the bottom is associated with a three second interval;  i.e. '100' is 300 seconds.  Spike is after blowing on sensor. |
