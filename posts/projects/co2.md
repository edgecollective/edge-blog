---
pageTitle: Developing a Free and Open Source CO2 Sensor System
layout: layout.njk
date: 2020-12-07
updated: 2020-12-07
tags: projects
image: img/co2/rev_e_built.png
blurb: Developing an Free and Open Source end-to-end system for CO2 monitoring.
---

---

## Overview

Developing an Free and Open Source end-to-end system for CO2 monitoring.

Ongoing notes on development are posted [here](https://edgecollective.io/posts/notes/co2/).

---

## Goals for Version 1
(Updated: 2020-12-09 08:31:32)

Key to assessment of work items:
- [X] -- "Done"
- [EASY] -- Won't take much additional effort or time.  A day or two or work.
- [MEDIUM] -- Straightforward, but could take up to a week of work.
- [HARD] -- Will take a lot of time / effort.  May need to reconsider. 

### Hardware + firmware
- Ability to turn of autocalibration [X]
- Ability to trigger calibration value in firmware [X]
- Http PUT/POST to online server [X]
- Gardware for pressure compensation [X]
- Firmware compensation using pressure input [SHORT]
- 'Calibrate' button that works on interrupt & is debounced  [MEDIUM]
- Reasonable first pass at enclosure that respects the scd30 design guidelines [MEDIUM]

### Data server
- Initial prototype using 'nosql' data server with simple public key / private key design for accessing / posting to feeds [X]
- Redo initial prototype using Node + Express + Postgresql server + database backend [MEDIUM]
- Add simple user login to permit data feed creation [HARD]

### Client data viz / analysis
- Initial simple graphing and location of sensors on a floorplan [X]
- Feed graphs can be show in summary graphical form in a 'list' [X]
- Client that takes in multiple data feeds from Bayou [HARD]
- Client can choose which available parameters to display [HARD]
- Feed location on a floorplan / map can be display and 'highlighted' by clicking on / hovering over feed list [MEDIUM]
- Thresholds can be displayed on the graph as lines or bands [SHORT]
- User can define / select thresholds on a per-graph basis [MEDIUM]
- Demo of using Jupyter to download and analyze data [EASY]
- Demo of using R to download and analyze data [MEDIUM] 

### Science / calibration / validation
- Demonstrate calibration with 'fresh air' [EASY]
- Demonstrate calibration with CO2 cannister (and then matching fresh air on later measurement) [HARD]
- Comparison of scd30 modules against one another [EASY]
- Comparison of scd30 modules with k30, z19 [MEDIUM]

---

## Goals for Version 2

### User data viz / analysis workflow
- Client that takes in data feeds from multiple data feed sources (e.g. Adafruit.io)
- Data feed parameters can be overlaid on same graph and compared

### Hardware + firmware
- bluetooth configuration of parameters
- lora gateway + lora remote nodes
- MQTT functionality

### Science / calibration / validation
- Import parameters from various air / infection 'models' and apply as thresholds to graph


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

---
2021-01-16 21:19:52

## REV_E Parts list

- **PVOS CO2 Rev_E PCB** -- [oshpark](https://oshpark.com/shared_projects/Sqhe5YpQ) | [github](https://github.com/edgecollective/co2-remote-and-gateway/tree/master/rev_e/atkins)
- [Sensirion SCD30 CO2 sensor](https://www.sparkfun.com/products/15112)
- [Heltec Wifi 32 LoRa V2](https://www.amazon.com/MakerFocus-Development-Bluetooth-0-96inch-Display/dp/B076MSLFC9/ref=sr_1_4?crid=1PRQFMZWK1EA9&dchild=1&keywords=heltec+lora+esp32&qid=1610850196&s=electronics&sprefix=heltec%2Celectronics%2C149&sr=1-4)
- [3.7V Lithitum Rechargeable battery (NOTE! JST1.25 connector)](https://www.amazon.com/gp/product/B07CXNQ3ZR/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1)
- [Adafruit BMP388](https://www.adafruit.com/product/3966) (optional pressure sensor)
- [Adafruit MAX4466](https://www.adafruit.com/product/1063) (optional mic)
- 2 X [uxcell Momentary PCB Side Mounting Fixed Bracket Pushbutton Push Button Tact Tactile Switch DIP 2 Terminals 6mmx6mmx12mm](https://www.amazon.com/gp/product/B07JKWC6LH/ref=ppx_yo_dt_b_asin_title_o04_s01?ie=UTF8&psc=1)







