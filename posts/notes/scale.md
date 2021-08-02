---
pageTitle: DIY load scale measurement
layout: layout.njk
date: 2020-12-24
updated: 2020-12-24
tags: notes 
image: /img/max_force.png
blurb: Load scale measurements using FOS software + hardware
---

---
2020-12-24 05:27:02

amplifier breakout board [here](https://learn.sparkfun.com/tutorials/load-cell-amplifier-hx711-breakout-hookup-guide/all)

sparkfun [openscale](https://learn.sparkfun.com/tutorials/openscale-applications-and-hookup-guide)

esp32 websocket client [here](https://randomnerdtutorials.com/esp32-websocket-server-arduino/)

arduino websockets library for esp [here](https://github.com/gilmaimon/ArduinoWebsockets)

[this](https://randomnerdtutorials.com/esp32-esp8266-plot-chart-web-server/) is a great tutorial on plotting live data in charts using an esp32!

"I also had the same problem, then i have changed in the menu: Tools / Flash size / assigned 2M for SPIFFS (otherwise set to zero).
Now it Works…"

---
2020-12-24 05:32:57

following tutorial [here](https://randomnerdtutorials.com/esp32-esp8266-plot-chart-web-server/)

file uploader for esp32 [here](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/)

needed libraries:
- asyncwebserver [here](https://github.com/me-no-dev/ESPAsyncWebServer)
- asynctcp [here](https://github.com/me-no-dev/AsyncTCP)

initial working github code is [here](https://github.com/edgecollective/esp32-scale/tree/main/firmware/esp32_scale)

![](/img/scale/initial_test.png)

![](/img/scale/load_one.png)

updated code is [here](https://github.com/edgecollective/esp32-scale/tree/main/firmware/esp32_scale_solo)

replacing a div content [here](https://stackoverflow.com/questions/121817/how-do-i-replace-text-inside-a-div-element)

an updated version of the above tutorial [here](https://arduinodiy.wordpress.com/2019/08/05/esp8266-plot-sensor-readings-in-real-time-charts-on-a-web-server/)

---
2020-12-24 06:30:41

dashboard for esp32 [here](https://github.com/ayushsharma82/ESP-DASH)

