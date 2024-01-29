---
pageTitle: Farm Carts
layout: layout.njk
date: Last Modified
tags: projects
image: img/cratecart/c2.jpeg
blurb: Developing an easy-to-assemble, cart for transporting standard vegetable containers on farms, in collaboration with the <a href="https://www.youngfarmernight.org/">Young Farmer Network</a>.
---

# Overview

Annie Bayer of the [Young Farmer Network](https://www.youngfarmernight.org/)  proposed the idea of a DIY 'crate cart', to be used on small farms, that:
- would be easy and inexpensive to construct and build from readily-available and/or recycled materials, with a minimum of specialized tools;
- could accommodate typical crate sizes used on small farms (e.g. [24" x 20" x 11"](https://www.uline.com/Product/Detail/S-24138G/Stack-and-Nest-Containers/Ventilated-Stack-and-Nest-Container-24-x-20-x-11-Green) and [23" x 7" x 15"](https://caribbeangardenseed.com/products/stackable-black-plastic-nursery-crate-1crate-great-for-harvesting-vegetables)); 
- would have a wheel base that is wide enough to straddle common 30" vegetable beds.

In collaboration with Annie, we're working to develop a 'base design' for this cart that can easily be built in a workshop setting.

Our current prototype design uses recycled bicycle wheels, electrical conduit, and some custom, open-source bicycle dropouts, with a materials cost is estimated to be between $100 and $150.  The custom dropout design can be ordered via one of several metal lasercutting services.

The carrying area on the cart is approximately 44" x 54" -- enough to accommodate 4 24"x20"x11" crates side-by-side (or 8 crates when stacked).

![](/img/cratecart/c5_mod.png)

![](/img/cratecart/c2.jpeg)

# Associated skills and tools

The special skills and processes associated with constructing the current prototype -- designing with, bending, and cutting metal pipe, and the fabrication of custom metal dropouts using a CAD program and a metal lasercutting service -- have appplications in other on-farm contexts, and are described in more detail below. 

## Designing with, bending, and cutting metal pipe

Electrical conduit is widely used in construction and is inexpensive to source in most locations.  The techniques required to design with, bend, and cut electrical conduit are also commonly used in the construction of low tunnels and hoop houses -- e.g. the [low tunnel](https://www.mofga.org/resources/season-extension/colemans-low-tunnels/) and [mobile hoop house](https://www.johnnyseeds.com/on/demandware.static/-/Library-Sites-JSSSharedLibrary/default/dwcbcbf786/assets/information/7300-qh-modular-moveable-gothic-cathedral-tunnel-instruction-manual.pdf) designs by Eliot Coleman.

| ![](/img/transport/bender.png) |
|:--:|
| 1/2" conduit pipe bender -- [$20 on Amazon](https://www.amazon.com/EMT-Bender-Aluminum-Conduit-Assembly/dp/B0C112B2L3/ref=asc_df_B0C112B2L3), [$60 at Home Depot](https://www.homedepot.com/p/Klein-Tools-1-2-in-Iron-Conduit-Bender-EMT-with-Angle-Setter-51603/317837457), free if borrowed |

| ![](/img/transport/pipe_bend.png) |
|:--:|
| How to use a pipe bender: [https://www.youtube.com/watch?v=r3h97SfQYYI](https://www.youtube.com/watch?v=r3h97SfQYYI) |



| ![](/img/cratecart/pipe_cutting.png) |
|:--:|
| Cutting electrical conduit using an inexpensive hand tool -- via [makerpipe.com](https://makerpipe.com/blogs/diy-modular-pipe/how-to-cut-emt-conduit) |

## Designing and producing the 2D lasercut metal dropouts

The 'dropouts' necessary for holding the bicycle wheels in place are lasercut steel;  they can be ordered by sending the open source design files to an online service such as [sendcutsend.com](https://sendcutsend.com/).  They were designed using a 2D CAD program called [openscad](https://openscad.org/).

| ![](/img/transport/wheel_closeup.jpg) |
|:--:|
| Closeup of the custom 'dropouts' for the cart.  The design files can be sent to a metal lasercutting service for production (details below).]

| ![](/img/transport/dropouts_two.jpg) |
|:--:|
| Two 'short' dropouts (@ $3 ea) and two 'long' dropouts (@ $3.30 ea) from [sendcutsend.com](https://sendcutsend.com) (see below for design and ordering details) = $13 |

| ![](/img/transport/shorty.png) |
|:--:|
| **Short dropout**. [DXF file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_short.dxf?inline=false) (for production); [SCAD file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_short.scad?inline=false) (for reference or re-design) |

| ![](/img/transport/longy.png) |
|:--:|
| **Long dropout**. [DXF file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_long.dxf?inline=false) (for production); [SCAD file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_long.scad?inline=false) (for reference or re-design) |

Organizations like [L'Atelier Paysan](https://www.latelierpaysan.org/English) have used lasercut metal in their farm tool designs for years; learning how to order and/or design custom tools using this process can be a useful skill to acquire. 

# Additional notes on the current design

| ![](/img/cratecart/crate_crossy.png) |
|:--:|
| Footprint on cart of two typical crates used on small farms. Top (a): [24" x 20" x 11" Ventilated Container](https://www.uline.com/Product/Detail/S-24138G/Stack-and-Nest-Containers/Ventilated-Stack-and-Nest-Container-24-x-20-x-11-Green); and bottom, (b): [23" x 7" x 15" Nursery Crate](https://caribbeangardenseed.com/products/stackable-black-plastic-nursery-crate-1crate-great-for-harvesting-vegetables) |

| ![](/img/cratecart/cratecart_v6.png) |
|:--:|
| Version 6 |

| ![](/img/cratecart/garden_vs_cratecart.png) |
|:--:|
| Comparison of dimensions of the 'Vermont cart' (a commonly-used 'garden cart') and the 'DIY crate cart' design. | 

# Ongoing development

We're currently working to improve the overall simplicity and structural integrity of the design. Areas we're reviewing include:

## Using u-bolts instead of drilled holes and screws, where possible

We believe we can secure pipe cross-pieces using u-bolts, and avoiding finicky placement and alignment of drilled holes:

![](/img/cratecart/ubolt1.jpeg)

![](/img/cratecart/ubolt2.jpeg)

## More flexible dropout design

In "Version 0.5" of the dropouts, we've redesigned them to allow them to be secured to the cart frame using u-bolts or metal straps as well as screws.  

The relevant openscad file is here:  [https://gitlab.com/edgecollective/bike-trailer-dropouts/-/tree/d70551e2d9acb613b94db4331c57283067620711/v_0.5](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/tree/d70551e2d9acb613b94db4331c57283067620711/v_0.5)

![](/img/transport/ver_0.5.png)

## Redesigning the handle for increased ergonomics

Annie had suggested a handle design that would allow for 'stepping inside' the handle area and easily pulling the cart in that manner.  We're looking into ways of using sturdier 3/4" electrical conduit, in a different configuration, in order to enable this.




