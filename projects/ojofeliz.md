---
pageTitle: Water Storage Monitoring in New Mexico 
layout: layout.njk
date: 2023-02-22
tags: projects
updated: 2023-02-22
image: /img/ojofeliz/twintowers.jpeg
blurb: Developing an open source satellite modem-based water level monitoring system with Grass Nomads LLC.  
---

# Background

[Grass Nomads, LLC](https://www.grassnomads.com/) leases a 120,000 acre high elevation ranch in New Mexico, where we run a cow-calf operation. Progressive grazing management featuring higher density and longer recovery periods is critical to our success, made possible by an extensive and reliable water system. Several key storage tanks in our system are the first indication of a leak or failure, and driving to them takes hours. Remote water monitoring would save us time, vehicle wear, water, and further enable advances in our land stewardship.

| [![](/img/ojofeliz/ofr_map.png)](/img/ojofeliz/ofr_map.png) |
|:--:|
|**Fig 1.** The Ojo Felix ranch, a 200 square mile lease, with water infrastructure shown. Not shown are planned pipelines to be installed in 2023.|

Having updated water level data from three key water storage tanks on the ranch is of particular interest: 'Twin Towers' (Fig. 2), 'Casias' (Fig 3), and 'Marsh Wells'.  

| [![](/img/ojofeliz/twintowers.jpeg)](/img/ojofeliz/twintowers.jpeg) |
|:--:|
|**Fig 2.** The 'Twin Towers' water storage tank on Ojo Feliz Ranch, one of the tanks to be monitored.|

| [![](/img/ojofeliz/casias.png)](/img/ojofeliz/casias.png) |
|:--:|
|**Fig 3.** The 'Casias' water storage tank on Ojo Feliz Ranch, one of the tanks to be monitored.|

# Planned Monitoring Strategy

The plan is to develop an open-source, DIY system that uses a satellite modem to send water level data from remote storage tanks to an online database, allowing Grass Nomads LLC to access up-to-date water level over the internet or on their phones, anywhere they have access to internet or cellular service.  (For a schematic overview of the system, see Figure 4 below.)

| [![](/img/ojofeliz/floodsense.png)](/img/ojofeliz/floodsense.png) |
|:--:|
|**Fig 4.** The overall approach to monitoring the water storage tanks. |

At Edge Collective we have previously developed and worked with most of the non-satellite components of this system, collecting data from a solar-powered ultrasonic water level sensor (Fig 5) via local LoRa radio connection to a LoRa-wifi gateway, and to an online database (Fig 6).  

| [![](/img/ojofeliz/chappy_proto.png)](/img/ojofeliz/chappy_proto.png) |
|:--:|
|**Fig 5.** A previous, LoRa-based ultrasonic water level sensor prototype built by Edge Collective. |

| [![](/img/ojofeliz/sonar_data.png)](/img/ojofeliz/sonar_data.png) |
|:--:|
|**Fig 6.** Data from an initial deployment of a LoRa-based ultrasonic sensor |


# Monitoring system hardware


| [![](/img/ojofeliz/ultrasonic_housing.jpg)](/img/ojofeliz/ultrasonic_housing.jpg) |
|:--:|
|**Fig 7.** Close-up of the housing for the ultrasonic water level sensor. |


| [![](/img/ojofeliz/rockblock.jpg)](/img/ojofeliz/rockblock.jpg) |
|:--:|
|**Fig 8.** The [Rockblock 9602 Satellite Modem](https://www.sparkfun.com/products/13745), available e.g. from Sparkfun for $300 USD |


| [![](/img/ojofeliz/max7092.jpg)](/img/ojofeliz/max7092.jpg) |
|:--:|
|**Fig 9.** The [Maxbotix MB7092](https://www.adafruit.com/product/1137), available e.g. from Adafruit for $100 |

| [![](/img/ojofeliz/feather_m0.jpg)](/img/ojofeliz/feather_m0.jpg) |
|:--:|
|**Fig 10.** The [Feather M0 LoRa microcontroller](https://www.adafruit.com/product/3178), available e.g. from Adafruit for $35 |

# More images of Ojo Feliz Ranch

[![](/img/ojofeliz/ofr1.jpeg)](/img/ojofeliz/ofr1.jpeg)

[![](/img/ojofeliz/ofr3.jpeg)](/img/ojofeliz/ofr3.jpeg)

[![](/img/ojofeliz/ofr4.jpeg)](/img/ojofeliz/ofr4.jpeg)

[![](/img/ojofeliz/ofr5.jpeg)](/img/ojofeliz/ofr5.jpeg)

[![](/img/ojofeliz/ofr6.jpeg)](/img/ojofeliz/ofr6.jpeg)

[![](/img/ojofeliz/ofr7.jpeg)](/img/ojofeliz/ofr7.jpeg)

[![](/img/ojofeliz/ofr2.jpeg)](/img/ojofeliz/ofr2.jpeg)