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

[Grass Nomads, LLC](https://www.grassnomads.com/) leases a 120,000 acre high elevation ranch in New Mexico, where they run a cow-calf operation with an extensive water system. Several key storage tanks in their system are the first indication of a leak or failure, and driving to them takes hours. Remote water monitoring would save them time, vehicle wear, and water.

<!--
| [![](/img/ojofeliz/ofr_map.png)](/img/ojofeliz/ofr_map.png) |
|:--:|
|**Fig 1.** The Ojo Felix ranch, a 200 square mile lease, shwoing the location of the three key water storage tanks to be monitored -- 'Twin Towers', 'Casias', and 'Marsh Wells'. Not shown are planned pipelines to be installed in 2023.   |
-->

In particular, there is an interested in collecting ongoing water level data from three key water storage tanks on the ranch is of particular interest: 'Twin Towers' (Fig. 1), 'Casias' (Fig 2), and 'Marsh Wells'.  

| [![](/img/ojofeliz/twintowers.jpeg)](/img/ojofeliz/twintowers.jpeg) |
|:--:|
|**Fig 1.** The 'Twin Towers' water storage tank on Ojo Feliz Ranch, one of the tanks to be monitored.|

| [![](/img/ojofeliz/casias.png)](/img/ojofeliz/casias.png) |
|:--:|
|**Fig 2.** The 'Casias' water storage tank on Ojo Feliz Ranch, one of the tanks to be monitored.|

# Planned Monitoring Strategy

Because of the remote location of the water storage tanks and uncertain cellular coverage, we have decided to develop a satellite modem-based monitoring system.  Currently, we are unsure as to whether the satellite modem (and accompanying solar panel) would best be situated directly on top / next to the storage tank, or whether a location 100+ feet away might better optimize solar energy and minimize obstacles to satellite coverage.  We are therefore designing the system to include a 'low-power, remote radio (LoRa) depth sensor node', which will be situated on the tank, and relay its data to a 'LoRa-satellite-modem gateway' somewhere within radio range. 

The satellite modem will then send water level data to an online database, allowing Grass Nomads LLC to access up-to-date water level over the internet or on their phones, anywhere they have access to internet or cellular service.  (For a schematic overview of the system, see Figure 3 below.)

| [![](/img/ojofeliz/system_overview.png)](/img/ojofeliz/system_overview.png) |
|:--:|
|**Fig 3.** The overall approach to monitoring the water storage tanks. |

# Prior art

At Edge Collective we have previously developed and worked with most of the non-satellite components of this system, collecting data from a solar-powered ultrasonic water level sensor (Fig 4) via local LoRa radio connection to a LoRa-wifi gateway, and to an online database (Fig 5).  

| [![](/img/ojofeliz/chappy_proto.png)](/img/ojofeliz/chappy_proto.png) |
|:--:|
|**Fig 4.** A previous, LoRa-based ultrasonic water level sensor prototype built by Edge Collective. |

| [![](/img/ojofeliz/sonar_data.png)](/img/ojofeliz/sonar_data.png) |
|:--:|
|**Fig 5.** Data from an initial deployment of a LoRa-based ultrasonic sensor |

# Current Status 

We currently have a working breadboard prototype (Fig 6) of a satellite modem + ultrasonic water level device, which is posting its data to an online database.  Next steps include designing and producing a batch of integrative PCBs for these devices, optimizing the firmware for power, and adding in the 'LoRa relay' node circuitry if necessary.

| [![](/img/ojofeliz/breadboard.jpeg)](/img/ojofeliz/breadboard.jpeg) |
|:--:|
|**Fig 6.** Data from an initial deployment of a LoRa-based ultrasonic sensor |

# Hardware components

Except for the custom PCBs we will be designing, nearly every component of the system consists of off-the-shelf hardware.

<!--
| [![](/img/ojofeliz/ultrasonic_housing.jpg)](/img/ojofeliz/ultrasonic_housing.jpg) |
|:--:|
|**Fig 7.** Close-up of the housing for the ultrasonic water level sensor. |

-->

| [![](/img/ojofeliz/rockblock.jpg)](/img/ojofeliz/rockblock.jpg) |
|:--:|
|**Fig 7.** The [Rockblock 9602 Satellite Modem](https://www.sparkfun.com/products/13745), available e.g. from Sparkfun for $300 USD |


| [![](/img/ojofeliz/max7092.jpg)](/img/ojofeliz/max7092.jpg) |
|:--:|
|**Fig 8.** The [Maxbotix MB7092](https://www.adafruit.com/product/1137), available e.g. from Adafruit for $100 |

| [![](/img/ojofeliz/feather_m0.jpg)](/img/ojofeliz/feather_m0.jpg) |
|:--:|
|**Fig 9.** The [Feather M0 LoRa microcontroller](https://www.adafruit.com/product/3178), available e.g. from Adafruit for $35 |

# More images of Ojo Feliz Ranch

[![](/img/ojofeliz/ofr1.jpeg)](/img/ojofeliz/ofr1.jpeg)

[![](/img/ojofeliz/ofr3.jpeg)](/img/ojofeliz/ofr3.jpeg)

[![](/img/ojofeliz/ofr4.jpeg)](/img/ojofeliz/ofr4.jpeg)

[![](/img/ojofeliz/ofr5.jpeg)](/img/ojofeliz/ofr5.jpeg)

[![](/img/ojofeliz/ofr6.jpeg)](/img/ojofeliz/ofr6.jpeg)

[![](/img/ojofeliz/ofr7.jpeg)](/img/ojofeliz/ofr7.jpeg)

[![](/img/ojofeliz/ofr2.jpeg)](/img/ojofeliz/ofr2.jpeg)

[![](/img/ojofeliz/horseback.jpeg)](/img/ojofeliz/horseback.jpeg)