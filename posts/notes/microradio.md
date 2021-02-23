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

