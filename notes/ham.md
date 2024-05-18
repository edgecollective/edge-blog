---
pageTitle: Notes on Ham Radio
layout: layout.njk
date: Last Modified
updated: 2021-11-09
tags: notes 
image: /img/ham/ham.png
blurb: Notes on Ham Radio
---

---
2021-11-09 12:40:30

Notes on kits: [https://www.hamradiosecrets.com/ham-radio-kits.html](https://www.hamradiosecrets.com/ham-radio-kits.html)

## APRS

DORJI

[https://www.tindie.com/products/dorji_com/ham-amateur-radio-module-dra818v/](https://www.tindie.com/products/dorji_com/ham-amateur-radio-module-dra818v/)

[http://squirrelengineering.com/arduino/dra818v-aprs-144-390mhz/](http://squirrelengineering.com/arduino/dra818v-aprs-144-390mhz/)

[https://hamgear.wordpress.com/2015/02/03/make-your-own-transceiver-with-a-dorji-dra818u-or-dra818v/](https://hamgear.wordpress.com/2015/02/03/make-your-own-transceiver-with-a-dorji-dra818u-or-dra818v/)

[https://www.qrp-labs.com/](https://www.qrp-labs.com/)

[https://nescitech.org/ham-exam-contact-us/](https://nescitech.org/ham-exam-contact-us/)

QRP Labs device for $60: [https://hackaday.com/2021/12/08/four-band-digital-hf-sdr-transceiver-offers-high-performance-for-only-60/](https://hackaday.com/2021/12/08/four-band-digital-hf-sdr-transceiver-offers-high-performance-for-only-60/)

---

## APRS on micros

### Micromodem

Github repo for micromodem: [https://github.com/markqvist/MicroModem](https://github.com/markqvist/MicroModem)

Key diagram for circuit: [https://github.com/markqvist/MicroModem/blob/master/Documentation/Quickstart.pdf](https://github.com/markqvist/MicroModem/blob/master/Documentation/Quickstart.pdf)

### Mobilinkd Arduino KISS TNC

[http://www.mobilinkd.com/2014/09/11/arduino-kiss-tnc/](http://www.mobilinkd.com/2014/09/11/arduino-kiss-tnc/)

Uses the Sparkfun 3.5 mm jack breakout:

[http://www.mobilinkd.com/wp-content/uploads/2014/09/Breadboard-TNC_bb_2.png](http://www.mobilinkd.com/wp-content/uploads/2014/09/Breadboard-TNC_bb_2.png)


```
    Sleeve is ground.
    Ring2 is audio out (TX)
    Ring1 is PTT
    Tip is audio in (RX)
```

## Adding GPS

use Example3_GetPosition from UBLOX GNSS Sparkfun lib [https://github.com/sparkfun/SparkFun_u-blox_GNSS_Arduino_Library/archive/main.zip](https://github.com/sparkfun/SparkFun_u-blox_GNSS_Arduino_Library/archive/main.zip)

Hmm ... module requires 3V ...

might need to try arduino pro mini 3V if avail ... or 5V tolerant gps module
(adafruit's?)

[Micromodem user manual](https://unsigned.io/shop/wp-content/uploads/2018/04/MicroModem_Manual_v3-1.pdf)

# LibAPRS Tracker -- minified version of LibAPRS

[https://github.com/barisdinc/LibAPRS_Tracker](https://github.com/barisdinc/LibAPRS_Tracker)

# LibAPRS

[https://github.com/markqvist/LibAPRS](https://github.com/markqvist/LibAPRS)

# MicroAPRS

This is the code for handling APRS, allows for serial commands -- pin hardware might be fixed in firmware, not an issue

Expects to be run at 5V ... will need level shifters for ESP32, likely


# Sat Oct 21 04:30:32 PM EDT 2023

[https://oh2lak.blogspot.com/2017/06/experimenting-with-sa818-miniature-rf.html](https://oh2lak.blogspot.com/2017/06/experimenting-with-sa818-miniature-rf.html)

[https://www.youtube.com/@HB9BLA](https://www.youtube.com/@HB9BLA)


# Tue Feb 20 05:57:13 PM EST 2024

[https://www.kenwood.com/i/products/info/amateur/ts50s.html](https://www.kenwood.com/i/products/info/amateur/ts50s.html)

[https://www.radiomods.co.nz/kenwood/kenwoodts50.html](https://www.radiomods.co.nz/kenwood/kenwoodts50.html)

[https://www.reddit.com/r/amateurradio/comments/8oi0kr/new_ham_looking_at_used_kenwood_ts50_what_to_look/](https://www.reddit.com/r/amateurradio/comments/8oi0kr/new_ham_looking_at_used_kenwood_ts50_what_to_look/)

[Kenwood CAT interface](https://www.g4zlp.co.uk/unified/KenwoodCAT.shtml)

[ft-891](https://www.yaesu.com/indexVS.cfm?cmd=DisplayProducts&ProdCatID=102&encProdID=DF4DB262968932E999EAF928B5B6A1A7&DivisionID=65&isArchived=0)

<iframe width="560" height="315" src="https://www.youtube.com/embed/9C2qsosGok4?si=gOV13IuuQ3E-lg-N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

suggests we want an AT50 tuner

<iframe width="560" height="315" src="https://www.youtube.com/embed/OotTC4MKU3I?si=skzyzcO65GdTyRKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[AT50 tuner instruction manual](http://www.radiomanual.info/schemi/KENW_ACC/Kenwood_AT-50_user.pdf)

[Kenwood TS-50S instruction manual](https://www.hamanuals.com/MMans/mants50s.pdf)

Power supply is Kenwood PS-33:
- [https://www.universal-radio.com/CAtalog/hamps/ps33.html](https://www.universal-radio.com/CAtalog/hamps/ps33.html)
- [ps-33 user manual](http://www.radiomanual.info/schemi/KENW_ACC/Kenwood_PS-33_PS-53_user.pdf)

Possible compatibility? [plug on amazon](https://www.amazon.com/Superbat-Supply-Kenwood-Alinco-Mobile/dp/B0BVBGSLQV)

Wiring diagram for TS-50S [power cable](https://vk6ysf.com/dc_cable_hf_radio.htm)

[Replacement cable for TS-50S](https://www.ebay.com/itm/224032177137)  


# Mon Apr 15 09:46:55 PM EDT 2024

'what to do when the phones go down' [video](https://www.youtube.com/watch?v=Zob-kWl4xLw)


# Fri Apr 19 06:17:47 PM EDT 2024

## Getting started with JS8Call 

### receive-only

- web sdr / software-only [here](https://www.youtube.com/watch?v=SsuzTPHcgDY)

- off-grid basic receive with simple radio, unlicensed [here](https://www.youtube.com/watch?v=P9sWFryImDo)

- js8call training edition [here](https://www.youtube.com/watch?v=r25aIri8vkE)

  
# Fri Apr 19 08:38:04 PM EDT 2024

Virtual Audio Cable for linux [here](https://askubuntu.com/questions/633674/virtual-audio-cable-for-ubuntu)

Ham It Up adapter kit for sdr [here](https://www.amazon.com/NooElec-NESDR-Smart-HF-Bundle/dp/B0747PX3NZ/ref=pd_ci_mcx_pspc_dp_d_2_t_3?pd_rd_w=7PEUY&content-id=amzn1.sym.568f3b6b-5aad-4bfd-98ee-d827f03151e4&pf_rd_p=568f3b6b-5aad-4bfd-98ee-d827f03151e4&pf_rd_r=JNZK8NGGZ74ZBQ8JY8SX&pd_rd_wg=qamUn&pd_rd_r=a5f0cb41-c9b6-4850-9785-817e1dbaf5b9&pd_rd_i=B0747PX3NZ)

ham it up, by itself [here](https://www.amazon.com/Ham-Up-Plus-Upconverter-Enclosure/dp/B076CYK8XZ/ref=sr_1_3?crid=1G718VTE9PDE6&dib=eyJ2IjoiMSJ9.6EOIy7W7jlq7I_7mEzJKCCh8FxD6IXtX-7RskTiYiUN_CMZr4ZFo9yKoUoDR_-TwXtLkJr2Y96XDw55N25OoyAtFx3MmuKVtwDYgbtUOI4gcOqLANmEcYgMYj5fWuA0xZlPzGFf6e5951ylhJ5kedp2tiGOYowXQNAqp_XRPVb93RasijzKLl3uMRflByeBUh_RBMDgPneg7klFyh5sZyMNotQ1bKWwg5gmn1ohpUVydTyDVJVZcKXkIuv3qXy6zIplrkQhGzTvXEsJwzrML0ddJPxUKJEr6RvMDJkZ-ScM.Aolp82hZTzzT0Wjd3LSQJedCakNIiA2F8tuiWXPIFik&dib_tag=se&keywords=ham+it+up&qid=1713573766&s=electronics&sprefix=ham+it+up%2Celectronics%2C108&sr=1-3)

ham it up kit working well [here](https://www.amazon.com/NooElec-NESDR-Smart-HF-Bundle/dp/B0747PX3NZ/ref=sr_1_6?crid=1G718VTE9PDE6&dib=eyJ2IjoiMSJ9.6EOIy7W7jlq7I_7mEzJKCCh8FxD6IXtX-7RskTiYiUN_CMZr4ZFo9yKoUoDR_-TwXtLkJr2Y96XDw55N25OoyAtFx3MmuKVtwDYgbtUOI4gcOqLANmEcYgMYj5fWuA0xZlPzGFf6e5951ylhJ5kedp2tiGOYowXQNAqp_XRPVb93RasijzKLl3uMRflByeBUh_RBMDgPneg7klFyh5sZyMNotQ1bKWwg5gmn1ohpUVydTyDVJVZcKXkIuv3qXy6zIplrkQhGzTvXEsJwzrML0ddJPxUKJEr6RvMDJkZ-ScM.Aolp82hZTzzT0Wjd3LSQJedCakNIiA2F8tuiWXPIFik&dib_tag=se&keywords=ham+it+up&qid=1713573983&s=electronics&sprefix=ham+it+up%2Celectronics%2C108&sr=1-6)


> For those having trouble with the Ham It Up, this may be obvious to some, but frequencies below 14 MHz (20m HAM band) are best received at night. During the daytime you have a good chance of getting transmissions above 14 MHz. Also, I have tried using the Ham It Up in Windows 10 with SDR# and Kali Linux with SDR++. By far, the Kali setup works the best. I don't think you necessarily need the Kali Distro, that is just my setup. I will admit that the time investment needed to get this bundle operational is higher but if you do the research and don't give up the payoff is great.

> The Ham It Up is a neat unit, but is genuinely hard to get started with due to wholly insufficient documentation. I was ready to write it off as junk before I finally figured out its antenna needs. Here is what you need to know from my hours of frustration:
- Offset is 125MHz, so a 25MHz signal will be upconverted to 150MHz
- It has a upconvert range of 100KHz to 60MHz, good for AM and shortwave bands. US FM broadcasting can't be used as a passthrough/upconvert test to get started as the frequency is too high.
- It doesn't work with any of the included antennas, or any commercial antennas I tried. I was only able to achieve acceptable reception with the balun, 100' of wire as an antenna strung outside in the trees, and a good ground. Think crystal radio when setting up the antenna for the upconverter.
- Once the wire was strung outdoors I was able to pick up commercial AM broadcasting, some HAM chatter in the 40 meter band, and shortwave stations in the 11MHz range, and acceptable CB reception.
- Documentation for this is even worse than for the NESDR. Be prepared to be frustrated until you figure it out.

[FT8 shortwave listening](https://www.youtube.com/watch?app=desktop&v=ietRacJQWBg)

[Tecsun PL880 shortwave radio, $169](https://www.amazon.com/Tecsun-PL880-Conversion-Shortwave-Reception/dp/B00GJ51NVA)

[CC Skywave SSB 2, $200](https://ccrane.com/cc-skywave-ssb-2-with-am-fm-sw-wx-and-aviation-bands)

-- [on amazon](https://www.amazon.com/Shortwave-Scannable-Aviation-Operated-Portable/dp/B0CBW768RF)

[SIHUADON R108 -- inexpensive knock-off of Skywave, $50](https://www.amazon.com/SIHUADON-Portable-Operated-Headphone-RADIWOW/dp/B08XVVCP9L)

[off-grid js8call setup with digital-only radio](https://www.youtube.com/watch?v=WmqTFHTnrA8)

[DR4020 digital QRP radio](https://www.venus-itech.com/product/dr4020-digital-qrp-radio/)

So -- better to use an sdr dongle, or a full short wave radio?


# Sun Apr 21 03:09:31 PM EDT 2024

js8call [here](http://files.js8call.com/latest.html)

T-Deck pinmap [here](https://m.media-amazon.com/images/S/aplus-media-library-service-media/84895610-5940-49e3-9767-08475fde6ae4.__CR0,0,970,600_PT0_SX970_V1___.png)

fdisk erase partitions [tutorial](https://www.linuxtechi.com/how-to-delete-partition-in-linux/)

pi + baofeng aprs digipeater [here](https://www.youtube.com/watch?v=gtvtWL3_prA)


# Sun Apr 21 11:20:13 PM EDT 2024

T-beam + external keyboard tutorial [here](https://www.mattcurry.com/2023/01/28/t-beam-communicator/) and thread [here](https://www.mattcurry.com/2023/01/28/t-beam-communicator/)

Using the 'canned message' meshtastic feature [here](https://meshtastic.org/docs/configuration/module/canned-message/)

and the CardKB device described [here](https://github.com/m5stack/m5-docs/blob/master/docs/en/unit/cardkb.md)

programming the CardKB [here](https://github.com/jon7sky/CardKB_UART)

documentation for CardKB i2c code [here](https://docs.m5stack.com/en/unit/cardkb)

electronoobs keyboard [here](https://electronoobs.com/eng_arduino_tut103.php) -- this is the tutorial to try

antenna upgrades for meshtastic devices [here](https://www.youtube.com/watch?v=Y7V54jMnmOg)

arduino as i2c slave [here](https://forum.arduino.cc/t/arduino-as-i2c-slave/38507/3) and [here](https://deepbluembedded.com/arduino-i2c-slave/)

[using cardkb in a hack way with python](https://forum.clockworkpi.com/t/using-cardkb-from-m5stack-without-reprogramming-it/6106)

[suggestion of mouse buttons for key buttons](https://hackaday.io/project/176738-esp65-pocket-computer-kim-iapple-1esp32/log/188165-figuring-out-how-to-make-a-good-mini-keyboard)

connecting cardkb to raspberry pi [here](https://github.com/ian-antking/cardkb)


# Mon Apr 22 05:29:46 PM EDT 2024

Some example code for reading from a cardkb [here](https://github.com/Jonas-Salcedo/Mini-Computer/blob/master/Ada_ATMega328_LCD_Modified_For_CardKB.ino)

Creating an arduino i2c slave [here](https://deepbluembedded.com/arduino-i2c-slave/) -- see example 2. Arduino I2C Slave Transmitter Example

```
/*
* LAB Name: Arduino I2C Slave(Tx)
* Author: Khaled Magdy
* For More Info Visit: www.DeepBlueMbedded.com
*/
#include <Wire.h>
 
#define BTN0_PIN 4
#define BTN1_PIN 5
#define BTN2_PIN 6
#define BTN3_PIN 7
 
byte TxByte = 0;
 
void I2C_TxHandler(void)
{
  Wire.write(TxByte);
}
 
void setup() {
  pinMode(BTN0_PIN, INPUT_PULLUP);
  pinMode(BTN1_PIN, INPUT_PULLUP);
  pinMode(BTN2_PIN, INPUT_PULLUP);
  pinMode(BTN3_PIN, INPUT_PULLUP);
  Wire.begin(0x55); // Initialize I2C (Slave Mode: address=0x55 )
  Wire.onRequest(I2C_TxHandler);
}
 
void loop() {
  byte BtnsData = 0;
  BtnsData |= digitalRead(BTN0_PIN) << 0;
  BtnsData |= digitalRead(BTN1_PIN) << 1;
  BtnsData |= digitalRead(BTN2_PIN) << 2;
  BtnsData |= digitalRead(BTN3_PIN) << 3;
  TxByte = BtnsData;
  delay(10);
}
```


# Sat Apr 27 06:30:16 PM EDT 2024

Ham it up explanatory video [here](https://www.youtube.com/watch?v=3n06G-2MMMA)

40 meter dipole antenna [here](https://dcasler.com/ham-radio-40-meter-dipole-your-first-antenna/)

Creating a 40 meter antenna [here](https://www.youtube.com/watch?v=aUe5v0hOT48)

How to make a 40 meter dipole antenna [here](https://www.youtube.com/watch?v=0P_bpvuqOKs)

making a 20 m and 40 m dipole antenna [here](https://www.youtube.com/watch?v=yRnlJxMWzF4)

homemade balun -- SO2-39

definition of a balun [here](https://en.wikipedia.org/wiki/Balun#:~:text=A%20balun%20%2F%CB%88b%C3%A6,impedance%20arrangement%20of%20either%20line.)

complete off-grid HF ham pack [here](https://www.youtube.com/watch?v=eA7pvsTT3Rk)

js8call mesh experiment [here](https://oh8stn.org/blog/2019/12/04/less-is-more-js8call-40m-mesh-network/)

simplest dedicated js8call rig discussion [here](https://groups.io/g/KM4ACK-Pi/topic/simplest_dedicated_js8call/95728303?p=,,,20,0,0,0::recentpostdate/sticky,,,20,2,20,95728303,previd%3D1672080329787548227,nextid%3D1670872520231848384&previd=1672080329787548227&nextid=1670872520231848384)


# Sun May  5 04:16:25 PM EDT 2024

heltec gps forum topic (including pins) [here](https://meshtastic.discourse.group/t/gps-to-heltec-lora/5547)

flashing firmware on esp32 devices [here](https://meshtastic.org/docs/getting-started/flashing-firmware/esp32/)

- cli script method [here](https://meshtastic.org/docs/getting-started/flashing-firmware/esp32/cli-script/)

- configuring device via CLI [here](https://meshtastic.org/docs/getting-started/initial-config/)

- canned message [here](https://meshtastic.org/docs/configuration/module/canned-message/)

- proper i2c pins for heltec v3 [here](https://meshtastic.discourse.group/t/lora32-v3-card-kb-canned-messaging/7978/3)

- heltec pinout [here](

- cardkb description [here](https://docs.m5stack.com/en/unit/cardkb)

- black / gnd, red / 3v, yellow sda, white scl 

- 41 is sda, 42 is scl on heltec v3

- yellow to 41, white to 42


# Sun May  5 06:53:55 PM EDT 2024

meshtastic message history, thread [here](https://meshtastic.discourse.group/t/canned-messaging-see-list-of-recent-messages/8060)

github most recent messages issue [here](https://github.com/meshtastic/firmware/issues/2590)

semi-relevant discussion [here](https://meshtastic.discourse.group/t/t-deck-from-lilygo/7679/80)

meshcom -- mesh for ham radio operators, compatible with aprs [here](https://www.youtube.com/watch?v=aWtqm7lbYoo)


# Fri May 10 02:56:05 PM EDT 2024

Meshtastic device configuration [here](https://meshtastic.org/docs/configuration/radio/device/)

```
#define CARDKB_ADDR 0x5F  //Define the I2C address of CardKB.
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
}
void loop()
{
  Wire.requestFrom(CARDKB_ADDR, 1); //Request 1 byte from the slave device.
  while (Wire.available()) {
    char c = Wire.read(); 
    if (c != 0)
    {
      if (c == '\x0D') {
        Serial.println();
      }
      else {
      Serial.print(c);
    }
      //Serial.print(c,HEX);
    }
  }
}
```

---

```
/*
Example of processing incoming serial data without blocking.

Author:   Nick Gammon
Date:     13 November 2011. 
Modified: 31 August 2013.

Released for public use.
*/

#define CARDKB_ADDR 0x5F  //Define the I2C address of CardKB.
#include <Wire.h>

// how much serial data we expect before a newline
const unsigned int MAX_INPUTTY = 50;

void setup ()
  {
      Wire.begin();
  Serial.begin (115200);
  Serial1.begin(38400);
  } // end of setup

// here to process incoming serial data after a terminator received
void process_input_data (const char * data)
  {
  // for now just display it
  // (but you could compare it to some value, convert to an integer, etc.)
  Serial.println(data);
  }  // end of process_data

void process_output_data (const char * data)
  {
  // for now just display it
  // (but you could compare it to some value, convert to an integer, etc.)
  Serial1.println(data);
  }  // end of process_data
  
void processIncomingByte (const byte inByte)
  {
  static char input_line [MAX_INPUTTY];
  static unsigned int input_pos = 0;

  switch (inByte)
    {

    case '\n':   // end of text
      input_line [input_pos] = 0;  // terminating null byte
      
      // terminator reached! process input_line here ...
      process_input_data (input_line);
      
      // reset buffer for next time
      input_pos = 0;  
      break;

    case '\r':   // discard carriage return
      break;

    default:
      // keep adding if not full ... allow for terminating null byte
      if (input_pos < (MAX_INPUTTY - 1))
        input_line [input_pos++] = inByte;
        //Serial.print(inByte);
      break;

    }  // end of switch
   
  } // end of processIncomingByte  



  //void processOutgoingByte (const byte outByte)
   void processOutgoingByte (char outByte)
  {
  static char output_line [MAX_INPUTTY];
  static unsigned int output_pos = 0;

  switch (outByte)
    {

    case 0:
      break;


    case '\x0D':   // end of text
      output_line [output_pos] = 0;  // terminating null byte
      Serial.println();
      // terminator reached! process input_line here ...
      process_output_data (output_line);
      
      // reset buffer for next time
      output_pos = 0;  
      break;

    //case '\r':   // discard carriage return
    //break;

    default:
      // keep adding if not full ... allow for terminating null byte
      //Serial.print(outByte);
      if (output_pos < (MAX_INPUTTY - 1))
        output_line [output_pos++] = outByte;
        Serial.print(outByte);
      break;

    }  // end of switch
   
  } // end of processIncomingByte  


void loop()
  {
  // if serial data available, process it
  while (Serial1.available () > 0)
    processIncomingByte (Serial1.read ());
  
  Wire.requestFrom(CARDKB_ADDR, 1); //Request 1 byte from the slave device.
   while (Wire.available())
    processOutgoingByte (Wire.read());
  
  // do other stuff here like testing digital input (button presses) ...

  }  // end of loop
```

meshtastic_to_serial_cardkb


# Sat May 11 04:42:13 PM EDT 2024

circuitpython module for waveshare e-paper [here](https://github.com/gpshead/epaper-circuitpython)

arduino libraries for waveshare [here](https://github.com/soonuse/epd-library-arduino)


# Sat May 11 07:13:12 PM EDT 2024

using cardkb in circuitpython [here](https://scruss.com/blog/2021/06/02/cardkb-mini-keyboard-with-micropython/)

cardkb layout [here](https://docs.m5stack.com/en/hat/hat-cardkb)

better cardkb layout [here](https://docs.m5stack.com/en/unit/cardkb)

![](/img/ham/cardkb_02.webp)

asking for enclosure with tbeam and cardkb [here](https://www.reddit.com/r/meshtastic/comments/1c95iqg/does_anyone_have_enclosure_for_tbeam_cardkb/)

up: 0xB5
down: 0xB6
left: 0xB4
right: 0xB7

wrapping text in circuitpython on a display [here](https://forums.adafruit.com/viewtopic.php?p=873407)


# Sun May 12 09:07:23 PM EDT 2024

RAK4631 documentation for module [here](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Overview/#product-description

RAK19007 is the base I bought. RAK19007 documentation [here](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19007/Overview/#product-description)

RAK19007 product guide [here](https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore)

- description of headers is [here](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19007/Datasheet/#hardware)

custom nodes [here](https://github.com/meshtastic/firmware/issues/2698)


# Mon May 13 06:26:40 PM EDT 2024

nrf52 dongle prototyping [here](https://meshtastic.discourse.group/t/wip-diy-nrf82540-nicerf-868-4-2-inch-epaper/5552)

nrf52 variant [here](https://github.com/meshtastic/firmware/issues/3628)

another nrf52 variant board [here](https://meshtastic.discourse.group/t/new-1w-diy-variant-xiao-nrf52840-ebyte-e22-900m30s/7904)

board with adafruit feather express [here](https://github.com/meshtastic/firmware/issues/3628)

rak IO module on digikey [here](https://www.digikey.com/en/products/detail/rakwireless-technology-limited/RAK13002-X-WB-N/22536551)

rak19007 pinout description [here](https://meshtastic.org/docs/hardware/devices/rak/core-module/)


# Mon May 13 10:01:22 PM EDT 2024

using the cli to talk / hear nodes [here](https://meshtastic.discourse.group/t/get-last-message-using-meshtastic-python-api-feature-request/2876/26)

rxd 7
txd 47
baud 38400
mode textmsg

in arduino ide, use 'new line'

---

waveshare:

guide for 2.13 e ink [here](https://www.waveshare.com/wiki/2.13inch_e-Paper_HAT_Manual#Working_With_Arduino)

same on itsy m0, but:
rst d7
busy d12

arduino library for waveshare [here](https://github.com/soonuse/epd-library-arduino)

getting serial data on arduino without blocking [here](https://gammon.com.au/serial)

circuitpython tips and tricks [here](https://github.com/todbot/circuitpython-tricks)

meshtastic-to-serial is basic working version

suggestion on reading bytes from keyboard [here](https://forum.arduino.cc/t/read-a-character-string-from-i2c-keyboard/1011365/12)



# Tue May 14 03:02:50 PM EDT 2024

rtc power switches:
- [https://electronics.stackexchange.com/questions/396748/rtc-power-switch-for-raspberry-pi](https://electronics.stackexchange.com/questions/396748/rtc-power-switch-for-raspberry-pi)
- [sweech](https://hackaday.io/project/170925-sweech)
- [https://forum.dronebotworkshop.com/components/external-power-on-off-control-circuit/paged/3/](https://forum.dronebotworkshop.com/components/external-power-on-off-control-circuit/paged/3/)
- [https://hackaday.com/2019/06/24/ditch-the-switch-a-soft-latching-circuit-roundup/](https://hackaday.com/2019/06/24/ditch-the-switch-a-soft-latching-circuit-roundup/)
- [https://sites.google.com/site/wayneholder/time-based-and-low-power-techniques-for-arduino](https://sites.google.com/site/wayneholder/time-based-and-low-power-techniques-for-arduino)
- [https://randomnerdtutorials.com/latching-power-switch-circuit-auto-power-off-circuit-esp32-esp8266-arduino/](https://randomnerdtutorials.com/latching-power-switch-circuit-auto-power-off-circuit-esp32-esp8266-arduino/)
- [https://www.eevblog.com/forum/beginners/switching-12v-power-from-ds3231-open-drain-intsqw-pin/](https://www.eevblog.com/forum/beginners/switching-12v-power-from-ds3231-open-drain-intsqw-pin/) -- this might be where to begin!
- another simple explanation here: [https://forum.arduino.cc/t/power-on-off-with-ds323rtc/308686/6](https://forum.arduino.cc/t/power-on-off-with-ds323rtc/308686/6)
- need a p-mos for a ds3231 circuit [https://forum.arduino.cc/t/using-ds3231-rtc-alarm-pin-to-power-mosfet/219377](https://forum.arduino.cc/t/using-ds3231-rtc-alarm-pin-to-power-mosfet/219377)

