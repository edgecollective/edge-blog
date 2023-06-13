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

# Power testing

sat modem "disabled" + esp32-s2 tft asleep -- 3.68 mA
sat modem "enabled" + esp32-s2 tft asleep -- 3.66 mA

essentially no difference.

Seems like the esp32-s2 with no display sleeps at about .7 mA

Apparent issue with the watchdog timer: [https://github.com/adafruit/circuitpython/issues/5890](https://github.com/adafruit/circuitpython/issues/5890)

Testing out LoRa - based depth: 

[http://bayou.pvos.org/data/pb87ap97vgrr](http://bayou.pvos.org/data/pb87ap97vgrr)

Running every 2 seconds as a test ... latest version is sweet-p/firmware/board_ver_0.2/v4.0

Experiment overnight, May 30th:

[http://bayou.pvos.org/data/pb87ap97vgrr?plot_param=battery_volts](http://bayou.pvos.org/data/pb87ap97vgrr?plot_param=battery_volts)

![](/img/ojofeliz/exp_1_400mAH.png)

Power consumption guidance for the sat modem:

[https://docs.rockblock.rock7.com/docs/power-consumption-guidance](https://docs.rockblock.rock7.com/docs/power-consumption-guidance)


Very strange behavior when pull down the satellite 'on/off pin'.  I've added an external resistor pull-down to make sure it stays down. Seems like the voltage is still around 1.5V, nevertheless.  Stronger pulldown required?

![](/img/ojofeliz/sat_sleep_with_pulldown.png)

Extended test -- note, test begins with largest spike:

![](/img/ojofeliz/sat_sleep_strange.png)


# External power or Eable

[TPL5111 page on Adafruit](https://www.adafruit.com/product/3573)

[TPL5110 page on Adafruit](https://www.adafruit.com/product/3435)

> We also have a TPL5110 breakout, which rather than setting an enable pin high/low, connects and disconnects power. The TPL5111 breakout is best when you have an enable pin you can control, the TPL5110 is best when you are able to 'break' the power input line to place the TPL5110 between the power supply and Vin.

## TPL5110

TPL5110 connects and disconnects power -- best for when you can cut the power supply 

[TPL5110 datasheet](https://www.ti.com/lit/ds/symlink/tpl5110.pdf?ts=1686252373082&ref_url=https%253A%252F%252Fwww.google.com%252F)

![](/img/ojofeliz/tpl5110_app.png)

Note: Sparkfun makes a nice breakout board for the TPL5110 that includes switches for the resistance value!  On digikey [here](https://www.digikey.com/en/products/detail/sparkfun-electronics/PRT-15353/10244128?utm_adgroup=Evaluation%20and%20Demonstration%20Boards%20and%20Kits&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Product_Development%20Boards%2C%20Kits%2C%20Programmers_NEW&utm_term=&utm_content=Evaluation%20and%20Demonstration%20Boards%20and%20Kits&gclid=CjwKCAjwm4ukBhAuEiwA0zQxk9NUeqWwqSV8MqMlafQwavYTjWA6aRNF34xgF1BBTtxWISqSYahBExoC5xcQAvD_BwE)

and on Sparkfun [here](https://www.sparkfun.com/products/15353)

## TPL5111

TPL5111 ideally sets an enable pin high/low -- best for when there's an enable pin on an LDO

[TPL5111 datasheet](https://cdn-shop.adafruit.com/product-files/3573/3573_datasheet.pdf)

![](/img/ojofeliz/tpl5111_app.png)

Actually, seems as though we might want TPL5111 -- controlling an enable (or reset) pin -- since we need to keep the satellite modem powered.  And in general we can expect that an enable / reset approach is quite flexible -- we can design our own LDO / mosfet setups in general.

So, how would an a TPL5111 setup work?

Reading the Adafruit guide to the TPL5111, [here](https://learn.adafruit.com/adafruit-tpl5111-reset-enable-timer-breakout/overview) ...

Note that the TPL5111 pulls an enable pin high -- if we wanted to invert the signal, we could use a single chip for that, or resistors and a transistor, as per [https://electronics.stackexchange.com/questions/30238/how-to-invert-a-digital-signal](https://electronics.stackexchange.com/questions/30238/how-to-invert-a-digital-signal)

> Usage is easy. First, set your desired delay but adjusting the on-board trim pot: all the way to the left is once-per-100ms an all the way to the right is once-every-2-hours. Then, connect VDD up to your 3-5V project power supply, and then your project's enable pin to the Enable pin. Finally, select a signal pin from your project to the Done pin. In your project's code or design, just make sure that it sets the Done pin high once it is completed with it's task. That's it!

Now that I'm looking at it -- these chips are intended to create a low-power state.  For a simple remote sensor application, this might be ideal.  For the satellite modem use-case, it's unclear. Perhaps I could use the pin state to pull EN low on the micro *and* the satellite modem?  

# External watchdog timer

Digikey very good [guide to  watchdog timers](https://www.digikey.com/en/articles/a-designers-guide-to-watchdog-timers)

Note in that writeup that the ADM6316 seems suited to 'pushing a reset button' -- has a "push-pull" driver -- digikey listing [here](https://www.digikey.com/en/products/filter//supervisors/691?s=N4IgTCBcDaILIEEAaA2A7AVgIwgLoF8g) and datasheet [here](https://www.analog.com/media/en/technical-documentation/data-sheets/ADM6316_6317_6318_6319_6320_6321_6322.pdf)

# Sat modem behavior

Looks like 100K is too 'weak' a pulldown to force the sat modem pin down.  10K seems to work.  


| [![](/img/ojofeliz/sat_update.png)](/img/ojofeliz/sat_update.png)|
|:--:|
| **Fig 1.** Using a 10K pull-down on the satellite "enable" pin.  Large double-pulse in current is due to satellite modem turning on when microcontroller pulls enable pin high.  When micro deep sleeps, it seems to 'let go' of the control pin; but 10K pull-down forces it to ground. Resultant sleep current with micro + sleeping sat modem seems to be around 2 mA.  Note that sleep current of sat modem without micro seemed to reach at least as low as 200 uA (perhaps would trend lower given more time). | 

Also: it seems as though there is an initial 'charge up' period before the satellite modem will turn on at all; so pulling up the EN pin on it appears to have no effect initially.

At 3.3V, a 10K resistor yields a 'leakage' current of .3 mA ... which is significant, but our current sleep current for the micro seems to be approx 4 mA anyway ...

Can find a more sophisticated way to pull up / down with additional circuitry.

# Quick thoughts on setup

Using a TL5110 would allow the system to sleep at very low current. It could power the micro; the satellite modem would be powered independently; the EN pin on the sat modem would be pulled own by default.  The micro could wake every X minutes.

However, the micro retains no memory when it's asleep (powered off, or deep sleep).  So it could only ever wake up and try to send a satellite message.  

It would need some way of storing some counter to see whether it should send a message or not when it wakes up. 

Unless 2 hours is okay as a start.

Checking the time via GPS doesn't work -- wouldn't know how much time had elapsed without some storage mechanism.

Does DS3231 have some general memory we could use?

Trouble: if something goes wrong in the 'counting' code, or the storage mechanism, then we might never conclude that we ought to send a message. 

Best is if the system can be turned on every X hours, do its thing, then turned off.

Maybe there's some hardware counter than can help.

Turn on every 2 hours. Every time it turns on, it makes the counter progress.  Read the counter on wakeup; if the counter has reached Y counts, then try satellite.

Waking up an arduino with the DS3231: [https://www.youtube.com/watch?v=-dW4XsBo3Mk](https://www.youtube.com/watch?v=-dW4XsBo3Mk)

Failsafe design for space: [https://www.mouser.com/applications/electronic-systems-space-require-fail-safe/](https://www.mouser.com/applications/electronic-systems-space-require-fail-safe/)

pros / cons of various memory approaches: [https://www.digikey.com/en/articles/the-fundamentals-of-embedded-memory](https://www.digikey.com/en/articles/the-fundamentals-of-embedded-memory)

# Proposal A

![](/img/ojofeliz/wakeup_scheme.png)

# Interfacing with the microSD card

[Adafruit guide to microSD and Circuitpython](https://learn.adafruit.com/micropython-hardware-sd-cards?view=all&gclid=CjwKCAjw4ZWkBhA4EiwAVJXwqTIw_ktRSa_ozdxaS8Tk8CNPWuvHmbTkwex7W76mLztDJs1VnvRz8BoCRxgQAvD_BwE)

 
