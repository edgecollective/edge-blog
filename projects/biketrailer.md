---
pageTitle: Bike Trailers
layout: layout.njk
date: Last Modified
tags: projects
image: img/transport/full_system.jpeg
blurb: Developing an easy-to-assemble, low-cost bike trailer design, in collaboration with the Somerville Bike Kitchen.
---

![](/img/transport/trailer_assembled.jpg)

![](/img/transport/full_system.jpeg)

# Design goals and approach

We've been working to develop an easy-to-assemble, low-cost bike trailer design, sourced from readily-available parts. The hope is to make it easier for people to transport cargo using bicycles.

After [some experimentation](/notes/transport), we've currently settled on a design that uses:
- recycled bicycle wheels (current design uses 16" 'kids' bike wheels; we're working on a design for larger bike wheels
- a bike frame made from 1/2" electrical conduit (inexpensive / easily sourced)
- a hitch trailer attachment made from a length of braided vinyl tubing
- a widely available bike hitch mount
- custom steel 'dropouts' (the wheel supports)

Electrical conduit can easily be sourced new, and sometimes scavenged. Bending it properly requires a custom tool (described below) which is widely available (and likely something that can be borrowed). The dropout design can likely be replicated using a drill to cut holes and slots in [$1 electrical box covers from Home Depot](https://www.homedepot.com/p/Steel-City-4-in-Square-Metal-Electrical-Box-Flat-Cover-52C1-50R/205124442);  but we're currently using an online laser-cutting service to make the four required dropouts for about $3 each (details below).

We're planning to add more detailed build instructions soon, but the below description gives a general flavor of the current design.

# Approximate cost

- **Approximately $35 to $45 per trailer** (if using recycled bicycle wheels, and assuming a future hitch design will cost less than $10)
- plus an additional **$20 to $60 one-time purchase** of a special 1/2" emt conduit pipe bending tool (if you can't find one to borrow)

A more detailed parts list is below.

# Trailer Version 1.0

| ![](/img/transport/barebones.jpeg) |
|:--:|
| Assembled bike trailer frame, using recycled 16" wheels; the main bike frame is constructed from a single 10' length of 1/2" electrical conduit. |

| ![](/img/transport/wheel_closeup.jpg) |
|:--:|
| Closeup of the custom 'dropouts' for the trailer.  THe design files can be sent to a metal lasercutting service for production (details below).]

## Parts list

| ![](/img/transport/conduit.png) |
|:--:|
| Two 10 ft lengths of 1/2" metal 'emt' electrical conduit (@ [$7 ea from Home Depot](https://www.homedepot.com/p/1-2-in-x-10-ft-Electric-Metallic-Tube-EMT-Conduit-853428/100400405)) = $14 |


| ![](/img/transport/dropouts_two.jpg) |
|:--:|
| Two 'short' dropouts (@ $3 ea) and two 'long' dropouts (@ $3.30 ea) from [sendcutsend.com](https://sendcutsend.com) (see below for design and ordering details) = $13 |

| ![](/img/transport/two_point_five.png) |
|:--:|
| Eight #10-24 x 2" bolts, with nuts ([4 for $1.38 at Home Depot](https://www.homedepot.com/p/Everbilt-10-24-x-2-in-Combo-Round-Head-Zinc-Plated-Machine-Screw-4-Pack-803231)) = $3; Five #10-24 x 2.5" bolts, with nuts ([2 for $1.38 at Home Depot](https://www.homedepot.com/p/Everbilt-10-24-x-2-1-2-in-Stainless-Steel-Combo-Round-Head-Machine-Screw-2-Pack-814361/204274802)) = $5 |

| ![](/img/transport/sixteen_wheels.png) |
|:--:|
| Two borrowed or recycled 16" 'kids' bicycle wheels (free) |

| ![](/img/transport/tube.jpg) |
|:--:|
| A 6" length of 7/8" braided vinyl tubing (sold in lengths of 10' for [$25 at Home Depot](https://www.homedepot.com/p/Everbilt-7-8-in-O-D-x-5-8-in-I-D-x-10-ft-PVC-Braided-Vinyl-Tube-HKP002-PVC002/303132520); so 6" is about $1.25) |

| ![](/img/transport/burley_hitch.png) |
|:--:|
| [Burley Bike Trailer hitch on Amazon for $10](https://www.amazon.com/ODIER-Trailer-Coupler-Trailers-Replacement/dp/B07FNKLK6N) |

## Common tools

| ![](/img/transport/drill.png) |
|:--:|
| Phillips-head screwdriver |

| ![](/img/transport/drill_bit.png) |
|:--:|
| 11/64" drill bit |

| ![](/img/transport/phillips.png) |
|:--:|
| Phillips-head screwdriver |

| ![](/img/transport/pliers.png) |
|:--:|
| Pliers |


## Special pipe-bending tool

| ![](/img/transport/bender.png) |
|:--:|
| 1/2" conduit pipe bender -- [$20 on Amazon](https://www.amazon.com/EMT-Bender-Aluminum-Conduit-Assembly/dp/B0C112B2L3/ref=asc_df_B0C112B2L3), [$60 at Home Depot](https://www.homedepot.com/p/Klein-Tools-1-2-in-Iron-Conduit-Bender-EMT-with-Angle-Setter-51603/317837457), free if borrowed |

| ![](/img/transport/pipe_bend.png) |
|:--:|
| How to use a pipe bender: [https://www.youtube.com/watch?v=r3h97SfQYYI](https://www.youtube.com/watch?v=r3h97SfQYYI) |

## Making the dropouts  

The bike frame design has an 'inner' wheel support bar that is higher than the 'outer' support bar, leading us to design a longer 'inner' dropout, and a shorter, 'outer' dropout.

| ![](/img/transport/head_on.jpeg) |
|:--:|
| The wheel mounts have an inner support bar that is higher than the outer support bar (by one pipe diameter).|

| ![](/img/transport/height_diff.jpeg) |
|:--:|
| The different heights of the inner and out support bar are compensated by different dropout lenghts, in order to keep the wheel axle level. |

We designed the 'short' and 'long' dropouts in openscad.  (The original .scad files for "version 0.3" of the droupouts can be found on github: [version 0.3 can be found on gitlab](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/tree/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3))

You can upload the ".dxf" files linked below to [sendcutsend.com](https://sendcutsend.com), specify 0.125" (3.2 mm) stainless steel, and they'll send you back the laser-cut metal.

| ![](/img/transport/shorty.png) |
|:--:|
| **Short dropout**. [DXF file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_short.dxf?inline=false) (for production); [SCAD file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_short.scad?inline=false) (for reference or re-design) |

| ![](/img/transport/longy.png) |
|:--:|
| **Long dropout**. [DXF file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_long.dxf?inline=false) (for production); [SCAD file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_long.scad?inline=false) (for reference or re-design) |

## Making the hitch

![](/img/transport/mount.jpg)

![](/img/transport/hitch_1.jpg)

![](/img/transport/hitch_2.jpg)

![](/img/transport/hitch_3.jpg)

![](/img/transport/hitch_down.jpg)

# Base Design & Variants

As of 12/23, we've been experimenting with a standardized 'wheel base' design that uses a single, 10' length of 1/2" conduit as a stable 'frame' around adult-size (26 in) bicycle wheels.  The idea is that this 'base' can then be modified to be used as a bicycle trailer, or a simple garden / city cart. 

We'll be posting updates as this design solidifies. 

![](/img/transport/version_4.jpg)

![](/img/transport/garden_base.jpeg)

![](/img/transport/garden_cart.jpeg)

# Somerville Bike Shop Bike Trailer Workshop Dec 2023

![](/img/transport/sbk_a.jpeg)

![](/img/transport/sbk_b.jpeg)

![](/img/transport/sbk_c.jpeg)

![](/img/transport/sbk_d.jpeg)

![](/img/transport/sbk_e.jpeg)

![](/img/transport/sbk_f.jpeg)

![](/img/transport/sbk_g.jpeg)

![](/img/transport/sbk_h.jpeg)

![](/img/transport/sbk_i.jpeg)

![](/img/transport/sbk_j.jpeg)








 

