---
pageTitle: Meshtastic LoRa Mesh Chat
layout: layout.njk
date: 2020-08-04
updated: 2020-09-28
tags: notes 
image: img/mesh/hello.png
blurb: Experimenting with the Meshtastic system for Android + Bluetooth + LoRa mesh networking.
---

## Meshtastic Overview

Some notes on our experiments with the [Meshtastic Project](https://www.meshtastic.org/).  

Check out their [beginner's guide](https://meshtastic.letstalkthis.com/), and their [discussion forum](https://meshtastic.discourse.group/), and watch Andreas Spiess' review of the project:

<iframe width="560" height="315" src="https://www.youtube.com/embed/TY6m6fS8bxU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

|[ ![arrow](/img/mesh/arrow.png)](/img/mesh/arrow.png)|
|:--:|
|  |

## Heltec Boards

Picked up some [Heltec WiFi LoRa 32 V2](https://heltec.org/project/wifi-lora-32/) boards -- one of the official ports of the Meshtastic project.  Was very easy to get up and running.  Did a quick test by controlling one of the devices (taped in my home window) via a Python script on a PC (using the Meshtastic-python API), and using it to send out pings every 10 seconds to the network; meanwhile I drove around the neighborhood with the other device connected to my Android phone via Bluetooth.  

Here's a nice description of the [Heltec pinout](https://community.hiveeyes.org/t/heltec-wifi-lora-32/3125).

|[ ![receiving](/img/mesh/receiving.png)](/img/mesh/receiving.png)|
|:--:|
|  |


|[ ![sender_code](/img/mesh/sender_code.png)](/img/mesh/sender_code.png)|
|:--:|
|  |


|[ ![sending](/img/mesh/sending.png)](/img/mesh/sending.png)|
|:--:|
|  |

|[ ![driving](/img/mesh/update1/driving.jpeg)](/img/mesh/update1/driving.jpeg)|
|:--:|
|  |

|[ ![bin](/img/mesh/update2/bin.png)](/img/mesh/update2/bin.png)|
|:--:|
|  |


|[ ![window](/img/mesh/update2/window.png)](/img/mesh/update2/window.png)|
|:--:|
|  |


|[ ![Screenshot_2020-08-16_12-06-16](/img/mesh/update2/Screenshot_2020-08-16_12-06-16.png)](/img/mesh/update2/Screenshot_2020-08-16_12-06-16.png)|
|:--:|
|  |

## Quahog

Got Meshtastic up and running on a [Quahog](https://edgecollective.io/post/notes/mesh/) -- a relatively easy-to-assemble ESP32 + RFM9X design.  Just required modifying the 'heltec' LoRa radio GPIO settings in configuration.h in the source code and compiling using Platform.io, as per suggestions on the Meshtastic discourse forum.

|[ ![meshtastic](/img/mesh/meshtastic.jpeg)](/img/mesh/meshtastic.jpeg)|
|:--:|
|  Meshtastic running on a Quahog. |

|[ ![qtest](/img/mesh/update3/qtest.jpg)](/img/mesh/update3/qtest.jpg)|
|:--:|
| First message received on the Quahog. |

## Meshtastic to connect isolated villages

Project by Luandro, [here](https://meshtastic.discourse.group/t/meshtastic-to-connect-isolated-villages/1191).

Luandro's public key on Scuttlebutt is here: ```@2RNGJafZtMHzd76gyvqH6EJiK7kBnXeak5mBWzoO/iU=.ed25519```