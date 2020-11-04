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

Here we're going to be describing how to set up a basic 'Greenhouse Monitoring' system, which consists of three main parts:

|[ ![figA2](/img/valedalama/greenhouse_stack.png)](/img/valedalama/greenhouse_stack.png)|
|:--:|
| Overview of the flow of data in the greenhouse monitoring 'stack'. |

1. **Remote Node** -- consisting of a microcontroller + sensor, that captures a signal (e.g. temperature) and relays this data via low-power radio to a wifi gateway
2. **Gateway** -- which relays this incoming sensor data to a server
3. **Server** -- a server which receives data from the gateway and stores it in a database.

---

## Table of Contents 

1. [Setting up the **Server**](#server)
2. [Setting up the **Remote Node**](#micro)
3. [Setting up the **Gateway**](#gateway)

---

## <a name="server"></a> 1. Server setup

![figA2](/img/valedalama/stack_server.png)

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

Another option is to use the [Bayou cooperative sensor data platform](http://159.65.226.222:3000/). This donation-based data service allows users to set up free sensor data feeds. Email collaborate at edgecollective dot io to request a password.

You can watch a short video on setting up a [Bayou](http://159.65.226.222:3000/) sensor feed [here](https://youtu.be/EKZA-AtDYO0).

The basic steps are:

- visit [Bayou](http://159.65.226.222:3000/) (you can get a login via word-of-mouth), and fill in the forms for 'Create a data feed'.  

This will generate a **public key** and a **private key**.  

- take note of these; you will use them in your gateway configuration file in the [Gateway Setup](#gateway) step below.

---

## <a name="micro"></a> 2. Remote Node setup

![figA2](/img/valedalama/stack_node.png)

In our example setup for this guide, the Remote node consists of:

- **Sensor**: an AM2315 Temperature and Humidity Sensor
- **Microcontroller**: a Feather M0 LoRa
- **Additional Hardware**: a PVOS Greenhouse Motherboard Version 4 or Version 5.

### Assembling the Remote Node

The Remote Node requires the following hardware:

- a [Feather M0 LoRa](https://www.adafruit.com/product/3178) (link allows purchase via Adafruit, Digikey, or etc.):

|[ ![figA2](/img/valedalama/feather_m0.jpg)](/img/valedalama/feather_m0.jpg)|
|:--:|
| a [Feather M0 LoRa](https://www.adafruit.com/product/3178), for sale by Adafruit |

***NOTE***: you'll need to choose a Feather M0 LoRa radio band (433 MHz or 868/915 Mhz) that matches the frequency of your LoRa-WiFi gateway.

- an [AM2315 Temp + Humidity sensor](https://www.adafruit.com/product/1293) (purchase via Adafruit, Digikey, or etc.):

|[ ![figA2](/img/valedalama/am2315.jpg)](/img/valedalama/am2315.jpg)|
|:--:|
|an [AM2315 Temp + Humidity sensor](https://www.adafruit.com/product/1293), for sale by Adafruit |

- and a PVOS 'Lama' Board, [version 4]() or [version 5]()

|[ ![figA2](/img/valedalama/pvos_oshpark_v5.png)](/img/valedalama/pvos_oshpark_v5.png)|
|:--:|
|A [PVOS 'Lama' Board Ver 5](https://oshpark.com/shared_projects/vQ5JTv0Z), available via OSHPARK. |

|[ ![figA2](/img/valedalama/3d_render.png)](/img/valedalama/3d_render.png)|
|:--:|
|A [PVOS 'Lama' Board Ver 5](https://oshpark.com/shared_projects/vQ5JTv0Z) rendered with headers soldered (but not yet the screw terminals). |

A can be purchased directly from [OSHPARK]((https://oshpark.com/shared_projects/vQ5JTv0Z)) or by sending the [design files] to PCB manufacturers like JLCPCB, etc.

***NOTE***: some simple hand-soldering (beginner level) and wire stripping is required. 

### Connecting the sensor

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

Code for testing the AM2315 with the Feather is [here](https://github.com/edgecollective/valedalama/tree/master/greenhouse/remote/feather_firmware/featherm0_am2315).

### Radio Setup

Code for measuring the AM2315 and sending it via LoRa is [here](https://github.com/edgecollective/valedalama/tree/master/greenhouse/remote/feather_firmware/featherm0_am2315_lora).

Code for adding sleep functionality is [here](https://github.com/edgecollective/valedalama/tree/master/greenhouse/remote/feather_firmware/featherm0_am2315_lora_sleep).

---

## <a name="gateway"></a> 3. Gateway setup

[TODO ]

**Gateway**:  The gateway we'll be using is a ['Heltec Wifi-LoRa 32 v2'](https://heltec.org/project/wifi-lora-32/), it is available widely online, including [here](https://www.amazon.com/MakerFocus-Development-Bluetooth-0-96inch-Display/dp/B076MSLFC9/ref=asc_df_B076MSLFC9/?tag=hyprod-20&linkCode=df0&hvadid=312824707815&hvpos=&hvnetw=g&hvrand=4477519221563307865&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9002000&hvtargid=pla-570414542843&psc=1). No soldering is required.

![figA2](/img/valedalama/stack_gateway.png)


Sample code for esp32-lora gateway is [here](https://github.com/edgecollective/valedalama/tree/master/greenhouse/gateway/heltec_wifi_lora_bayou_farmos)

Example of data posted [here](http://159.65.226.222:3000/drives/1a142aee9702045f3049325318f14fab10d24ce3e0c8a387d092759c0594ba5e)

