---
pageTitle: Upgrading the Power System
layout: layout.njk
date: 2024-06-05
updated: Last Modified 
tags: grassnomads 
image: /img/ojofeliz/dc_dc_swap.png
blurb: Description of the June 2024 Solar Power Upgrade.
---

## Background

We had attempted to implement a solar-charged lead-acid battery system in order to deal with cold weather temperatures.  

An overview of our new system diagram can be seen in Fig. 0 below.

| ![](/img/ojofeliz/overall_circuit_transmitter_sensor.png) |
|:--:|
| **Fig 0.** |

The lead-acid battery voltage is 12V;  but the transmitter box electronics requires a lower voltage -- something between 3V and 5V.  

We had therefore used a 'DC-DC Converter' (the circuit board highlighted with a green rectangle in Figure 1) to convert 12V down to 3.3V.  

After testing in the field, we found that 3.3V was insufficient;  5V is required.

## Upgrade Procedure 

So our plan now is to replace the current 3.3V DC-DC Converter with a 5V DC-DC converter (shown in Figure 2. below).

The procedure requires:
1. Removing the original 3.3V DC-DC converter by disconnecting or cutting the wires connecting it to the solar controller and the power-out cable (Cable 'PWR' in Fig 1.)
2. Inserting the new 5V DC-DC converter by connecting its input wires ('A' and 'B' in Fig. 1) to the solar controller, and splicing its output wires ('C' and 'D' in Fig. 1) to the output power cable (Cable 'PWR' in Fig 1.)
3. Connecting the power cable from the solar box (Cable 'PWR' in Fig 1.) to the transmitter box input (Cable 'PWR' in Fig 3.)


| ![](/img/ojofeliz/solarbox_dcdc.png) |
|:--:|
| **Fig. 1.** |

| ![](/img/ojofeliz/dc_dc_labeled.png) |
|:--:|
| **Fig. 2.** |

| ![](/img/ojofeliz/transmitter_box_labeled.png) |
|:--:|
| **Fig. 3.** |



