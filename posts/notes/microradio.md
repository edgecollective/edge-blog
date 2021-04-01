---
pageTitle: Radio Experiments
layout: layout.njk
date: 2021-02-18
updated: 2021-02-18
tags: notes 
image: /img/placeholder.png
blurb: Notes on experiments with RNode / Signal / APRS
---

---
2021-02-18 16:44:38

```
https://github.com/AsamK/signal-cli/wiki
signal-cli -u +18572850070 send -m "hallo from the cli again!" +17817756406
signal-cli -u +18572850070 receive
```

## atmega1284 

Using the ATmega1284 with the Arduino IDE: [http://www.technoblogy.com/show?19OV](http://www.technoblogy.com/show?19OV)

Mighty core -- [https://github.com/maniacbug/mighty-1284p](https://github.com/maniacbug/mighty-1284p)



---
2021-02-18 18:46:08

minimal mqtt -- [https://hackaday.com/2021/02/17/minimal-mqtt-with-micropython/](https://hackaday.com/2021/02/17/minimal-mqtt-with-micropython/)

life at bell labsl -- [https://hackaday.com/2021/02/17/james-west-began-40-years-at-bell-labs-with-world-changing-microphone-tech/](https://hackaday.com/2021/02/17/james-west-began-40-years-at-bell-labs-with-world-changing-microphone-tech/)

---
2021-02-18 21:08:49

https://github.com/adafruit/Adafruit-Prototyping-Pi-Plate-PCB

---
2021-02-19 12:11:26

## Signal

flexible e-ink 

[https://www.adafruit.com/product/4262?gclid=Cj0KCQiA4L2BBhCvARIsAO0SBdYCJRlLyAq1JfBmGYGTNmRsiYjVidXXcUxDisUhWo3SYs3PJMGjKjcaAkcEEALw_wcB]

signal-cli rest api [here](https://pypi.org/project/signal-cli-rest-api/)

## Node serialport

[https://www.npmjs.com/package/serialport](https://www.npmjs.com/package/serialport)

[https://serialport.io/docs/guide-usage](https://serialport.io/docs/guide-usage)

[https://stackabuse.com/executing-shell-commands-with-node-js/](https://stackabuse.com/executing-shell-commands-with-node-js/)

## Arduino serial

Serial input basics: [https://forum.arduino.cc/index.php?topic=288234.0](https://forum.arduino.cc/index.php?topic=288234.0)

## Stuck serialports in linux

[https://www.question-defense.com/2009/09/09/how-to-reset-a-serial-port-in-linux-ttys0-ttyam0-etc](https://www.question-defense.com/2009/09/09/how-to-reset-a-serial-port-in-linux-ttys0-ttyam0-etc)

---
2021-02-20 09:25:50

## converting unix timestamp in javascript

```
let unix_timestamp = 1549312452
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);
```
---
2021-02-27 10:04:55

Thoughts on radio setups ...

Thinking about establishing communication networks for off-grid locations ... 

## Cellular

Cellular coverage is spotty. If it's available, then it's a good system; it's what people are used to; but it can also be fragile to power outages.

---
2021-02-27 14:22:04

ideas: find the nodejs way of interpreting APRS

make a system that can get some standard message formats from internet / local lora, and combine with APRS, and show

make a 'feedmap' for belfast that shows all the gps feeds on one map

---
2021-02-27 14:26:27

imagery over lora -- 
http://ssdv.habhub.org/KW03PL

---
2021-02-27 15:00:48

slow scan digital imagery: [http://tt7hab.blogspot.com/2018/04/the-lora-ssdv.html](http://tt7hab.blogspot.com/2018/04/the-lora-ssdv.html)

---
2021-03-05 12:57:54

Burned bootloader! 

General instructions -- [http://www.technoblogy.com/show?19OV](http://www.technoblogy.com/show?19OV)

BUT NOTE:

Forum post suggesting cap between RESET and GND on UNO when burning: [https://forum.arduino.cc/index.php?topic=347441.0](https://forum.arduino.cc/index.php?topic=347441.0)

![](/img/microradio/atmega1284_bootloader.png)

---
2021-03-05 17:31:06

maybe this is a better mightycore to use ... [https://github.com/MCUdude/MightyCore](https://github.com/MCUdude/MightyCore)

YES indeed.  looks like it's working ...

---
2021-03-06 13:58:58

Mark's code ported to 328p: [https://freesoft.dev/program/136302037](https://freesoft.dev/program/136302037)

This looks good:

lora aprs [here](https://github.com/josefmtd/lora-aprs)

more details [here](https://github.com/josefmtd/lora-aprs/tree/master/lora-kiss)

reverse tunnel ssh [here](https://github.com/josefmtd/reverse-tunnel)

kiss aprs [here](https://github.com/josefmtd/kiss-aprs)

---

this looks even more directly useful for kiss: [https://github.com/josefmtd/arduino-kiss](https://github.com/josefmtd/arduino-kiss)

[https://josefmtd.com/](https://josefmtd.com/)

arduino apros tracker [here](https://create.arduino.cc/projecthub/jweers1/arduino-aprs-tracker-wilderness-location-tracking-a50607)

more by that fellow [here](https://github.com/jweers1?tab=repositories)

----
2021-03-06 14:17:51

ahhh, so

[https://github.com/jweers1/Aprs-Tracker/tree/master/Arduino/libraries/LibAPRS](https://github.com/jweers1/Aprs-Tracker/tree/master/Arduino/libraries/LibAPRS)  is the APRS library developed by the micromodem fellow;

and [this repo](https://github.com/jweers1/Aprs-Tracker) pulls out particular functions from that lib and uses them in a simple manner

original library is here: [https://github.com/markqvist/LibAPRS](https://github.com/markqvist/LibAPRS)

manual here: [https://github.com/markqvist/LibAPRS/blob/master/extras/MicroModem_Manual_v3.pdf](https://github.com/markqvist/LibAPRS/blob/master/extras/MicroModem_Manual_v3.pdf)

Much more extensive version of Arduino APRS here: [https://github.com/handiko/Arduino-APRS](https://github.com/handiko/Arduino-APRS)

## One to replicate

[https://github.com/handiko/Arduino-APRS](https://github.com/handiko/Arduino-APRS)

Gnu radio test for APRS here: [https://github.com/handiko/gr-APRS](https://github.com/handiko/gr-APRS)

Walkie talkie module [http://www.dorji.com/docs/data/DRA818V.pdf](http://www.dorji.com/docs/data/DRA818V.pdf)

light aprs tracker [https://www.qrp-labs.com/lightaprs.html](https://www.qrp-labs.com/lightaprs.html)

[https://github.com/lightaprs/LightAPRS-1.0](https://github.com/lightaprs/LightAPRS-1.0)

---
2021-03-06 14:38:50

DIY walkie talkie [https://www.radiojitter.com/walkie-talkie-arduino-shield/](https://www.radiojitter.com/walkie-talkie-arduino-shield/)

generate aprs via arduino [https://hamprojects.wordpress.com/2015/06/29/vhf-beacon-and-aprs-tracker-english-version/](https://hamprojects.wordpress.com/2015/06/29/vhf-beacon-and-aprs-tracker-english-version/)


WSPR tracker
[https://git.ok1kvk.cz/RAJlab/rajx-v5.0/](https://git.ok1kvk.cz/RAJlab/rajx-v5.0/)

more references here: [https://swharden.com/software/FSKview/wspr/](https://swharden.com/software/FSKview/wspr/)

WSPR protocl [https://www.nutsvolts.com/magazine/article/january2012_Steber](https://www.nutsvolts.com/magazine/article/january2012_Steber)

Seems like WSPR is optimized for longer-range, lower-power ... forward error correction.  If one has ham license, is it permissible to transmit longer messages (not just location)?

[https://www.rfzero.net/](https://www.rfzero.net/)

minimal wspr transmit -- looks like a great place to start: [http://blog.marxy.org/2018/12/minimal-wspr-transmit-with-arduino-and.html](http://blog.marxy.org/2018/12/minimal-wspr-transmit-with-arduino-and.html)

another arduino wspr beacon project [https://hamprojects.wordpress.com/2019/06/02/wspr-beacon/](https://hamprojects.wordpress.com/2019/06/02/wspr-beacon/)

similar project [http://people.physics.anu.edu.au/~dxt103/472/wspr_tx/](http://people.physics.anu.edu.au/~dxt103/472/wspr_tx/)

wspr message types: [https://dxplorer.net/wspr/msgtypes.html](https://dxplorer.net/wspr/msgtypes.html)

using aprs while backpacking [https://mthikes.com/backpacking-aprs/](https://mthikes.com/backpacking-aprs/)

more info on aprs [https://www.jpole-antenna.com/2018/09/17/introduction-to-aprs-the-automated-packet-reporting-system/](https://www.jpole-antenna.com/2018/09/17/introduction-to-aprs-the-automated-packet-reporting-system/)

messaging via aprs [http://www.aprs.org/aprs-messaging.html](http://www.aprs.org/aprs-messaging.html)

---
2021-03-07 17:29:26

ism band clock here: [https://www.silabs.com/documents/public/data-sheets/Si4421.pdf](https://www.silabs.com/documents/public/data-sheets/Si4421.pdf)

---
2021-03-07 17:33:36

RFM95 FSK here: [https://teknokoodiradio.vuodatus.net/lue/2017/06/semtech-sx1278-fsk-packet-mode-decoding-with-arduino](https://teknokoodiradio.vuodatus.net/lue/2017/06/semtech-sx1278-fsk-packet-mode-decoding-with-arduino)

jgromes radiolib [https://github.com/jgromes/RadioLib](https://github.com/jgromes/RadioLib) --- wow!

---

micro keypad [https://hackaday.com/2019/09/03/a-pocket-qwerty-for-arduino-and-more/](https://hackaday.com/2019/09/03/a-pocket-qwerty-for-arduino-and-more/)

nice arduino keyboard link [https://hackaday.io/project/158454-mini-piqwerty-usb-keyboard](https://hackaday.io/project/158454-mini-piqwerty-usb-keyboard)

another nice tutorial link [https://create.arduino.cc/projecthub/cameroncoward/64-key-prototyping-keyboard-matrix-for-arduino-4c9531](https://create.arduino.cc/projecthub/cameroncoward/64-key-prototyping-keyboard-matrix-for-arduino-4c9531)

---
2021-03-14 11:05:45

libaprs here: https://unsigned.io/projects/libaprs/

https://github.com/markqvist/LibAPRS

microaprs -- https://unsigned.io/category/microaprs/

standalone digipeater for micromodem: https://unsigned.io/digipeater-firmware/

https://github.com/markqvist/MicroDigi

http://extradio.sourceforge.net/extdigi.html

https://www.george-smart.co.uk/arduino/arduino_tnc/

https://www.vk3dan.ninja/2017/08/03/homebrew-aprs-arduino-uno-kiss-tnc/

and then ultimately, this: https://github.com/handiko/Arduino-APRS

https://www.instructables.com/Solar-Powered-APRS-Digipeater-for-Amateur-Radio/

lightaprs -- https://github.com/lightaprs/LightAPRS-1.0

nice thesis on all-in-one aprs tracker -- https://digitalcommons.calpoly.edu/cgi/viewcontent.cgi?referer=https://www.google.com/&httpsredir=1&article=1156&context=eesp

trackuino https://github.com/la3pna/trackuino-tracker
 
http://dangerousprototypes.com/blog/2018/05/22/si5351-vfo-project/


homebrew sdr -- https://swling.com/blog/2020/02/a-compact-homebrew-si5351-based-sdr/

https://swling.com/blog/2020/02/a-compact-homebrew-si5351-based-sdr/

https://circuitsalad.com/2020/01/06/compact-si5351-based-sdr/

https://electric-canary.com/fv1start.html

https://www.youtube.com/watch?v=V99YUq4r6Y8

replicate this! https://www.youtube.com/watch?v=V99YUq4r6Y8

that video allows for *receiving* aprs packets!

https://hamgear.wordpress.com/2015/02/03/make-your-own-transceiver-with-a-dorji-dra818u-or-dra818v/

this is the project to replicate! http://www.kh-gps.de/dra.htm

https://www.digikey.com/en/maker/blogs/2019/how-to-wirelessly-transmit-data-on-arduino

https://www.radiojitter.com/walkie-talkie-arduino-shield/

https://www.hamvoip.org/hamradio/818_transceiver_module/

sa818v -- https://www.youtube.com/watch?v=gDYYR8VvHMI

https://github.com/darkbyte-ru/SA818

diy ham radio -- https://www.youtube.com/watch?v=WrztebNYmOA

https://www.youtube.com/watch?v=XIwYHRFHXjk -- rda1846

this is the one to focus on: https://www.youtube.com/watch?v=V99YUq4r6Y8&t=10s

available unlicensed bands -- https://predictabledesigns.com/most-important-decision-when-creating-wireless-product/

https://lemosint.com/way-down-low-27mhz-an-unexpectedly-useful-radio-control-band-allocation/

also this: https://swling.com/blog/2020/02/a-compact-homebrew-si5351-based-sdr/

https://aa7ee.wordpress.com/2018/05/11/yup-its-another-si5351-vfo/

https://hackaday.io/project/171475-diy-sw-mw-sdr-radio-with-esp32-and-si5351

https://create.arduino.cc/projecthub/pu2clr/shortwave-arduino-transmiter-with-si5351-and-arduino-421602

https://hackaday.com/2015/09/13/arduino-masters-ham-radio-digital-mode/

https://www.qsl.net/zl1bpu/MFSK/FSQweb.htm

https://www.rtl-sdr.com/cyberspectrum-melbourne-building-a-cheap-fsq-transceiver-with-arduino-raspberry-pi-and-rtl-sdr/

https://hackaday.io/project/21007-2m-fsq-beacon

simple fsq beacon https://gist.github.com/NT7S/f22db15865f485c51139

https://nt7s.com/2020/06/empyrean-campaign-is-live/

https://rexburghams.org/assets/FastSimpleQSO_2015-09-02.pdf

https://www.qsl.net/zl1bpu/MFSK/FSQweb.htm

https://hackaday.com/tag/fsq/

https://www.rtl-sdr.com/transmitting-fm-am-ssb-sstv-and-fsq-with-just-a-raspberry-pi/

https://www.youtube.com/watch?v=v6B_womc6j8 -- fsq a new digital chat mode

https://oh8stn.org/blog/2017/12/22/fsq/

http://www.w1hkj.com/beginners.html

https://www.hamradioandvision.com/installing-fldigi-for-linux

https://km4nmp.com/2020/01/11/installing-fldigi-on-the-raspberry-pi/

http://www.w1hkj.com/files/fldigi/fldigi-help.pdf

http://appnotes.etherkit.com/2015/09/arduino-fsq-beacon-on-the-si5351a-breakout-board/?print=pdf

https://www.youtube.com/watch?v=IfwCT3GyNac -- fsq

https://oh8stn.org/blog/2017/09/11/hamradio360-fsq/

https://www.kb6nu.com/try-fsq-for-fast-simple-qsos/

https://www.sotabeams.co.uk/blog/fsq-data-system-tested/

https://www.youtube.com/watch?v=2xdaYg7X3I4


decoding digital modes https://cupano.com/index.html%3Fp=558.html

https://qrznow.com/fsqcall-new-digital-mode/

https://www.qsotoday.com/podcasts/zl1bpu

https://hwcdn.libsyn.com/p/f/9/f/f9f1e3c252ba35ee/Episode_071_Murray_Greenman_ZL1BPU_Final.mp3?c_id=10479912&cs_id=10479912&expiration=1615255344&hwt=97d676bfab1bb513997ad660d0153860

https://www.qsl.net/zl1bpu/MFSK/Index.htm

psk modem -- http://www.kk5jy.net/psk-modem-v1/

https://hackaday.com/2017/03/24/shut-up-and-say-something-amateur-radio-digital-modes/#more-245950

https://www.youtube.com/watch?v=7vH-dm-45WU -- review of ham radio modes

ft-8 sounds like weird siren songs

https://forums.qrz.com/index.php?threads/goodbye-ft8-hello-olivia-the-magic-digital-mode-for-hf.585617/

http://js8call.com/

js8call -- https://www.youtube.com/watch?v=pipjA4ZsqU8

using js8call -- https://www.youtube.com/watch?v=pipjA4ZsqU8

js8call relays and messaging -- https://www.youtube.com/watch?v=vka7H7ks-VM

rf zero board! -- https://www.rfzero.net/

rf zero schematic - https://www.rfzero.net/downloads/rfzero_schematic_v12.pdf

interesting here: https://www.rfzero.net/downloads/rfzero_schematic_v12.pdf

http://utah-dcc.org/2020/KK7L-UDCC2020.pdf

https://miscdotgeek.com/august-2020-update-camping-knives-trike-truck-and-js8call/

https://groups.io/g/js8call/message/9852

https://groups.io/g/js8call/topic/js8call_mobile_aprs/78293418?p=,,,20,0,0,0::recentpostdate%2Fsticky,,,20,2,0,78293418

installing js8call - https://www.youtube.com/watch?v=SdwR7yAVlZk&list=PL1QTYT4Qo9caJ2MaRG3D015f6aVK_D3ua

js8call mobile + aprs -- https://groups.io/g/js8call/topic/js8call_mobile_aprs/78293418?p=,,,20,0,0,0::recentpostdate%2Fsticky,,,20,2,0,78293418

js8call baofeng -- https://www.youtube.com/watch?v=Y_teUXOdBS0

aprs position off-grid with js8call https://www.youtube.com/watch?v=dAiXsSMIkKY

watching aprs activities around you 

http://www.knology.net/~gmarcus/Si5351/Si5351A_WSPR_XCVR.pdf

https://antrak.org.tr/blog/projeler/poor-mans-hf-ssb-receiver-lets-build-it/

https://www.qrp-labs.com/synth/synthnoise.html

js8call instead of aprs -- https://groups.io/g/js8call/message/9852

gps gridsquare -- https://www.youtube.com/watch?v=DpzC7g-gY44

fv1 based sdr -- https://circuitsalad.com/2020/11/13/the-fv-1-based-sdr-revisited/

http://www.knology.net/~gmarcus/multifunction_files/w3pm_multifunction_project_2.pdf

-- this project does uses the si part to generate a wspr radio -- http://www.knology.net/~gmarcus/multifunction_files/w3pm_multifunction_project_2.pdf

-- http://wb6cxc.com/wp-content/uploads/2019/04/Presentation-1-0.pdf

short wave transmitter using si chip and arduino -- https://create.arduino.cc/projecthub/pu2clr/shortwave-arduino-transmiter-with-si5351-and-arduino-421602

list of tutorials on FSK -- https://www.youtube.com/results?search_query=si5153+fsk+

 https://www.youtube.com/watch?v=XpxEs2_0ygg

---
2021-03-14 11:16:42

## From Dave S.

I wanted to capture here some of the different links of these radios (transmitters, receivers, and
transceivers) based on a combination of an Arduino MCU and
the SI5351 Clock Generator / Phase Locked Loop with an I2C interface.

(Here's an example of a module from Adafruit containing the
SI5351 with some voltage translation and regulator on-board:
https://www.adafruit.com/product/2045)

I think the most comprehensive and well documented/discussed of these projects is this one: https://github.com/threeme3/QCX-SSB
The readme has some great info on the origins of this project, some nice schematics and block diagrams, details of operation, and a credits section at the end that gives the lineage of the technologies, circuits, and algorithms that influenced this project.

This project started as a mod to a Morse Code transceiver kit sold by QRP-Labs that added support for single-sideband voice and many digital modes and simplified the orginial circuit too!  It's now moved beyond that to a design that can be built either as a mod to the original kit or with a custom PCB and parts ordered from various sources.

As mentioned, there's a new projection under discussion of building a more portable version of this design as well here: https://groups.io/g/ucx

If you look at the block diagram here: 
https://github.com/threeme3/QCX-SSB#technical-description
it would be pretty easy to simplify the schematic and, hopefully dissect the code, to be just the parts required for the receiver.

I also found the link form the fellow in Turkey that did the receiver design. 

https://antrak.org.tr/blog/projeler/poor-mans-hf-ssb-receiver-lets-build-it/

 Its block diagram is very similar to the receive part of the design above.  I noticed that he just sends the baseband (audio) signal to a PC via an audio plug rather than bringing it into the Arduino for further processing, which is what the QCX-SSB does.

I also see that his latest blog topics are focused on doing his over version of the same UCX project that the QCX-SSB folks are working on now.

---
2021-03-14 11:24:31

https://dl2man.de/qcx-mini-usdx-mod/

---
2021-03-31 18:15:14

radio [https://www.radiojitter.com/walkie-talkie-arduino-shield/](https://www.radiojitter.com/walkie-talkie-arduino-shield/)

these chips for location are really interesting [https://www.radiojitter.com/product/mc-1612-dg/](https://www.radiojitter.com/product/mc-1612-dg/)

DORJI module VHF Band HAM Amateur Radio Module DRA818V
Home : [http://www.dorji.com/products-detail.php?ProId=55](http://www.dorji.com/products-detail.php?ProId=55)

ham radio module [https://www.ebay.com/c/943323740](https://www.ebay.com/c/943323740)
