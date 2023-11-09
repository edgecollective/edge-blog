---
pageTitle: Low-energy transportation 
layout: layout.njk
date: Last Modified
updated: 2023-04-27
tags: projects
image: img/transport/trailer_assembled.jpg
blurb: Exploring local DIY transport systems.
---

# No-weld, Low-cost Bike Trailer

The goal here is to develop an easy-to-assemble, low-cost bike trailer design, sourced from readily-available parts.

After [some experimentation](/notes/transport), we've currently settled on:
- a bike frame made from 1/2" electrical conduit (inexpensive / easily sourced)
- recycled bicycle wheels
- steel 'dropouts' (the wheel supports) that can be either laser- or hand-cut.

# Trailer Version 1.0

![](/img/transport/barebones.jpeg)

![](/img/transport/trailer_assembled.jpg)

# Dropout design    

The bike frame design has an 'inner' wheel support bar that is higher than the 'outer' support bar:

![](/img/transport/head_on.jpeg)

This lead us to design a longer 'inner' dropout, and a shorter, 'outer' dropout.

## Dropout CAD files

The dropouts were designed using openscad; [version 0.3 can be found on gitlab](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/tree/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3).  This repository includes both the original .scad files, as well as the .dxf files useful for laser-cutting.

![](/img/transport/openscad_ver_0.3_long.png)

![](/img/transport/openscad_ver_0.3_short.png)

![](/img/transport/dropout_ver_0.3_sideby.png)

## Dropouts produced via lasercutting service

We chose to have our dropouts made out of 0.125" (3.2 mm) stainless steel by [sendcutsend.com](sendcutsend.com)

![](/img/transport/dropouts_two.jpg) 

![](/img/transport/wheel_closeup.jpg)

![](/img/transport/height_diff.jpeg)



