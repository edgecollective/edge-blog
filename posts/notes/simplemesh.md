---
pageTitle: Simple LoRa Mesh 
layout: layout.njk
date: 2020-08-23
updated: 2020-08-23
tags: notes 
image: /img/proto2/proto.jpg
blurb: Experiments with the Radiohead RHMesh approach. 
---

## Overview

LoRa connectivity (ISM band 900 Mhz in the US) is highly dependent on line-of-sight.  This can be a challenge in many topologies of interest (urban, with buildings; rural, with trees / hills). The typical solution -- mounting a gateway at a very high location, in an attempt to achieve line-of-sight to remote nodes -- is not always feasible.  

This is why a 'mesh' networking setup for lora sensor nodes is very appealing.

## References 

Basing my experiments on a fantastic writeup by nootropicdesign -- [LoRa Mesh Networking with Simple Arduino-Based Modules](https://nootropicdesign.com/projectlab/2018/10/20/lora-mesh-networking/), and its associated [source code on github](https://github.com/nootropicdesign/lora-mesh).

## Near-term Goals

- Understanding the flow of data through the mesh to a target node from a source node;
- Visualizing the flow of data
- Adding GPS in order to track location of at least the source node; 
- Testing the memory impact on the 328p of using N nodes





 



