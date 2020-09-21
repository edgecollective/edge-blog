---
pageTitle: Quahog Debug
layout: layout.njk
date: 2020-08-22
updated: 2020-08-28
tags: notes 
image: img/notebook/quahog_debug/q_debug.png
blurb: Revising the Quahog ESP32 + LoRa circuit
---

## fixing the bootloader

[ESP32 boot mode selection](https://github.com/espressif/esptool/wiki/ESP32-Boot-Mode-Selection)

Upshot -- for [hog32a](https://github.com/edgecollective/hog32) version:
- get rid of R4 and C4
- place R1, C3, R2, R3, Q1, and Q2
- need to connect pin 2 to ground (or it can float; but currently it is used in i2c, and is pulled high with a resistor, so we need to connect it to ground)
- need to connect the 'DTR' pin on the CP2104 breakout to the DTR pin on the quahog

Once these are done, the board will enter the bootloader automatically.

## flashing using esptool

Looks like we need to convert the .elf file to a binary image ...

See the [guide to esptool](https://github.com/espressif/esptool)


> For esp32, elf2image produces a single output binary "image file". By default this has the same name as the .elf file, with a .bin extension. ie:

        esptool.py --chip esp32 elf2image my_esp32_app.elf


> In the above example, the output image file would be called my_esp32_app.bin.

Actually, checking just now -- platformio generates a 'bin' file directly, so no worries.

need to upload the partitions, too? See [this issue](https://github.com/espressif/arduino-esp32/issues/3409)

[arduino esp32 partitions scheme](https://robotzero.one/arduino-ide-partitions/)

Setting up [Heltec ESP32 on Arduino](https://www.youtube.com/watch?v=j-Nz14qaNIw)

## What is working

If I first erase the chip using:

    python esptool.py --chip esp32 erase_flash
    
And then use 'adafruit esp32 feather' in the board setup in arduino ide, it seems to just work.  Not sure if I needed simply to erase the flash beforehand.


## Button on Meshtastic

I was getting 'button press functionality' when running Meshtastic on the Quahog.  I needed to change the quahog Mestastic-device code so that the 'button' was no longer GPIO 0 (default), but GPIO 19 (other pins may also work for this).  This corresponds to 'release/latest/quahog_firmware_v3.bin' in Meshtastic-device-quahog on github.


## Rationale for Quahog

'Off-grid wifi gateway' ... is this useful? 

I guess if you want the Quahog up on a pole ... up to 100 feet away from the wifi gateway... then it can be powered by 12V ... so that might be useful in some circumstances ... 

