---
pageTitle: Remote Soil Moisture Monitoring 
layout: layout.njk
---

-----
*June 25, 2019*

## Project Goals

An Edge Collective client was looking to establish some baseline soil measurements around tree planting sites in order to begin to assess the impact of regenerative agriculture practices there; specifically, the impact of biochar on soil moisture.

We're planning on beginning by creating two instrumentation setups, one at each measurement site (“biochar” and “non-biochar”).  Each setup will operate on 12V battery power, and measure soil moisture and temperature locally every 30 minutes.  One of the setups (“Remote Node”, Fig 1) will send its data to a “Gateway Node” via LoRa radio; and the “Gateway Node” will then send the combined datasets to FarmOS via cellular modem. We will be using HOBO / Decagon Soil Moisture probes as our sensors.


<img src="/img/field_1/config_1.png">

-----
*June 26, 2019*

## Testing Cellular Posting to FarmOS

We'll begin by setting up a quick 'end-to-end' test system for transmitting data from a Quahog to FarmOS via a cellular modem.
