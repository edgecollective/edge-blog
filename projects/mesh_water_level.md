---
pageTitle: Mesh Water Level
layout: layout.njk
date: Last Modified
tags: projects
image: /img/mesh_water_level/ultrasonic_sender.png
blurb: A solar-powered ultrasonic water level sensor that sends readings over a MeshCore LoRa link to a WiFi gateway and logs them to Bayou. Full parts list, wiring, and setup.
---

![Illustration of the sender in the field: a small solar panel above a weatherproof box, with the ultrasonic sensor pointing down at the water](/img/mesh_water_level/ultrasonic_sender.png)

<p style="text-align:center;font-size:0.9em;margin-top:-0.4em"><i>Illustration courtesy Jacob Lloyd</i></p>

## Problem Statement

We'd like to provide **real-time alerts about local water levels and flooding conditions to rural areas**, using technology that is **accessible, inexpensive, and easy to deploy and repair locally**.

One reason we're excited about **mesh radio** in particular is that it's increasingly widely adopted, and it opens up **overlapping use-cases**. The same network that carries water-level readings can also carry text messages between neighbors, readings from other sensors, and emergency communications when the power or internet is down. When a network is useful for many things, more people have a reason to keep it running, which makes ongoing community maintenance more likely.

## Design Considerations

[![Remote sensor links compared by expertise required and outside dependencies. The MeshCore mesh with SD logging sits in the convivial corner: owned, and low on both.](/img/comms/sensor-matrix.png)](/img/comms/sensor-matrix.png)

<p style="text-align:center;font-size:0.9em;margin-top:-0.4em"><i>Where this design sits among other ways of getting data out of a sensor. More in our research note, <a href="/notes/comms-types/">A map of sensor communications</a>.</i></p>

## System Overview

| [![Diagram: a solar-powered sensor node over water storage sends readings over a LoRa mesh, via a hilltop repeater, to a gateway node at home that uplinks to an internet database over Wi-Fi. Within the local mesh, an e-ink kiosk and a phone paired by Bluetooth to a mesh radio can also read the level, even with the grid and internet down.](/img/mesh_water_level/water-level-mesh-diagram.svg)](/img/mesh_water_level/water-level-mesh-diagram.svg) |
|:--:|
|The sensor node sits on a local LoRa mesh. Readings reach the internet through a gateway at home, and they can also be read locally, on a kiosk or a phone with a mesh radio, when the grid or internet is down.|

## Current Approach

A solar-powered ultrasonic sensor that measures the distance down to a water surface, radios it over a [MeshCore](https://meshcore.io) LoRa link to a WiFi gateway, and logs it to [Bayou](https://gitlab.com/p-v-o-s/agroeco/bayou). It works where there's no cell service or WiFi at the water's edge.

<figure style="margin:1.2em 0">
<div style="border:1px solid #cfdadc;border-radius:6px;padding:14px;background:#fff">
<svg viewBox="0 0 660 280" role="img" aria-label="Sender (Rook) sends LoRa to receiver (Heltec), which posts over WiFi to Bayou" style="display:block;width:100%;height:auto;font-family:system-ui,-apple-system,Segoe UI,sans-serif">
<rect x="20" y="30" width="180" height="220" rx="8" fill="#fff" stroke="#0f6e8c" stroke-width="2"/>
<image href="/img/mesh_water_level/rook_ultrasonic_sender_closeup.png" x="35" y="40" width="150" height="150" preserveAspectRatio="xMidYMax meet"/>
<text x="110" y="215" text-anchor="middle" font-size="13" font-weight="600" fill="#10262e">Sender (Rook)</text>
<text x="110" y="235" text-anchor="middle" font-size="11" fill="#52666d">ultrasonic + LoRa</text>
<path d="M 210 140 L 265 140" stroke="#0f6e8c" stroke-width="2" fill="none"/>
<polygon points="265,134 277,140 265,146" fill="#0f6e8c"/>
<text x="243" y="128" text-anchor="middle" font-size="11" font-weight="600" font-family="ui-monospace,Menlo,monospace" fill="#0f6e8c">LoRa</text>
<rect x="290" y="30" width="180" height="220" rx="8" fill="#fff" stroke="#0f6e8c" stroke-width="2"/>
<image href="/img/mesh_water_level/sensor_receiver.png" x="305" y="40" width="150" height="150" preserveAspectRatio="xMidYMax meet"/>
<text x="380" y="215" text-anchor="middle" font-size="13" font-weight="600" fill="#10262e">Receiver (Heltec V3/V4)</text>
<text x="380" y="235" text-anchor="middle" font-size="11" fill="#52666d">LoRa + WiFi</text>
<path d="M 480 140 L 535 140" stroke="#0f6e8c" stroke-width="2" fill="none"/>
<polygon points="535,134 547,140 535,146" fill="#0f6e8c"/>
<text x="513" y="128" text-anchor="middle" font-size="11" font-weight="600" font-family="ui-monospace,Menlo,monospace" fill="#0f6e8c">WiFi</text>
<rect x="560" y="90" width="90" height="100" rx="8" fill="#fff" stroke="#0f6e8c" stroke-width="2"/>
<text x="605" y="135" text-anchor="middle" font-size="13" font-weight="600" fill="#10262e">Bayou</text>
<text x="605" y="155" text-anchor="middle" font-size="11" fill="#52666d">data store</text>
</svg>
<p style="font-size:0.85em;color:#52666d;text-align:right;margin:8px 0 0"><i>Illustration courtesy Jacob Lloyd</i></p>
</div>
</figure>

The system is two devices:

- **Sender.** A weatherproof box over the water holds a [Rook v4](/shop/rook-v4/) board and a lithium battery charged by a small 5 V solar panel. A MaxBotix MB7383 ultrasonic rangefinder threads through the bottom of the box and points straight down. On a timer (every 5 minutes by default), the Rook reads the distance and transmits it with its battery voltage.
- **Receiver.** A Heltec WiFi LoRa 32 (V3 or V4) sits indoors within WiFi range. It acknowledges each reading and posts it to a Bayou feed. The LoRa link can span a few hundred metres to a few kilometres, depending on terrain and antennas.

The full build recipe covers:

- A full bill of materials, with where to buy each part and approximate prices
- Three ways to get a Rook: assembled, bare PCB, or built from the open design files
- Wiring diagrams for the sensor node
- Mounting over the water
- Gateway setup, plus flashing both devices from the browser

A ready-to-deploy version is available as the [Mesh Radio Water Level Kit](/shop/outdoor-sensor-kit/).

**[Read the full build recipe →](https://edgecollective.io/mesh-water-level/)**

## Firmware

The firmware is documented at [edgecollective/MeshCore-simple-sensor](https://edgecollective.io/MeshCore-simple-sensor/): how it works, how readings reach Bayou, and how to flash and configure both devices from the browser.
