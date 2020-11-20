---
pageTitle: Inexpensive Heltec WiFi + LoRa Gateway Setup
layout: layout.njk
date: 2020-09-25
updated: 2020-09-25
tags: notes 
image: img/placeholder.png
blurb: Notes on setting up a Heltec device.
---

## Arduino IDE Setup

Board Manager URL for ESP32:

```https://dl.espressif.com/dl/package_esp32_index.json```

Board Manager URL for Feather M0 LoRa:

```https://adafruit.github.io/arduino-board-index/package_adafruit_index.json```

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

## Radiohead Example

[Basic RFM95 Receive](https://gist.github.com/dwblair/e6626567ff14cec6e29db35b8eb985ed) code for Heltec.  Works.

## Low Power sleep

[Discussion of entering low power sleep mode](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/issues/6)

## HTTP GET AND POST 

Tutorial [here](https://randomnerdtutorials.com/esp32-http-get-post-arduino/).

Working code to do basic JSON post to FarmOS [here](https://gist.github.com/dwblair/c1411750491ef2120d01ca661dbcd747).

ArduinoJSON SerializeJSON [documentation](https://arduinojson.org/v6/api/json/serializejson/).

## HTTP JSON POST TO FARMOS

Using loop-updated variables, code is [here](https://gist.github.com/dwblair/731c806170a11bfc536c32d126559495).

## HELTEC WIFI LORA POST TO FARMOS

Using dummy variables, not yet parsing incoming radio, code is [here](https://gist.github.com/dwblair/895fdbe3cbb5f5f1c43025230a8a5f10)


## Github Repo

Feather sends JSON data; Heltec receives, parses, posts to FarmOS; code is [here](https://github.com/edgecollective/heltec-32-lora-v2-farmos/tree/master/ver1).


## 1-wire temp sensor on remote

[Tutorial](https://lastminuteengineers.com/ds18b20-arduino-tutorial/)

## Sleep Modes for ESP32

Some nice notes [here](https://lastminuteengineers.com/esp32-sleep-modes-power-consumption/#:~:text=ESP32%20Sleep%20mode%20is%20a,it%20to%20retain%20its%20data.)

Deep sleep [example code](https://lastminuteengineers.com/esp32-deep-sleep-wakeup-sources/)

Able to get about 2 mA in deep sleep using Heltec. ...

.. then turned off lora radio and got 1 mA.

gist of the code to do this is [here](https://gist.github.com/dwblair/5bd69024c8536780fa1e3bf835f1d8fb)


Further discussion of low power modes [here](https://www.reddit.com/r/esp32/comments/gx8fxk/hibernatepower_off/).

## ESP32 Data logging

[Nice tutorial here](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/)

## Single-channel gateway guides

[Using ESP8266](https://github.com/things4u/ESP-1ch-Gateway)

[From Sparkfun](https://learn.sparkfun.com/tutorials/esp32-lora-1-ch-gateway-lorawan-and-the-things-network/all)

[Appcodelabs using MQTT](https://appcodelabs.com/introduction-to-iot-building-a-budget-single-channel-lora-gateway)

[From CNX Software](https://www.cnx-software.com/2018/08/21/how-to-make-cheap-single-channel-gateway-lora-esp32-board/) -- looks like they use dozens of nodes here.

### Heltec Deep Sleep

Thread [here](http://community.heltec.cn/t/wifi-lora-32-v2-deep-sleep-low-power-test/101).

### Heltec OTA updates

Lastminuteengineer description using Arduino IDE is [here](https://lastminuteengineers.com/esp32-ota-updates-arduino-ide/).

Using the web, [here](https://lastminuteengineers.com/esp32-ota-web-updater-arduino-ide/).

Espressif github example of web-based OTA [here](https://github.com/espressif/esp-idf/tree/master/examples/system/ota).

Modified example worked nicely, code is [here](https://github.com/edgecollective/heltec-ota)

Login page:

![](/img/heltec/heltec_login.png)

And it works!

![](/img/heltec/ota_progress.png)




