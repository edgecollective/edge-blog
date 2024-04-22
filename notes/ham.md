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
