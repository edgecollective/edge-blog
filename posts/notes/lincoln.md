---
pageTitle: Radiohead LoRa Mesh Field Test 
layout: layout.njk
date: 2020-09-15
updated: 2020-09-15
tags: notes 
image: img/lincoln/mesh.png
blurb: Test of Radiohead mesh networking functionality.
---

We used some Arduino-based devices to demonstrate the [mesh functionality](https://www.airspayce.com/mikem/arduino/RadioHead/classRHMesh.html) of the [Radiohead library](https://www.airspayce.com/mikem/arduino/RadioHead), a common radio library for LoRa radio devices. 

Our starting point was the [code](https://github.com/nootropicdesign/lora-mesh) from a [nootropic design blog post](https://nootropicdesign.com/projectlab/2018/10/20/lora-mesh-networking/). [Our version](https://github.com/edgecollective/lora-mesh/tree/master/gpsexpt/exp3) adds GPS funcitonality, using some inexpensive GPS modules and some Adafruit Feather LoRa boards.

## Trial data 

In our first trial, we deployed three nodes at a residence in Lincoln, MA USA, as depicted in **Fig 1** below.  Node #1 (blue) is stationary, and connected to a laptop which is recording any data received by Node #1 (via a Python script).  Nodes #2 (red) and #3 (green) are mobile, and equipped with GPS; every few seconds they make a GPS measurement, and attempt to send their latitude and longitude back to Node #1.  

|[ ![mesh](/img/lincoln/mesh.png)](https://edgecollective.io/lora-mesh/gpsexpt/exp3/plotting/)|
|:--:|
|  **Fig 1**: Snapshot from an [animated depiction](https://edgecollective.io/lora-mesh/gpsexpt/exp3/plotting/) of our first mesh networking test. The blue dot is Node #1 (stationary); Nodes #2 (green) and #3 (red) both attempt to send their GPS coordinates back to Node #1 every few seconds.  In this snapshot we see a situation where Node #2 traveled too far from Node #1 to reach it directly, and needed to relay its data via Node #2. |

What you can see in the [animation of the trial data](https://edgecollective.io/lora-mesh/gpsexpt/exp3/plotting/) is the following:

- During the first part of the journey, Nodes #2 and #3 are able to send their data directly back to Node #1, as they are easily within range. 
- At some point, we found that lost the connection to Node #1 due to topography / obstructions; so we backtracked a bit to where we still had a good signal, and dropped off Node #3 by the side of the road.  
- We then continued to walk down the path with Node #2.  
- At various points, Node #2 loses its connection to Node #1, and re-routes (according to the Radiohead mesh algorithm) its messages via Node #3.  

You can also observe that at some point in our journey -- with Node #2, walking away from Node #1 -- we regain our connection to Node #1 (likely because we went up a hill, and regained line-of-sight).  We believe that the Radiohead algorithm will simply stick with whatever route was most recently successful until it fails; so perhaps this means that when we see Node #2 and Node #3 connecting, the connection between Node #2 and Node #3 must have dropped, prior. will look into this.


