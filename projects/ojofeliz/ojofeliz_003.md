---
pageTitle: Microcontroller setup
layout: layout.njk
date: 2023-03-26
updated: 2023-03-26
tags: ojofeliz 
image: /img/ojofeliz/twintowers.jpeg
blurb: Research in support of choosing an appropriate microcontroller.
---

The ESP32 S2 is low-cost, and has:
- a chip that can be readily sourced, relatively easy to SMT solder
- low power
- wifi
- CircuitPython compatibility

It is also nicely placed on the Feather ESP32 S2 TFT along with a display, 

Questions:
- What's the sleep current?
- Is it possible to use the Arduino version of the Radiohead library, in Arduino, on it? And load a pre-compiled binary onto it, 'drag / drop'?
- Is there a nice 'watchdog timer' function for it?

# Watchdog timer

CircuitPython documentation on the watchdog timer: [https://docs.circuitpython.org/en/latest/shared-bindings/watchdog/index.html](https://docs.circuitpython.org/en/latest/shared-bindings/watchdog/index.html)

-- looks like it's available on the esp32s2

