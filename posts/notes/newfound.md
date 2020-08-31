---
pageTitle: Meshtastic Test at Newfound Lake
layout: layout.njk
date: 2020-08-31
updated: 2020-08-31
tags: notes
image: img/newfound/IMG_20200830_111611868_HDR.jpg
blurb: Using the Meshtastic Python API to perform some basic range tests of the Meshtastic system at Newfound Lake in Bristol, NH.
---

|[ ![IMG_20200830_111617074_HDR](/img/newfound/IMG_20200830_111617074_HDR.jpg)](/img/newfound/IMG_20200830_111617074_HDR.jpg)|
|:--:|
| [Heltec](https://community.hiveeyes.org/t/heltec-wifi-lora-32/3125) widget set up as a automated [Meshtastic](https://www.meshtastic.org/) LoRa mesh 'base station' node in a cabin on a lake. It's run by a [Mesthastic-python](https://github.com/meshtastic/Meshtastic-python) script that replies to any messages sent to it with the SNR of the incoming message. |


This weekend we used the [Meshtastic Python API](https://github.com/meshtastic/Meshtastic-python) to perform some basic range tests of the [Meshtastic](https://www.meshtastic.org/) LoRa mesh networking communications system, around the lake at Newfound Lake in Bristol, NH.   

Below are some hastily-assembled data and scripts; will hope to organize this into a narrative account ASAP.

## Example Mesthastic-Python script

A link to some of the Meshtastic-Python scripts we played with is [here](https://github.com/edgecollective/meshtastic-python-experiments). 

```python
import meshtastic
import time
from pubsub import pub

def onReceive(packet): # called when a packet arrives
    print(f"Received: {packet}")
    if packet['decoded']['data'] is not None:
        msg = packet['decoded']['data']['text']
        rxSnr = packet['rxSnr']
        hopLimit = packet['hopLimit']
        print(f"message: {msg}")
        reply="got msg \'{}\' with rxSnr: {} and hopLimit: {}".format(msg,rxSnr,hopLimit)
        print("Sending reply: ",reply)
        interface.sendText(reply)

def onConnection(): # called when we (re)connect to the radio
    # defaults to broadcast, specify a destination ID if you wish
    interface.sendText("hello mesh")

pub.subscribe(onReceive, "meshtastic.receive")
pub.subscribe(onConnection, "meshtastic.connection.established")
interface = meshtastic.StreamInterface()
```

## Example Mesthastic-Python script output

> Received: {'from': 3520888364, 'to': 4294967295, 'decoded': {'data': {'typ': 'CLEAR_TEXT', 'payload': 'dGVzdDc=', 'text': 'test7'}}, 'id': 2204634416, 'rxSnr': 3.0, 'hopLimit': 1, 'fromId': None, 'toId': '^all'}

> message: test7

> Sending reply:  got msg 'test7' with rxSnr: 3.0 and hopLimit: 1

## Pics

|[ ![Screenshot_20200830-123404](/img/newfound/screen/Screenshot_20200830-123404.png)](/img/newfound/screen/Screenshot_20200830-123404.png)|
|:--:|
|  |


|[ ![Screenshot_20200830-121357](/img/newfound/screen/Screenshot_20200830-121357.png)](/img/newfound/screen/Screenshot_20200830-121357.png)|
|:--:|
|  |


|[ ![Screenshot_20200830-123413](/img/newfound/screen/Screenshot_20200830-123413.png)](/img/newfound/screen/Screenshot_20200830-123413.png)|
|:--:|
|  |


|[ ![Screenshot_20200830-112105](/img/newfound/screen/Screenshot_20200830-112105.png)](/img/newfound/screen/Screenshot_20200830-112105.png)|
|:--:|
|  |


|[ ![Screenshot_20200830-124655](/img/newfound/screen/Screenshot_20200830-124655.png)](/img/newfound/screen/Screenshot_20200830-124655.png)|
|:--:|
|  |


|[ ![Screenshot_20200830-115555](/img/newfound/screen/Screenshot_20200830-115555.png)](/img/newfound/screen/Screenshot_20200830-115555.png)|
|:--:|
|  |


|[ ![Screenshot_20200830-121245](/img/newfound/screen/Screenshot_20200830-121245.png)](/img/newfound/screen/Screenshot_20200830-121245.png)|
|:--:|
|  |


|[ ![Screenshot_20200830-122047](/img/newfound/screen/Screenshot_20200830-122047.png)](/img/newfound/screen/Screenshot_20200830-122047.png)|
|:--:|
|  |


|[ ![Screenshot_20200830-115714](/img/newfound/screen/Screenshot_20200830-115714.png)](/img/newfound/screen/Screenshot_20200830-115714.png)|
|:--:|
|  |

|[ ![IMG_20200830_114603940](/img/newfound/IMG_20200830_114603940.jpg)](/img/newfound/IMG_20200830_114603940.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_114936175_HDR](/img/newfound/IMG_20200830_114936175_HDR.jpg)](/img/newfound/IMG_20200830_114936175_HDR.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_120847462](/img/newfound/IMG_20200830_120847462.jpg)](/img/newfound/IMG_20200830_120847462.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_115532279](/img/newfound/IMG_20200830_115532279.jpg)](/img/newfound/IMG_20200830_115532279.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_114310446_HDR](/img/newfound/IMG_20200830_114310446_HDR.jpg)](/img/newfound/IMG_20200830_114310446_HDR.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_111650561](/img/newfound/IMG_20200830_111650561.jpg)](/img/newfound/IMG_20200830_111650561.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_122019615](/img/newfound/IMG_20200830_122019615.jpg)](/img/newfound/IMG_20200830_122019615.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_120908720](/img/newfound/IMG_20200830_120908720.jpg)](/img/newfound/IMG_20200830_120908720.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_130845706](/img/newfound/IMG_20200830_130845706.jpg)](/img/newfound/IMG_20200830_130845706.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_115540242](/img/newfound/IMG_20200830_115540242.jpg)](/img/newfound/IMG_20200830_115540242.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_120856393](/img/newfound/IMG_20200830_120856393.jpg)](/img/newfound/IMG_20200830_120856393.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_122032159](/img/newfound/IMG_20200830_122032159.jpg)](/img/newfound/IMG_20200830_122032159.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_122022494](/img/newfound/IMG_20200830_122022494.jpg)](/img/newfound/IMG_20200830_122022494.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_130853240](/img/newfound/IMG_20200830_130853240.jpg)](/img/newfound/IMG_20200830_130853240.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_111632368](/img/newfound/IMG_20200830_111632368.jpg)](/img/newfound/IMG_20200830_111632368.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_114323793](/img/newfound/IMG_20200830_114323793.jpg)](/img/newfound/IMG_20200830_114323793.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_121654604](/img/newfound/IMG_20200830_121654604.jpg)](/img/newfound/IMG_20200830_121654604.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_122318035](/img/newfound/IMG_20200830_122318035.jpg)](/img/newfound/IMG_20200830_122318035.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_111611868_HDR](/img/newfound/IMG_20200830_111611868_HDR.jpg)](/img/newfound/IMG_20200830_111611868_HDR.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_111400570](/img/newfound/IMG_20200830_111400570.jpg)](/img/newfound/IMG_20200830_111400570.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_111624205](/img/newfound/IMG_20200830_111624205.jpg)](/img/newfound/IMG_20200830_111624205.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_123023686](/img/newfound/IMG_20200830_123023686.jpg)](/img/newfound/IMG_20200830_123023686.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_115528816_HDR](/img/newfound/IMG_20200830_115528816_HDR.jpg)](/img/newfound/IMG_20200830_115528816_HDR.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_114804035](/img/newfound/IMG_20200830_114804035.jpg)](/img/newfound/IMG_20200830_114804035.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_110618746](/img/newfound/IMG_20200830_110618746.jpg)](/img/newfound/IMG_20200830_110618746.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_122026884_HDR](/img/newfound/IMG_20200830_122026884_HDR.jpg)](/img/newfound/IMG_20200830_122026884_HDR.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_130840593](/img/newfound/IMG_20200830_130840593.jpg)](/img/newfound/IMG_20200830_130840593.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_115535009](/img/newfound/IMG_20200830_115535009.jpg)](/img/newfound/IMG_20200830_115535009.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_111644049](/img/newfound/IMG_20200830_111644049.jpg)](/img/newfound/IMG_20200830_111644049.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_112506116](/img/newfound/IMG_20200830_112506116.jpg)](/img/newfound/IMG_20200830_112506116.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_114553112_HDR](/img/newfound/IMG_20200830_114553112_HDR.jpg)](/img/newfound/IMG_20200830_114553112_HDR.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_120902450](/img/newfound/IMG_20200830_120902450.jpg)](/img/newfound/IMG_20200830_120902450.jpg)|
|:--:|
|  |


|[ ![IMG_20200830_114338715](/img/newfound/IMG_20200830_114338715.jpg)](/img/newfound/IMG_20200830_114338715.jpg)|
|:--:|
|  |


