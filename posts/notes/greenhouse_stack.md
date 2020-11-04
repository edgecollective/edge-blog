---
pageTitle: Greenhouse Monitoring, 'Full Stack'
layout: layout.njk
date: 2020-11-03
updated: 2020-11-03
tags: notes 
image: img/placeholder.png
blurb: Instructions for End-to-End Greenhouse monitoring stack
---

(((Status: DRAFT)))

---

## Overview 

The following is a prototype for a free and open source 'end-to-end' system for monitoring greenhouse parameters.  It consists of three main parts:

- **Remote node** -- consisting of a microcontroller + sensor, that captures a signal (e.g. temperature) and relays this data via low-power radio to a wifi gateway
- **Gateway** -- which relays this incoming sensor data to a server
- **Server** -- which stores this sensor data in a database.

The following guide helps to set up this system, in a series of steps.

---

## Table of Contents 

1. [Setting up the **Server**](#server)
2. [Setting up the **Remote Node**](#micro)
3. [Setting up the **Gateway**](#gateway)

---

## <a name="micro"></a> 1. Server setup

We will be covering two different server options:

- **FarmOS** (an open source farm data management system); and
- **Bayou** (an open source sensor data cooperative).

### FarmOS

You can watch a short video (~ 3 min) on setting up a FarmOS sensor feed [here](https://youtu.be/arGErKKODrU).  

The process will generate a public key + private key pair, and indicate a URL to which you can post sensor data via JSON (See "Sensor Configuration": "Developer Information").  The URL format looks like this:

```
https://edgecollective.farmos.net/farm/sensor/listener/[public key]?private_key=[private key]
```

For example, a typical URL with the keys actually inserted looks like this:

```
https://edgecollective.farmos.net/farm/sensor/listener/0ce692a8fd8474137839535dd7997a28?private_key=ba0c7dbfd4321b3abaa7851457dc12ef
```
Find this URL (with the keys inserted) for your sensor feed, and take note of it (keep the relevant FarmOS browser tab open, or copy-paste this URL into a text file.) It will be used in the  [Gateway Setup](#gateway) section below.

### Bayou

You can watch a short video on setting up a [Bayou](http://159.65.226.222:3000/) sensor feed [here](https://youtu.be/EKZA-AtDYO0).

The basic steps are:

- visit [Bayou](http://159.65.226.222:3000/) (you can get a login via word-of-mouth), and fill in the forms for 'Create a data feed'.  

This will generate a **public key** and a **private key**.  

- take note of these; you will use them in your gateway configuration file in the [Gateway Setup](#gateway) step below.

---

## <a name="micro"></a> 2. Remote Node setup

In our example setup for this guide, the Remote node consists of:

- **Sensor**: an AM2315 Temperature and Humidity Sensor
- **Microcontroller**: a Feather M0 LoRa
- **Additional Hardware**: a PVOS Greenhouse Motherboard Version 4

### Wiring things up

|[ ![figA2](/img/valedalama/am2315.jpg)](/img/valedalama/am2315.jpg)|
|:--:|
| AM2315 temp and humidity sensor, as [listed on Adafruit](https://www.adafruit.com/product/1293).|

The [AM2315](https://www.adafruit.com/product/1293) is an i2c sensor -- which means that it has the following wires:

- VCC / 3.3V  (Red)
- GND (Black)
- SCL (White)
- SDA (Yellow)

These wires should connect to the relevant screw terminal inputs on the "Version 4 Motherboard", as depicted here:

|[ ![fig2](/img/valedalama/remote_v4_board.png)](/img/valedalama/remote_v4_board.png)|
|:--:|
| Remote board, version 4. |

The Feather M0 LoRa should be plugged into the relevant headers on the mothboard, as well.

Note that all resistors (4.7K or 10K) should also be soldered to the board.

### Sensor Test

[feather + am2315 TODO]

### Radio Setup

[feather + am2315 + lora radio]

---

## 3. Gateway setup

[esp32 gateway]

