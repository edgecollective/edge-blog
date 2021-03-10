---
pageTitle: Misc alternative radio experiments
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

