---
pageTitle: Bluetooth experiments
layout: layout.njk
date: 2020-11-16
updated: 2020-11-16
tags: notes 
image: /img/co2/nrf52_pinout.jpg
blurb: Experiments with Bluetooth microcontrollers
---

---

2020 NOV 16


NRF52 + LoRa wing setup --

- B / 11 -- RST
- D / 30 -- CS
- E / 27 -- IRQ

NRF52 Feather:

[![](/img/co2/nrf52_pinout.jpg)](/img/co2/nrf52_pinout.jpg)


LoRa Featherwing:

[![](/img/bluetooth/lora_featherwing.jpg)](/img/bluetooth/lora_featherwing.jpg)

---

24 NOV 2020

## Web App + ESP32 Bluetooth configuration

By [Parker](https://github.com/pswoodworth)!

[ESP32 Code](https://github.com/pswoodworth/esp32-ble-interface)

[Web app](https://github.com/pswoodworth/ble-micro-web-interface)

---
2020-11-26 14:57:25

Experimenting with [Parker's Arduino BLE code](https://github.com/edgecollective/esp32-ble-interface) ...

Compiles nicely for Heltec Wifi LoRa 32 v2!  But interesting that for ESP32 Feather, we get:

![](/img/bluetooth/adafruit_feather_32_error.png)







