---
pageTitle: Radio Telemetry for Hobby Rockets
layout: layout.njk
date: 2022-12-20
updated: 2022-12-20
tags: notes 
image: img/rocket1.png
blurb: Hobby rocketry radio telemetry -- perhaps useful for assessing radio tower height requirements.
---

[![](/img/rocket3.png)](/img/rocket3.png)

Above: Feather M0 LoRa with BMP180 pressure sensor, sending pressure data to a Mothbot, which is then received over serial port via python script and written to a file.

Four tosses are depicted.  Noise is likely due to gusts of air over sensor intake.

Saved rocket data for above flight: [https://docs.google.com/spreadsheets/d/1xSktG4DRvUF6qgfyWK6ynM1aw0qqGGJDVixcwqjTPjU/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1xSktG4DRvUF6qgfyWK6ynM1aw0qqGGJDVixcwqjTPjU/edit?usp=sharing)

Microcontroller firmware and python code is here: [https://github.com/dwblair/rocketman](https://github.com/dwblair/rocketman)

Altitude conversion formula: [https://www.weather.gov/media/epz/wxcalc/pressureAltitude.pdf](https://www.weather.gov/media/epz/wxcalc/pressureAltitude.pdf)


Max weight for a given engine: [https://www.apogeerockets.com/education/downloads/Newsletter33.pdf](https://www.apogeerockets.com/education/downloads/Newsletter33.pdf)

