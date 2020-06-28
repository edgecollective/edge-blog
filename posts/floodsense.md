---
pageTitle: Flood Sensing in New Orleans, Louisiana (USA)
layout: layout.njk
date: 2020-04-14
updated: 2020-05-12
tags: projects
image: img/nola/flood_sensor.png
blurb: Collaborating on the FloodSense project with NOLAFlotilla.
---

<img src="/img/nola/gateway_option_a.png">

## Prototyping

<img src="/img/nola/enclosure.jpeg">

<img src="/img/nola/circuitpytest.jpeg">

<img src="/img/nola/loratest.jpeg">

<img src="/img/nola/circuit1a.jpeg">

<img src="/img/nola/circuit1.jpeg">

<img src="/img/nola/proto1.jpeg">

<img src="/img/nola/proto1b.jpeg">

## Gateway options 

<iframe width="560" height="315" src="https://www.youtube.com/embed/oT0rrirHWP8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Notes

[Turbine down](https://www.wwltv.com/article/news/local/down-the-drain/swb-new-orleans-drainage-system-severely-hampered-going-into-hurricane-season/289-c3757b35-1ccc-4f85-a78a-9d745422a55f)


## Itsy Power Options

<img src="/img/nola/itsy_power.png">


## Ultrasonic PVC Pipe Floater Prototype

<img src="/img/nola/pvc_design.png"></br>

<img src="/img/nola/pipe.jpeg"></br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/l0kGw_RZJFs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></br>

## Posting to FarmOS using CircuitPython

Using the demo repo [here](https://github.com/edgecollective/flood-sense/tree/master/circuitpython/remote_and_gateway_demo), which provides code for a remote Itsy M4 LoRa node, and an Itsy M4 + Airlift (Wifi) + Lora gateway:

<img src="/img/nola/pinout.jpeg"></br>

<img src="/img/nola/floodsense_farmos_data.png"></br>

<img src="/img/nola/floodsense_farmos_distance_data.png"></br>

## Arduino Setup for Ultrasonic Sensor Node

Setting up the ultrasonic sensor (HC-SR04) ...

Noticed that the Itsy M4 isn't working with the Adafruit Timer chip -- perhaps the pins boot up in a 'high' state, so that the DONE pin always starts high, and keeps the timer off?

So going to set up everything in Arduino for now ...

Wiring identical to ultrasonic setup from before ...

[Adafruit wiring setup for ultrasonic](https://learn.adafruit.com/ultrasonic-sonar-distance-sensors/python-circuitpython)

change for itsy:

pin 5 (trigger) --> pin 10
pin 6 (echo) --> pin 11


[Arduino code example for ultrasonic](https://www.instructables.com/id/Simple-Arduino-and-HC-SR04-Example/)

Note -- there's also a [3V-compatible version of hte HC-SR04, called the RCWL-1601](https://www.adafruit.com/product/4007) 


Using [this Arduino code for ultrasonic](https://create.arduino.cc/projecthub/Isaac100/getting-started-with-the-hc-sr04-ultrasonic-sensor-036380)

Update: SAMD51 (processor on Itsy M4) doesn't seem to be compatible with the Radiohead library currently. Error when compiling:

```
Arduino: 1.8.12 (Linux), TD: 1.51, Board: "Adafruit ItsyBitsy M4 (SAMD51), Enabled, 120 MHz (standard), Small (-Os) (standard), 50 MHz (standard), Arduino, Off"


/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:225:36: note: suggested alternative: 'GCLK_CLKCTRL_IDs'
     REG_GCLK_CLKCTRL = (uint16_t) (GCLK_CLKCTRL_CLKEN | GCLK_CLKCTRL_GEN_GCLK0 | GCLK_CLKCTRL_ID(GCM_TCC2_TC3)) ;
                                    ^~~~~~~~~~~~~~~~~~
                                    GCLK_CLKCTRL_IDs
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:225:57: error: 'GCLK_CLKCTRL_GEN_GCLK0' was not declared in this scope
     REG_GCLK_CLKCTRL = (uint16_t) (GCLK_CLKCTRL_CLKEN | GCLK_CLKCTRL_GEN_GCLK0 | GCLK_CLKCTRL_ID(GCM_TCC2_TC3)) ;
                                                         ^~~~~~~~~~~~~~~~~~~~~~
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:225:57: note: suggested alternative: 'GCLK_PCHCTRL_GEN_GCLK0'
     REG_GCLK_CLKCTRL = (uint16_t) (GCLK_CLKCTRL_CLKEN | GCLK_CLKCTRL_GEN_GCLK0 | GCLK_CLKCTRL_ID(GCM_TCC2_TC3)) ;
                                                         ^~~~~~~~~~~~~~~~~~~~~~
                                                         GCLK_PCHCTRL_GEN_GCLK0
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:225:82: error: 'GCLK_CLKCTRL_ID' was not declared in this scope
     REG_GCLK_CLKCTRL = (uint16_t) (GCLK_CLKCTRL_CLKEN | GCLK_CLKCTRL_GEN_GCLK0 | GCLK_CLKCTRL_ID(GCM_TCC2_TC3)) ;
                                                                                  ^~~~~~~~~~~~~~~
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:225:82: note: suggested alternative: 'GCLK_CLKCTRL_IDs'
     REG_GCLK_CLKCTRL = (uint16_t) (GCLK_CLKCTRL_CLKEN | GCLK_CLKCTRL_GEN_GCLK0 | GCLK_CLKCTRL_ID(GCM_TCC2_TC3)) ;
                                                                                  ^~~~~~~~~~~~~~~
                                                                                  GCLK_CLKCTRL_IDs
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:226:19: error: 'struct Gclk' has no member named 'STATUS'
     while ( GCLK->STATUS.bit.SYNCBUSY == 1 ); // wait for sync
                   ^~~~~~
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:232:27: error: 'volatile struct TC_STATUS_Type::<unnamed>' has no member named 'SYNCBUSY'
     while (TC->STATUS.bit.SYNCBUSY == 1); // wait for sync
                           ^~~~~~~~
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:235:27: error: 'volatile struct TC_STATUS_Type::<unnamed>' has no member named 'SYNCBUSY'
     while (TC->STATUS.bit.SYNCBUSY == 1); // wait for sync
                           ^~~~~~~~
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:236:22: error: 'TC_CTRLA_WAVEGEN_MFRQ' was not declared in this scope
     TC->CTRLA.reg |= TC_CTRLA_WAVEGEN_MFRQ; // Set TC as Match Frequency
                      ^~~~~~~~~~~~~~~~~~~~~
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:236:22: note: suggested alternative: 'TC_WAVE_WAVEGEN_MFRQ'
     TC->CTRLA.reg |= TC_CTRLA_WAVEGEN_MFRQ; // Set TC as Match Frequency
                      ^~~~~~~~~~~~~~~~~~~~~
                      TC_WAVE_WAVEGEN_MFRQ
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:237:27: error: 'volatile struct TC_STATUS_Type::<unnamed>' has no member named 'SYNCBUSY'
     while (TC->STATUS.bit.SYNCBUSY == 1); // wait for sync
                           ^~~~~~~~
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:243:27: error: 'volatile struct TC_STATUS_Type::<unnamed>' has no member named 'SYNCBUSY'
     while (TC->STATUS.bit.SYNCBUSY == 1); // wait for sync
                           ^~~~~~~~
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:246:27: error: 'volatile struct TC_STATUS_Type::<unnamed>' has no member named 'SYNCBUSY'
     while (TC->STATUS.bit.SYNCBUSY == 1); // wait for sync
                           ^~~~~~~~
/home/dwblair/Arduino/libraries/RadioHead/RH_ASK.cpp:258:27: error: 'volatile struct TC_STATUS_Type::<unnamed>' has no member named 'SYNCBUSY'
     while (TC->STATUS.bit.SYNCBUSY == 1); // wait for sync
                           ^~~~~~~~
/home/dwblair/.arduino15/packages/arduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-g++ -mcpu=cortex-m4 -mthumb -c -g -Os -w -std=gnu++11 -ffunction-sections -fdata-sections -fno-threadsafe-statics -nostdlib --param max-inline-insns-single=500 -fno-rtti -fno-exceptions -MMD "-D__SKETCH_NAME__=\"\"\"itsym4_lora_ultrasonic.ino\"\"\"" -DF_CPU=120000000L -DARDUINO=10812 -DARDUINO_ITSYBITSY_M4 -DARDUINO_ARCH_SAMD -D__SAMD51G19A__ -DADAFRUIT_ITSYBITSY_M4_EXPRESS -D__SAMD51__ -DUSB_VID=0x239A -DUSB_PID=0x802B -DUSBCON -DUSB_CONFIG_POWER=100 "-DUSB_MANUFACTURER=\"Adafruit LLC\"" "-DUSB_PRODUCT=\"Adafruit ItsyBitsy M4\"" -I/home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/cores/arduino/TinyUSB -I/home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/cores/arduino/TinyUSB/Adafruit_TinyUSB_ArduinoCore -I/home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/cores/arduino/TinyUSB/Adafruit_TinyUSB_ArduinoCore/tinyusb/src -D__FPU_PRESENT -DARM_MATH_CM4 -DCRYSTALLESS -mfloat-abi=hard -mfpu=fpv4-sp-d16 -DENABLE_CACHE -Os -DVARIANT_QSPI_BAUD_DEFAULT=50000000 -D__SAMD51G19A__ -DADAFRUIT_ITSYBITSY_M4_EXPRESS -D__SAMD51__ -DUSB_VID=0x239A -DUSB_PID=0x802B -DUSBCON -DUSB_CONFIG_POWER=100 "-DUSB_MANUFACTURER=\"Adafruit LLC\"" "-DUSB_PRODUCT=\"Adafruit ItsyBitsy M4\"" -I/home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/cores/arduino/TinyUSB -I/home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/cores/arduino/TinyUSB/Adafruit_TinyUSB_ArduinoCore -I/home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/cores/arduino/TinyUSB/Adafruit_TinyUSB_ArduinoCore/tinyusb/src -D__FPU_PRESENT -DARM_MATH_CM4 -DCRYSTALLESS -mfloat-abi=hard -mfpu=fpv4-sp-d16 -I/home/dwblair/.arduino15/packages/arduino/tools/CMSIS/4.5.0/CMSIS/Include/ -I/home/dwblair/.arduino15/packages/arduino/tools/CMSIS-Atmel/1.2.0/CMSIS/Device/ATMEL/ -I/home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/cores/arduino -I/home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/variants/itsybitsy_m4 -I/home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/libraries/SPI -I/home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/libraries/Adafruit_ZeroDMA -I/home/dwblair/Arduino/libraries/RadioHead -I/home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/libraries/Wire /home/dwblair/Arduino/libraries/RadioHead/RH_NRF51.cpp -o /tmp/arduino_build_266054/libraries/RadioHead/RH_NRF51.cpp.o
Using library SPI at version 1.0 in folder: /home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/libraries/SPI 
Using library Adafruit_ZeroDMA at version 1.0.4 in folder: /home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/libraries/Adafruit_ZeroDMA 
Using library RadioHead in folder: /home/dwblair/Arduino/libraries/RadioHead (legacy)
Using library Wire at version 1.0 in folder: /home/dwblair/.arduino15/packages/adafruit/hardware/samd/1.5.9/libraries/Wire 
exit status 1
Error compiling for board Adafruit ItsyBitsy M4 (SAMD51).
```
## Version 2

[Remote and Gateway Code](https://github.com/edgecollective/flood-sense/tree/master/ver2)

Remote now is done in Arduino, to allow for low-power Timer use. Wiring is described.

Gateway has same wiring as previous; but 'main.py' has changed.  Data is now sent to a special server

No graphs yet on server (very soon!) but can test to see whether new data is arriving [here](http://64.227.0.108:8600/api/latest)

## Streetwise

Here's a 'traffic accident and street flooding' app that is being used currently in NOLA -- they allow for users to report accidents or flooding:

[Streetwise](http://streetwise.nola.gov/)

## Version 3

vl6180x Microlidar sensor from adafruit 

Tutorial on using the sensor (with arduino code) [here](https://learn.adafruit.com/adafruit-vl6180x-time-of-flight-micro-lidar-distance-sensor-breakout/wiring-and-test)

```
{ batt: '3.680274',
  dist: '0',
  rssi: -25,
  lux: '9.09',
  status: '7' }
```





