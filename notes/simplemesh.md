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

Non line-of-sight connections are still possible -- they are just very unreliable, and signal strength / connectivity may fluctuate based on the precise orientation and location of any intermediate objects / ground cover.  

This is why a 'mesh' networking setup for lora sensor nodes becomes very appealing; one might be able to deploy 'self-healing' collections of nodes that can pass messages along via a chain of connections.  

## References 

Basing my experiments on a fantastic writeup by nootropicdesign -- [LoRa Mesh Networking with Simple Arduino-Based Modules](https://nootropicdesign.com/projectlab/2018/10/20/lora-mesh-networking/), and its associated [source code on github](https://github.com/nootropicdesign/lora-mesh).

Also note that there is an RH MESH client example [here](https://www.airspayce.com/mikem/arduino/RadioHead/rf22_mesh_client_8pde-example.html) -- though it is currently based on the RF22 radio. 

Also notice the other examples of mesh servers and clients [here](https://www.airspayce.com/mikem/arduino/RadioHead/examples.html).
 
## Near-term Goals

- Understanding the flow of data through the mesh to a target node from a source node;
- Visualizing the flow of data
- Adding GPS in order to track location of at least the source node; 
- Testing the memory impact on the 328p of using N nodes


## Experiments

I believe that the standard appproach to mesh networking might be simpler than the nootropic design example.  It might simply involve a mesh 'server', and then mesh 'clients'.  

A simple verison might only have two types of node: 
- a [simple server](https://www.airspayce.com/mikem/arduino/RadioHead/rf22_mesh_server1_8pde-example.html); and 
- a [simple client](https://www.airspayce.com/mikem/arduino/RadioHead/rf22_mesh_client_8pde-example.html).

Server side:
![simple works server](/img/proto2/simple_works_server.png)

Client side:
![simple works](/img/proto2/simple_works.png)

 



