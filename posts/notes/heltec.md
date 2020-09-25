---
pageTitle: Inexpensive Heltec WiFi + LoRa Gateway Setup
layout: layout.njk
date: 2020-09-25
updated: 2020-09-25
tags: notes 
image: img/placeholder.png
blurb: Notes on setting up a Heltec device.
---

## Guides

[Robotzero](https://robotzero.one/heltec-wifi-kit-32/)

Basically need to just load this config file in 'Additional Board Manager URLs' field in Preferences in Arduino IDE:

```https://dl.espressif.com/dl/package_esp32_index.json```

Then can select Heltec WiFi Lora (V2) (the board we're using).

WiFi scan worked.

|[ ![wifi scan](/img/heltec/wifi_scan.png)](/img/heltec/wifi_scan.png)|
|:--:|
| Initial wifi scan test.  |


## Display Library

[U8g2 library](https://github.com/olikraus/u8g2) for Arduino covers a wide range of common displays.

[Test code](https://gist.github.com/dwblair/d74bb01fbd3514ffd6b5eb5d9b66ab88) that will scan wifi and display the results on the screen.

## Main Heltec Documentation

[Heltec Wifi Lora 32](https://heltec.org/project/wifi-lora-32/)

## Coding and Setup Debugging ...

[Instructable](https://www.instructables.com/id/Introduction-to-ESP32-WiFi-LoRa/) that has a nice set of diagrams of pinouts

[Heltec Library](https://github.com/HelTecAutomation/Heltec_ESP32)

[Main github reference for Heltec devices -- includes KiCad file for device](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series)

[Heltec WiFi LoRa send / receive](http://community.heltec.cn/t/heltec-wifi-lora-32-v2-send-receive/160)

[Heltec syncword issue](http://community.heltec.cn/t/ping-pong-test-between-cubecell-dev-board-and-wifi-lora-32-v2/508/7)

[Robot Zero One LoRa receiver demo](https://robotzero.one/heltec-wifi-lora-32/)

They suggest using [this LoRa library](https://github.com/sandeepmistry/arduino-LoRa). 

## Working LoRa Example

Follow [Robot Zero One LoRa receiver demo](https://robotzero.one/heltec-wifi-lora-32/);

use [this LoRa library](https://github.com/sandeepmistry/arduino-LoRa);

And [this example](https://gist.github.com/dwblair/cfe9bfb895d4ad72d88ed91fb76ded47).

**Receive and display**. Can get it posted on the display using [this example](https://gist.github.com/dwblair/9da853fb274c184f89f3f14123b9e032) with [U8g2 display library](https://github.com/olikraus/u8g2) -- basically works.

