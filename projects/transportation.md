---
pageTitle: DIY Bike Trailers
layout: layout.njk
date: Last Modified
updated: 2023-04-27
tags: projects
image: img/transport/trailer_assembled.jpg
blurb: Developing an easy-to-assemble, low-cost bike trailer design
---

## Background

We've been working to develop an easy-to-assemble, low-cost bike trailer design, sourced from readily-available parts.
After [some experimentation](/notes/transport), we've currently settled on:
- a bike frame made from 1/2" electrical conduit (inexpensive / easily sourced)
- recycled bicycle wheels
- steel 'dropouts' (the wheel supports) that can be either laser- or hand-cut.

We're planning to add more detailed build instructions soon, but the below description gives a general flavor of the current design.

## Approximate cost

- **$35 per trailer** (if using recycled bicycle wheels)
- plus an additional **$20 to $60 one-time purchase** of a special 1/2" emt conduit pipe bending tool.

A more detailed parts list is below.

# Trailer Version 1.0

![](/img/transport/barebones.jpeg)

![](/img/transport/trailer_assembled.jpg)

## Parts list

- Two 10 ft lengths of 1/2" metal 'emt' electrical conduit (@ $7 ea from Home Depot) = $14
- Two 'short' dropouts (@ $3 ea) and two 'long' dropouts (@ $3.30 ea) from sendcutsend.com (see below for design and ordering details) = $13
- Various bolts of [size #10](https://www.homedepot.com/p/Everbilt-10-24-x-2-in-Combo-Round-Head-Zinc-Plated-Machine-Screw-4-Pack-803231/204274628) from Home Depot = approx $8
- Two borrowed bicycle wheels (free) 

## Common tools

- Drill with 11/64" drill bit (common, can borrow)
- screwdriver, pliers (common, can borrow)

## Special pipe-bending tool

- 1/2" conduit pipe bender -- [$20 on Amazon](https://www.amazon.com/EMT-Bender-Aluminum-Conduit-Assembly/dp/B0C112B2L3/ref=asc_df_B0C112B2L3), [$60 at Home Depot](https://www.homedepot.com/p/Klein-Tools-1-2-in-Iron-Conduit-Bender-EMT-with-Angle-Setter-51603/317837457), free if borrowed  

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

We chose to have our dropouts made out of 0.125" (3.2 mm) stainless steel by [sendcutsend.com](sendcutsend.com).  The '.dxf' files in the above repository can be sent directly to sendcutsend, and they'll mail you bake the parts (free shipping). 

![](/img/transport/dropouts_two.jpg) 

![](/img/transport/wheel_closeup.jpg)

![](/img/transport/height_diff.jpeg)



