---
pageTitle: Welcome to the Quahog!
layout: layout.njk
---

<img src="/img/quahog/quahog_close.png" width=25%>

Contact:  collaborate @ edgecollective.io

Hello!  Welcome to our page for the **Quahog**, a ruggedized,  microcontroller intended for use on farms for monitoring important assets remotely:  the temperature of a greenhouse (on- or off-grid), the temperature of a freezer, soil moisture in the field, water level, etc.

---

## Current Status

We've been testing the first version of the Quahog (version 0.1, see below) for about a year now, and we're in the process of testing a new version (version 0.2) -- if it works as well as ver 0.1, we'll be distributing it as a kit or pre-assembled very soon.  

We expect to be able to **sell hand-assembled version of the Quahog** (likely for around $300 each) **within the next month or so**; we will also be trying to sell the parts as a DIY "kit" for hand soldering and assembly.  For those with the relevant background, the hardware design files are available online (see below). 

Meanwhile: we're currently using this hardware for "custom installs": **so if you have a gnarly on-farm problem you'd like to solve** --  monitoring a remote greenhouse, retrofitting existing infrastructure, monitoring freezer temp -- do contact us if you'd like to hire us to solve a problem for you!  We're based in Northeast USA but love to travel.

Contact:  collaborate @ edgecollective.io

---

## Our Philosophy

Our aim as a cooperative is to enable farming communities to have more control over their important infrastructure, and be as resilient and independent as they'd like to be. So, we've deliberately designed the board to be as accessible, rugged, and easy to assemble and repair as possible.  

**Right to repair; and to assemble; and to sell** 

The board is fully open source -- all of the designs are available online.  We want people to have the freedom to build, modify, and distribute their own boards.  Our vision is that local farming communities that wish to can become as self-sufficient as possible around this sort of technology:  using it, repairing it, and even producing it themselves.  The software allows you to speak to any server that speaks HTTP (including one you set up on your farm, if you like) -- no vendor lock-in.   

**Accessible, hackable design**

We've design the board using as many through-hole parts as possible, so that it's relatively easy to assemble and repair by those new to electronics.  The hardware is fully open source; all of the design files are available online.

The Quahog has switching regulators that allow it to run off up to 36 Volts, so it can be used with many solar panel systems, car batteries, and the like in off-grid scenarios.

It is possible to program the Quahog via both the Arduino IDE and Micropython -- we have been excited to push forward with Micropython development, and have developed code for measuring temperature (via inexpensive one-wire sensors), humidity, and for connecting to Decagon sensors (via a serial connection).  

**Flexible Communication options**

The Quahog can connect to WiFi, and it also has an on-board LoRa radio module.  It can thus form a simple "star" topology sensor network, with one of the Quahogs acting as a "gateway"; or an individual Quahog can simply post sensor measurements online.

We've also connected the Quahog to an inexpensive satellite modem (the RockBlock) capable of sending short messages via the Iridium satellite network.  Our plan is to enable farmers in remote locations to monitor assets in an inexpensive way.

Contact:  collaborate @ edgecollective.io

---

# Quahog Version 0.1

The Quahog is a microcontroller based around the Espressif ESP32 microcontroller, which is capable of being programmed in the Arduino IDE and in Micropython. 

The Quahog requires an USB-TTL cable for programming.

The Quahog version 0.1 schematic is [here](/img/quahog/hog32a.pdf); you can find the full KiCad design files [here](https://github.com/edgecollective/hog32).  

**Schematic**:

<img src="/img/quahog/hog32a.png" width=50%>

**Board layout**:

<img src="/img/quahog/hog32a_board.png" width=30%>

**More pictures of the Quahog**:

<img src="/img/quahog/pic1.JPG" width=30%>
<img src="/img/quahog/pic2.JPG" width=30%>
<img src="/img/quahog/pic3.JPG" width=30%>
<img src="/img/quahog/pic4.JPG" width=30%>
<img src="/img/quahog/sat1.JPG" width=30%>
<img src="/img/quahog/sat2.JPG" width=30%>
<img src="/img/quahog/sat3.JPG" width=30%>
<img src="/img/quahog/sat4.JPG" width=30%>
<img src="/img/quahog/board1.JPG" width=30%>

 
More [pics](https://edgecollective.io/quahog_pics.html) of the Quahog.


