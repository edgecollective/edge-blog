---
pageTitle: UMass Amherst -- Ventilation & Filtration
layout: layout.njk
date: 2021-11-02
tags: talks 
updated: 2021-11-02
image: img/umass/co2.png
blurb: UMass Amherst Physics STEM Seminar Nov 2, 2021-- building Corsi-Rosenthal boxes and learning about DIY ventilation assessment and 
---

---

# Corsi-Rosenthal Build Event at UMass Amherst 2001-11-02

[![](/img/umass/build.png)](https://photos.app.goo.gl/4cduJ3nEEm5MQETn7)

# STEM Presentation: DIY Ventilation Assessment & Air Filtration 

Recorded presentation:

[![](/img/umass/video_present.png)](https://umass-amherst.zoom.us/rec/play/hfFMsi-lWHGqbeDtMEeEd5dSZKtj4MFNeMhKBToh2MGs2XdAtmAfZCfBwjwqrG3XDzDxc1i6hOj7tuFf.4RFHGoEoUL3275dp?startTime=1635882972000&_x_zm_rtaid=cbvl_rk0SK29sl8A_OK4-Q.1635953240619.eb30c8af46deb90815bbc3235ae12405&_x_zm_rhtaid=339)

---

# Slide Deck (PDF)

<!--
[![](/img/co2/umass_cover.png)](/img/co2/ec_co2_corsi_umass_physics_2021_11_02.pdf)
-->

<a href="/img/co2/ec_co2_corsi_umass_physics_2021_11_02.pdf"><img src="/img/co2/umass_cover.png" width=400></a>

---

# Notes from presentation

COVID is airborne.
The intuition should be: cigarette smoke, avoiding second-hand smoke.

Complications: 
We don’t know if there’s a smoker in the room, and we can’t smell it. But you now have an intuition -- if you were worried about secondhand smoke, you’d know that someone on the other side of the room can still be a problem if all the windows and doors are closed and the ventilation is poor.  You’d also know that it can still be an issue if a smoker was recently in the room.
The other complication is that folks are wearing masks.  This helps significantly.  But it’s not foolproof -- [show graphic].  Most folks are wearing cloth or surgical masks.  So, what are the other knobs we can turn to reduce risk?  Ventilation and filtration. That’s what we’ll focus on here.

First: very few known cases of COVID transmission outdoors.  So, the biggest knob to turn, if we can, is to be outdoors.  If possible, at least do meals (when you’re unmasked) outdoors.  

But if you have to be outdoors, then we want to make the ventilation as safe as possible.  Of course, there are limitations -- we might be heating the air, and maybe we can’t afford to open all the windows and doors *and* maintain a certain temp (aside:  long underwear!)  (STEM: energy calculations here)

So, what conditions indoors should we aim for? How can we know how far away we are from them? 

Let me introduce a concept here:  ‘air changes per hour’.  Think of it as the number of times per hour that there’s a room’s worth of flow into the room.

There are converging lines of evidence that 6 ACH or more is a good target for indoors.  Without going into it -- hospital patient rooms; HSPH recommendation.  Studies of rates of ventilation indoors and infections that occurred in various parts of hospitals.  Also: 10 L / s / person has been a standard for a while.  Recently, there’s modeling that indicates that when people maintain > 2m distance indoors, 10 L / s / person inhalation risk isn’t very different from outdoors; and for a typical size classroom (180 m**3) of 30 people, 10 L / s / person is indeed 6 ACH.  So, for now, let’s just take 6 ACH as a good target (but really, as much as you can afford to do!).  HSPH also suggests that much lower than 5 ACH isn’t good.  

(wells-riley)

Now, with ACH in mind, another core concept is that airborne contaminants are cleared as an exponential process. Derivation -- final equation.  

Now, if you’re trying to assess indoor ventilation rates, you can use a balometer.  But another nice trick is to use a ‘tracer gas’ method.  In essence, you introduce a contaminant, and then measure its concentration over time.  What you then get is an exponential decay down to whatever steady state you expect (in our case, atmospheric).  (show Dinsmore initial experiment).  You can fit an exponential to this; if the time axis is in hours, you can then consider the rate to be an estimate for ACH.  

Caveats: HVAC zones.  Nearby empty classrooms or full classrooms. Then the mass balance derivation is more complicated.  Need to look into this to see how much it would impact the estimate. 

Folks are using CO2 monitors in classrooms already. (Aside: instantaneous PPM useful when very low (< 800 ppm, ventilation probably good enough) or very high (above 1500 ppm, not good); but intermediate is hard to interpret.)  Very commonly used one: aranet4. Phone bluetooth app.  [demo of github.io aranet4 code -- show that open source.  STEM:  code this.  Add some explanatory material; should be able to change the assumed steady state CO2 ppm]

But we can do better.  Open hardware. (pvos.org)   Easy to assemble. Board design avail online.  In Belfast, they’ve used one of these systems in an engineering class, where they’ve been working on Arduino programming  [show Belfast decays, including with windows].  Circuitpython. Credentials just edit-on-the-board as a USB drive (UF2 system).  Also: bayou.pvos.org is easy to set up (demo).

General idea: a lending library for CO2 monitors -- they can be given out, with remote instruction.  This has sort of been tested in Belfast and in Hasbrouck. 

Now I’d say: useful to assess ventilation in order to try to understand it. Perturbing system can give great insights. Learn about measurement error.  Flows, mass balance.  But in the end the reality is a) not always easy to interpret at first, and b) not always possible to change (can’t open windows or doors).  

