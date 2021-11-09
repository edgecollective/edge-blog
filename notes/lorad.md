---
pageTitle: DIY Low Power Radio Nodes 
layout: layout.njk
date: 2020-08-04
updated: 2021-11-09
tags: notes 
image: img/lorad/rough.jpg
blurb: Building radio nodes with an eye towards easy assembly and easy sourcing of parts.
---

## Rough prototype

Using a JeeNode and a LoRA FeatherWing ... sleeping at 6 uA!

![jee](/img/lorad/rough.jpg)

## LoRa Ra-01
[LoRa Ra-01](https://www.openhardware.io/view/395/LoRa-Ra-01-ATmega328P-Node)

![lorad](/img/lorad/node.jpg)


## JeeNode 

[Assembling the JeeNode](
https://jeelabs.org/2009/12/06/building-the-jeenode-v4/)

![jee_assemble](/img/lorad/jee_assemble.jpg)

## LoRaWAN MiniBrick

[MiniBrick](https://www.tindie.com/products/lps/lorawan-minibrick/)

![minibrick](/img/lorad/minibrick.jpg)


Using the 328p's internal crystal;  and adding a bootloader -- described [here](https://www.hackster.io/techmirtz/arduino-without-external-clock-crystal-on-atmega328-d4fcc4).

---
2021-11-09 07:12:30

Power consumption in CPY using deep sleep ...

Downloading latest CPY distro for M0 via [https://circuitpython.org/](https://circuitpython.org/)

following instructions: [https://circuitpython.readthedocs.io/en/latest/shared-bindings/alarm/index.html](https://circuitpython.readthedocs.io/en/latest/shared-bindings/alarm/index.html)

```
import alarm
import time
import board
import digitalio

led= digitalio.DigitalInOut(board.D13)
led.direction = digitalio.Direction.OUTPUT
#print("Waking up")

while True:

    # blink
    for i in range(0,10):
        led.value=True
        time.sleep(1)
        led.value=False
        time.sleep(1)

    # Set an alarm for 60 seconds from now.
    time_alarm = alarm.time.TimeAlarm(monotonic_time=time.monotonic() + 10)

    # Deep sleep until the alarm goes off. Then restart the program.
    alarm.exit_and_deep_sleep_until_alarms(time_alarm)
```

looks like the M0 sleeps at .03 mA

Meanwhile, the M4 doesn't seem to recognize the 'alarm' module.

Code is here: [https://github.com/edgecollective/cpy-lowpower](https://github.com/edgecollective/cpy-lowpower)

---
2021-11-09 10:25:44

Update: I believe I was misinterpreting what was going on. I may have already had some 'sleep' code running on the board? In any case, 'alarm' doesn't seem to load for either M0 or M4, and isn't listed as an option in the official docs.

Also tried latest build of CPY for nordic IB, didn't seem to work. Going to try 'vanilla' 7.0 build ...


