---
pageTitle: Developing a Free and Open Source CO2 Sensor System
layout: layout.njk
date: 2020-12-07
updated: 2020-12-07
tags: projects
image: img/placeholder.png
blurb: Developing an Free and Open Source end-to-end system for CO2 monitoring.
---

---

## Overview

Developing an Free and Open Source end-to-end system for CO2 monitoring.

Ongoing notes on development are posted [here](https://edgecollective:8080/posts/notes/co2/).

---

## Update 2020-12-07

### Hardware and Firmware

Latest accomplishments:
- Several working hardware designs, incorporating variously the Feather M0 LoRa, Feather ESP32, and Heltec Wifi 32 LoRa V2.  Focus is on the Sensiron SCD30 CO2 module, as it is well-reviewed, has straightforward power requirements (3.3V), and is well-documented.
- Current hardware designs incorporate pressure sensor for ambient pressure compensation, and an OLED display.
- Experiments with an electret microphone (using MAX466 amplifier) have been promising.  
- Preliminary light sensor experiment failed due to (we think) to protocol conflicts; may pause on this until a later version. 
- Captured data for overnight, morning and evening activities, and simultaneous deployment of two side-by-side SCD30 sensors, and in process of analyzing / reviewing.

Next steps:
- Working to incoroprate an interrupt-based button activation for 'forced calibration'.  Debouncing code will be necessary for this.  SCD30 library from Sparkfun includes the force calibration code.  
- Currently reviewing best practices around enclosure design, sensor placement, and field calibration for SCD30. 
- Currently out ESP32 micro workflow; a fully-custom PCB based on the ESP32 will be designed to reduce overall costs.
- Deciding on pin breakouts / interfaces.  i2c (including qwiic connector), serial, analog.
- Implementing wifi and feed configuration via local wifi / Bluetooth.
- Backup battery management.  Battery will be useful in cases where sensor must be brought outdoors temporarily for calibration purposes.
- Comparison of 'force calibrated' SCD30 (x2), K30, and Z19 sensors, co-deployed.


### Server

Latest accomplishments:
- Bayou data storage is operation and working solidly.  Uses 'nosql' / 'flat' database scheme (pouchdb / leveldb), and fastify for server.  

Next steps:
- Looking to replace Bayou backend with a node + express + Postgresql alternative.
- Beginning to experiment with a React-based front-end.
- Working on demonstration of Reach-based mapping of sensor location (on map / floorplan) with most recent values and associated historical graphs.

### Data Analysis

Latest accomplishments:
- Have begun experimenting with workflows in Jupyter.

Next steps:
- Basic analysis / workflow leading to identification of peak values, averages, baseline.
- Reproducing the workflow in R.










