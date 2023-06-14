---
pageTitle: Satellite + LoRa Depth Sensor 
layout: layout.njk
date: Last Modified 
updated: Last Modified 
tags: notes 
image: img/ojofeliz/exp_1_400mAH.png
blurb: Remote temp and depth sensor transmitting over lora and satellite radio
---

RJ45 connector avail on digikey, with footprint in kicad: [https://www.digikey.com/en/products/detail/amphenol-cs-commercial-products/RJMG1BD3B8K1ANR/5359794](https://www.digikey.com/en/products/detail/amphenol-cs-commercial-products/RJMG1BD3B8K1ANR/5359794)

Better RJ45 connector: [https://www.digikey.com/en/products/detail/amphenol-cs-fci/54602-908LF/1001360](https://www.digikey.com/en/products/detail/amphenol-cs-fci/54602-908LF/1001360)

Keystone 2479 3XAAA holder [https://www.digikey.com/en/products/detail/keystone-electronics/2479/303824](https://www.digikey.com/en/products/detail/keystone-electronics/2479/303824)

sma antenna horizontal [https://www.digikey.com/en/products/detail/te-connectivity-amp-connectors/5-1814400-2/11498408](https://www.digikey.com/en/products/detail/te-connectivity-amp-connectors/5-1814400-2/11498408)

sma antenna vertical [https://www.digikey.com/en/products/detail/te-connectivity-amp-connectors/5-1814832-2/11611208](https://www.digikey.com/en/products/detail/te-connectivity-amp-connectors/5-1814832-2/11611208)

MCP1702 has through-hole option, capable of 250mA [https://www.digikey.com/en/products/detail/microchip-technology/MCP1702-3302E%2FTO/1098463?utm_adgroup=Integrated%20Circuits&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Supplier_Microchip_0150_Co-op&utm_term=&utm_content=Integrated%20Circuits&gclid=CjwKCAjwoIqhBhAGEiwArXT7K7I1hcoVI18yDyanMFynm7qaPZQPBQjBFUdALWkfJCc4vPWMe8IFMBoC9dgQAvD_BwE](https://www.digikey.com/en/products/detail/microchip-technology/MCP1702-3302E%2FTO/1098463?utm_adgroup=Integrated%20Circuits&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Supplier_Microchip_0150_Co-op&utm_term=&utm_content=Integrated%20Circuits&gclid=CjwKCAjwoIqhBhAGEiwArXT7K7I1hcoVI18yDyanMFynm7qaPZQPBQjBFUdALWkfJCc4vPWMe8IFMBoC9dgQAvD_BwE)

ESP32S2 wifi current draw?

ESP32S2 datasheet: [https://www.espressif.com/sites/default/files/documentation/esp32-s2_datasheet_en.pdf](https://www.espressif.com/sites/default/files/documentation/esp32-s2_datasheet_en.pdf)

MIC5219 - [https://www.digikey.com/en/products/detail/microchip-technology/MIC5219-3-3YM5-TR/771750?s=N4IgTCBcDaIKwHYBsBaAjGAHG9KByAIiALoC%2BQA](https://www.digikey.com/en/products/detail/microchip-technology/MIC5219-3-3YM5-TR/771750?s=N4IgTCBcDaIKwHYBsBaAjGAHG9KByAIiALoC%2BQA)

CAT6219 [https://www.led-professional.com/products/led-driver-ics-modules/catalyst-semiconductor-launches-500ma-low-dropout-ldo-regulator#:~:text=An%20alternative%20to%20Micrel's%20MIC5219,ideal%20for%20low%20noise%20applications.](https://www.led-professional.com/products/led-driver-ics-modules/catalyst-semiconductor-launches-500ma-low-dropout-ldo-regulator#:~:text=An%20alternative%20to%20Micrel's%20MIC5219,ideal%20for%20low%20noise%20applications.)

MIC5319 -- can do 500mA max, 150uA sleep current [https://www.digikey.com/en/products/detail/microchip-technology/MIC5319-3-0YD5-TR/9642879](https://www.digikey.com/en/products/detail/microchip-technology/MIC5319-3-0YD5-TR/9642879) 

Top 3 contenders:

S-1155B33-U5T1U -- 500mA max output, 1uA sleep current [https://www.digikey.com/en/products/detail/ablic-u-s-a-inc/S-1155B33-U5T1U/6601512](https://www.digikey.com/en/products/detail/ablic-u-s-a-inc/S-1155B33-U5T1U/6601512) 

the AP2112K that Adafruit uses -- 600mA output, 80uA quiescent current, 250mV dropout at 600mA  [https://www.digikey.com/en/products/detail/diodes-incorporated/AP2112K-3-3TRG1/4470746](https://www.digikey.com/en/products/detail/diodes-incorporated/AP2112K-3-3TRG1/4470746)

RT9080-33GJS -- wow, 600mA max output, 4uA quiescent current, 530mV dropout at 600mA  [https://www.digikey.com/en/products/detail/richtek-usa-inc/RT9080-33GJ5/6161634](https://www.digikey.com/en/products/detail/richtek-usa-inc/RT9080-33GJ5/6161634)

hmm -- AP2112K seems to be the winner

Nice thread on putting diode into VUSB on feather -- [https://forums.adafruit.com/viewtopic.php?f=8&p=706250](https://forums.adafruit.com/viewtopic.php?f=8&p=706250)

Looks like max current for Rockblock is approx 470 mA -- so the AP2112K might be the right answer

# reusing a tracker v0.1 prototype

rfm95 pinout [https://cdn.sparkfun.com/assets/learn_tutorials/8/0/4/RFM95_96_97_98W.pdf](https://cdn.sparkfun.com/assets/learn_tutorials/8/0/4/RFM95_96_97_98W.pdf)

---

non-uf2 circuitpython installation: [https://learn.adafruit.com/welcome-to-circuitpython/non-uf2-installation](https://learn.adafruit.com/welcome-to-circuitpython/non-uf2-installation) for feather m0 lora 

bossac:

[https://github.com/shumatech/BOSSA/tree/arduino](https://github.com/shumatech/BOSSA/tree/arduino)

circuitpython for feather m0 lora :
https://circuitpython.org/board/feather_m0_rfm9x/

```
sudo ./bossac -p /dev/ttyACM0 -e -w -v -R adafruit-circuitpython-feather_m0_rfm9x-en_US-8.0.4.bin
```

[https://learn.adafruit.com/using-ds18b20-temperature-sensor-with-circuitpython/circuitpython](https://learn.adafruit.com/using-ds18b20-temperature-sensor-with-circuitpython/circuitpython)

[https://learn.adafruit.com/using-ds18b20-temperature-sensor-with-circuitpython/circuitpython](https://learn.adafruit.com/using-ds18b20-temperature-sensor-with-circuitpython/circuitpython)

---

todo: 

- 1-wire test w CPY -- 1 sensor works on feather esp32 s2 tft
- adding an additional UART to the esp32-s2 in CPY
- proper choice of ultrasonic sensor
- adding a mosfet on top of the ultrasonic to control it

maximum device count on bus: [https://github.com/adafruit/Adafruit_CircuitPython_OneWire/issues/16](https://github.com/adafruit/Adafruit_CircuitPython_OneWire/issues/16) 

notes:

going to try a p-mosfet ideal diode circuit and bring 3V independently to the feather board.  basically, replicate adafruit's setup, but the action of the mosfet is to bring EN to ground when V_EXT battery is plugged in (V_EXT is connected to gate of fet; fet connects EN to ground). 

independently:  an N-fet is required to turn an external sensor (ultrasonic) on/off -- by disconnecting ground (low side).  can double check this by looking at feather s2 circuit. 'cut the ground lead using an n-fet' 

# Testing depth sensor current consumption

Note -- seems that 3.3V input to VBUS isn't sufficient to power the battery monitor on the esp32-s2?

maxbotix 7388 datasheet: [https://maxbotix.com/pages/hrxl-maxsonar-wr-datasheet](https://maxbotix.com/pages/hrxl-maxsonar-wr-datasheet)

power profiler website: [https://www.nordicsemi.com/Products/Development-hardware/Power-Profiler-Kit-2](https://www.nordicsemi.com/Products/Development-hardware/Power-Profiler-Kit-2)

- instructions: [https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_ppk2%2FUG%2Fppk%2FPPK_user_guide_Intro.html](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_ppk2%2FUG%2Fppk%2FPPK_user_guide_Intro.html) 

# I2C Power Management

[https://learn.adafruit.com/adafruit-esp32-s2-feather/i2c-power-management](https://learn.adafruit.com/adafruit-esp32-s2-feather/i2c-power-management)


 