So: filtration -- passing air through filters that can remove virus. When you know CADR, you can then estimate equivalent ACH, or eACH.  Folks already have one or two installed in a classroom.  Issue: not all of them have specs that can be trusted; often they’re not within budget.  Reason for DIY:  you know the ingredients. You can test them. Can get more performance per $ (see review).  

Basic initial idea was: put a filter in front of a fan. It works.  But Corsi-Rosenthal came up with a better version:  a box of filters.  Better because: more surface area, less strain on fan motor, greater flow.  Review of basic design. Key points:  filters are directional; make sure you’ve got a seal. Point upwards. Fan shroud (reverse air flow phenomenon at corners).  Measure cadr (and test reverse air flow).  Can then use this to estimate eACH.  Then you can figure out how many to put in classroom.  

STEM ideas:  visualizing and measuring air flows.  Building and improving electronics. Same system can be used in several other contexts -- flooding, farming, outdoor navigation, etc (show edgecollective ideas).  

# Misc notes

## Why ventilation and filtration?

- COVID is airborne.
- So are a bunch of other diseases.
- Our infrastructure is 'behind the times'
- Our intuition is often wrong about airborne disease.
- Show how cigarette smoke is the right idea.
- There are a few ways to address this. 
- Mask (lego people mask)
- Distance (can help, but isn't perfect -- show graph).
- Improve indoor ventilation via HVAC (if recirculation, then filtration).
- Improve indoor ventilation via windows and doors.
- Clean the air inside the room. 

To some extent, we just want to reduce risk as much as possible. Hard to quantify / know the 'absolute risk'.

Often, folks are masked, distancing.  Opening windows might not be allowed, or might not improve much.  HVAC isn't within their control.  So: indoor filtration systems.  

The Corsi design is low-cost. It's been vetted fairly well now.  It's better vetted than many of the commercial designs out there.  It's built from known materials. We can tweak it, improve it. It's high bang-for-buck.  So, let's build some.  We can estimate how much they'll help indoors, in terms of ACH.

---

# Ver 2

## Why ventilation and filtration?

## Basic background on indoor ventilation

- HVAC system
- far-field transmission
- near-field transmission (distancing)
- vents, windows, doors
- filtration / purifiers
- buying devices that don't always work
- not always able to open windows or doors
- ACH

So: we want to know:
1. how bad it is
2. how to improve it as much as possible

## But: initial interventions
- Mask. Distance.
- Increase ventilation as much as possible.
- Ideally: outside, if you're worried. Especially when unmasked for lunch.
- This still leaves a lot of people indoors.

## Standard metric for ventilation: ACH
- mass balance, contaminants
- how long it takes to remove X% of contaminants in room

## Ways to assess ventilation 
- If you can ...
- Good to know if school knows already.
- CO2 tracer gas method is pretty effective (with caveats). 
- More involved methods described in HSP's doc. 
- Will say more about how we're trying to make tracer method easier with open software and hardware. 

## Install filtration
- We can estimate how impactful in terms of eACH.
- Might as well boost to max you can afford / stand / practical.
- Then if you find #s are low, or ventilation is great, can back off.

## Corsi-Rosenthal Box 

- Placing filters on fan is old idea. Issue: strain on fan, reduced air flow.
- Corsi suggestion: build a 'box' made of filter materials.  Increased surface area means increased flow, reduced strain on fan, more air filtered, more effective. 
- Suggestion is that MERV-13 is fairly optimal; MERV-11 also effective. 
- Rosenthal built, evaluated, added some tweaks.

## Box Design
- Fan on top
- Filters on sides 
- Can also add to bottom, with little stilts.
- Best to point air flow up re: circulation in room.
- Best to place away from walls.
- Avoid leaks.
- Shroud.

## Shroud
- Reverse air flow at edges
- Block with tape or cardboard.

## Corsi Box effectiveness
- Typical metric is 'CADR' in cubic feet per minute. 
- I.e. -- how much air is cleaned per minute.
- If you know the volume of the room, and efficiency of filters, you can then estimate an equivalent air changes per hours.
- Efficiency of filters -- not virus size, but size of particles on which virus tends to hitch a ride. Some debate on proper number. Can be conservative for now.
- Example calculation. How it boosts your ACH.

## STEM ideas
- visualization of aerosols
- energy expenditure / units / metrics
- HVAC systems -- mapping out, alternatives
- air flow -- anemometer
- monitoring -- electronics, measurement
- exponential fitting / modeling
- risk modeling

<div class=frame>
    <span class="helper"></span>
    <img class="present_img" src="/img/co2/two_buttons.png"  />
    <span class="helper"></span>
    <img class="present_img" src="/img/co2/two_buttons.png" />
    <span class="helper"></span>
    <img class="present_img" src="/img/co2/two_buttons.png"  />
</div>
