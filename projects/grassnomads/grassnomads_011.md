---
pageTitle: Upgrades after lightning strike 
layout: layout.njk
date: 2024-10-31
updated: Last Modified 
tags: grassnomads 
image: /img/placeholder.png
blurb: Taking the opportunity to simplify the overall circuit. 
---

Circuitpython code for identifying possible uart pin pair combinations: [https://learn.adafruit.com/adafruit-itsybitsy-nrf52840-express/circuitpython-uart-serial](https://learn.adafruit.com/adafruit-itsybitsy-nrf52840-express/circuitpython-uart-serial)

## IB NRF 

Looks like any pin combinations work

## IB M4

RX pin: board.A3         TX pin: board.A2
RX pin: board.D4         TX pin: board.A2
RX pin: board.D5         TX pin: board.A2
RX pin: board.SDA        TX pin: board.A2
RX pin: board.A1         TX pin: board.A4
RX pin: board.A5         TX pin: board.A4
RX pin: board.D2         TX pin: board.A4
RX pin: board.D0         TX pin: board.D1
RX pin: board.D10        TX pin: board.D1
RX pin: board.D11        TX pin: board.D1
RX pin: board.D12        TX pin: board.D1
RX pin: board.D9         TX pin: board.D1
RX pin: board.D10        TX pin: board.D12
RX pin: board.D11        TX pin: board.D12
RX pin: board.LED        TX pin: board.D12
RX pin: board.D3         TX pin: board.D12
RX pin: board.APA102_MOSI        TX pin: board.D12
RX pin: board.D0         TX pin: board.LED
RX pin: board.D10        TX pin: board.LED
RX pin: board.D11        TX pin: board.LED
RX pin: board.D12        TX pin: board.LED
RX pin: board.D9         TX pin: board.LED
RX pin: board.D10        TX pin: board.APA102_SCK
RX pin: board.D11        TX pin: board.APA102_SCK
RX pin: board.LED        TX pin: board.APA102_SCK
RX pin: board.D3         TX pin: board.APA102_SCK
RX pin: board.APA102_MOSI        TX pin: board.APA102_SCK
RX pin: board.A3         TX pin: board.SCL
RX pin: board.D4         TX pin: board.SCL
RX pin: board.D5         TX pin: board.SCL
RX pin: board.SDA        TX pin: board.SCL
RX pin: board.D4         TX pin: board.SDA
RX pin: board.D5         TX pin: board.SDA
RX pin: board.SCL        TX pin: board.SDA

## IB KB RP2040 

RX pin: board.A3         TX pin: board.A2
RX pin: board.RX         TX pin: board.A2
RX pin: board.SCL        TX pin: board.A2
RX pin: board.A3         TX pin: board.TX
RX pin: board.RX         TX pin: board.TX
RX pin: board.SCL        TX pin: board.TX
RX pin: board.A3         TX pin: board.SDA
RX pin: board.RX         TX pin: board.SDA
RX pin: board.SCL        TX pin: board.SDA
RX pin: board.D5         TX pin: board.D4
RX pin: board.D9         TX pin: board.D4
RX pin: board.D5         TX pin: board.D8
RX pin: board.D9         TX pin: board.D8
RX pin: board.D5         TX pin: board.MISO
RX pin: board.D9         TX pin: board.MISO

NOTE:  the depth sensor should receive on the 'created' UART -- only need to coordinate the RX pin -- while the satellite modem should have the 'true' board UART as defined.
