---
pageTitle: Crate Carts for Small Farms
layout: layout.njk
date: Last Modified
tags: projects
image: img/cratecart/c2.jpeg
blurb: Developing an easy-to-assemble cart for transporting standard vegetable containers on small farms, in collaboration with the <a href="https://www.youngfarmernight.org/">Young Farmer Network</a>.
---

# Background

## The problem with garden carts

Annie Bayer of the [Young Farmer Network](https://www.youngfarmernight.org/)  had described the challenge of using common 'garden carts' on small farms to transport vegetable crates:  the typical wood-based garden cart design seems to add unnecessary weight; the carts are too small to carry more than one or two crates;  and their wheel base is too small to straddle 30" vegetable beds.

## A proposed crate cart design

Annie proposed the idea of a DIY 'crate cart' design that would:
- accommodate common crate sizes used on small farms (e.g. [24" x 20" x 11"](https://www.uline.com/Product/Detail/S-24138G/Stack-and-Nest-Containers/Ventilated-Stack-and-Nest-Container-24-x-20-x-11-Green) and [23" x 7" x 15"](https://caribbeangardenseed.com/products/stackable-black-plastic-nursery-crate-1crate-great-for-harvesting-vegetables));
- be lightweight;
- straddle common 30" vegetable beds; and
- be constructed at low cost from widely-available and/or recycled materials, with a minimum of specialized tools.

We've been working with Annie to develop a 'base design' for this cart that can easily be built in a workshop setting.

# Current crate cart prototype

Our current prototype uses recycled bicycle wheels, electrical conduit, welded wire fencing, and a custom, open-source bicycle wheel dropout design, with an estimated materials cost between $100 and $150 (less than 1/3 the cost of widely-used, smaller commercial garden carts).  

The custom dropouts used in this design can be ordered via one of several metal lasercutting services by submitting an open source dropout design file (see below). 

The carrying area on the cart is approximately 44" x 54" -- enough to accommodate four 24"x20"x11" crates side-by-side (or eight crates when stacked).

![](/img/cratecart/c5_mod.png)

![](/img/cratecart/c2.jpeg)


| ![](/img/cratecart/crate_crossy.png) |
|:--:|
| Footprint on cart of two typical crates used on small farms. Top (a): [24" x 20" x 11" Ventilated Container](https://www.uline.com/Product/Detail/S-24138G/Stack-and-Nest-Containers/Ventilated-Stack-and-Nest-Container-24-x-20-x-11-Green); and bottom, (b): [23" x 7" x 15" Nursery Crate](https://caribbeangardenseed.com/products/stackable-black-plastic-nursery-crate-1crate-great-for-harvesting-vegetables) |

| ![](/img/cratecart/garden_vs_cratecart.png) |
|:--:|
| The crate cart (right) has a significantly larger carrying capacity than a typical 'garden' cart (left) and can be built for less than 1/3 of the cost. | 

| ![](/img/cratecart/cratecart_emt.png) |
|:--:|
| The current crate cart design uses 5 pieces of 1/2" electrical conduit and one piece of 3/4" conduit, and has a wheel base that can straddle 30" vegetable beds. |

# Associated skills and tools

The skills and tools associated with constructing the current 'crate cart' prototype also have applications in other aspects of farming.

## Designing with, bending, & cutting metal tubing

Electrical conduit is widely used in construction, and is inexpensive to source in most locations.  Designing with, bending, and cutting electrical conduit and other metal tubing is often used in the construction of low-cost low tunnels and hoop houses; see, for example, the [low tunnel](https://www.mofga.org/resources/season-extension/colemans-low-tunnels/) and [mobile hoop house](https://www.johnnyseeds.com/on/demandware.static/-/Library-Sites-JSSSharedLibrary/default/dwcbcbf786/assets/information/7300-qh-modular-moveable-gothic-cathedral-tunnel-instruction-manual.pdf) designs by Eliot Coleman, and the DIY designs produced by [bootstrapfarmer.com](https://www.bootstrapfarmer.com/blogs/building-a-greenhouse).

| ![](/img/cratecart/coleman_double.png) |
|:--:|
| Learning to design with, bend, and cut electrical conduit and metal tubing can be useful when building a DIY low tunnel or hoop house, as in [this guide by Eliot Coleman](https://www.johnnyseeds.com/on/demandware.static/-/Library-Sites-JSSSharedLibrary/default/dwcbcbf786/assets/information/7300-qh-modular-moveable-gothic-cathedral-tunnel-instruction-manual.pdf). | 


| ![](/img/transport/bender.png) |
|:--:|
| 1/2" conduit pipe bender -- [$20 on Amazon](https://www.amazon.com/EMT-Bender-Aluminum-Conduit-Assembly/dp/B0C112B2L3/ref=asc_df_B0C112B2L3), [$60 at Home Depot](https://www.homedepot.com/p/Klein-Tools-1-2-in-Iron-Conduit-Bender-EMT-with-Angle-Setter-51603/317837457), free if borrowed |

| ![](/img/transport/pipe_bend.png) |
|:--:|
| How to use a pipe bender: [https://www.youtube.com/watch?v=r3h97SfQYYI](https://www.youtube.com/watch?v=r3h97SfQYYI) |

| ![](/img/cratecart/pipe_cutting.png) |
|:--:|
| Cutting electrical conduit using an inexpensive hand tool -- via [makerpipe.com](https://makerpipe.com/blogs/diy-modular-pipe/how-to-cut-emt-conduit) |

## Designing and fabricating 2D laser-cut metal parts

The dropouts in this design are necessary to accommodate the bicycle wheels.  While dropouts can be cut from metal sheets 'manually' using an angle grinder or other tools, it is currently inexpensive and convenient to have them fabricated by a metal lasercutting service.

Learning to use a CAD program to design a metal part, and/or ordering a part using an online fabrication service, are skills that can later be used to repair old farm equipment or create parts of new tools.  Organizations like [L'Atelier Paysan](https://www.latelierpaysan.org/English) have used lasercut metal parts as part of their tool building and development process for years.


The 'dropouts' necessary for holding the bicycle wheels in place are lasercut steel;  they can be ordered by sending the open source design files to an online service such as [sendcutsend.com](https://sendcutsend.com/).  They were designed using a 2D CAD program called [openscad](https://openscad.org/).

| ![](/img/transport/wheel_closeup.jpg) |
|:--:|
| Closeup of the custom 'dropouts' for the cart.  The design files can be sent to a metal lasercutting service for production (details below). |

| ![](/img/transport/dropouts_two.jpg) |
|:--:|
| Two 'short' dropouts (@ $3 ea) and two 'long' dropouts (@ $3.30 ea) from [sendcutsend.com](https://sendcutsend.com) (see below for design and ordering details) = $13 |

| ![](/img/transport/shorty.png) |
|:--:|
| **Short dropout**. [DXF file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_short.dxf?inline=false) (for production); [SCAD file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_short.scad?inline=false) (for reference or re-design) |

| ![](/img/transport/longy.png) |
|:--:|
| **Long dropout**. [DXF file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_long.dxf?inline=false) (for production); [SCAD file](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/raw/f21a3fa739245bb51466d63d18eab6291da84101/v_0.3/ver_0.3_wide_long.scad?inline=false) (for reference or re-design) |

| ![](/img/cratecart/openscad_dropout.png) |
|:--:|
| [Openscad](https://openscad.org/) is one of several free and open source CAD programs that can be used to design parts that can later be fabricated by metal lasercutting services. A useful feature of 'parametric design' programs like Openscad is that designs can quickly and easily be scaled or modified in a programmatic fasion to accommodate new design ideas. |

# Refinements of the design

We're hoping to build some prototypes soon in a workshop setting with farmers in order to get useful feedback and design ideas.  Meanwhile, we're working to improve the overall simplicity and structural integrity of the crate design. 

Areas we're reviewing include:

## Using u-bolts and metal straps instead of drilled holes and screws where possible

We believe we can secure pipe cross-pieces using u-bolts, and avoiding finicky placement and alignment of drilled holes:

![](/img/cratecart/ubolt1.jpeg)

![](/img/cratecart/ubolt2.jpeg)

## Flexible dropout design

We're redesigning the dropouts to allow them to be secured to the cart frame using u-bolts or metal straps as well as screws.

| ![](/img/cratecart/dropout_ver_0.6.png) |
|:--:|
| Version 0.6 of the dropout design.  The two smaller holes are for screw-based attachments;  the four larger holes are for u-bolts;  the two thin horizontal holes are for a metal strap.  The relevant openscad file is [here](https://gitlab.com/edgecollective/bike-trailer-dropouts/-/tree/2539040d223595bdf64ecc884928b3a03084c031/v_0.6) |

## Redesigning the handle for increased ergonomics

Annie had suggested a handle design that would allow for 'stepping inside' the handle area and easily pulling the cart in that manner.  We're looking into ways of using sturdier 3/4" electrical conduit, in a different configuration, in order to enable this.




