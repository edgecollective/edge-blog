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
