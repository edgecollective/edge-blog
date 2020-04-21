---
pageTitle: GROUND 
layout: roadmap.njk
---
  <div id="content">
    <div id="header">
      <img class="logo" src="/img/roadmap/edge.svg" alt="peermaps">
      <div class="links">
        <div>
          <a href="https://github.com/edgecollective">GROUND on github</a>
        </div>
      </div>
    </div>
    <!--<div class = "section">
gritty resilient open un-interruptible network design</br>
land -- local-first accessible network design </br>
<b>G</b>ritty <b>R</b>ural <b>O</b>pen <b>U</b>n-interruptible <b>N</b>etwork <b>D</b>esign</br>
    </div>-->
    <div class="section">
     <b>GROUND</b> is an approach to the design of sensor and communications networks that is focused providing farmers, land and water resource managers, and environmental researchers with more flexible, resilient, and accessible sensor network capabilities.
    </div>
    <div class="section">
     <b>Open, Collaborative, & Non-Proprietary</b>. We are curating, documentating, and developing a collection of FOSS (Free and Open Source), accessible, interoperable software and hardware designs that will enable farmers and land & water resource managers to gain greater control over their sensor data.  Sometimes this means simply producing better documentation (how-to guides and training videos) for existing, useful software and hardware; in other cases, it may require novel software and hardware development.
    </div>
    <div class="section">
     <b>'Local-First' Data</b>. In our approach, sensor and communications data are always immediately stored locally, on-site, and are always locally available -- even if the internet is currently not. (This approach to data storage has recently been termed 'local-first' -- see references <a href="https://www.inkandswitch.com/local-first.html">here</a> and <a href="https://www.digital-democracy.org/blog/localfirst/">here</a>.) Data can then be selectively shared at the user's discretion with others (local and remote) through a variety of methods and formats.
    </div>
    <div class="section">
     <b>Free and Open Source Hardware</b>. We are also curating and developing a set of FOSS sensor hardware designs.  Our aim is to find, document, or develop sensor hardware that enables users to have maximum flexibility with respect to supply chains -- including the option to produce (and sell) the hardware themselves.
    </div>
     <div class="section">
     <b>GROUND</b> is an alternative to most commercially-available networked environmental monitoring systems, which usually store data exclusively in  'the cloud', don't usually allow users to store and access their data locally 'offline', and use proprietary software hardware designs that are difficult or impossible to extend or modify. 
    </div>
    <div id="content">
    <div id="header">
      <img class="logo" src="/img/roadmap/modules.svg" alt="peermaps">
    </div>
    <!--
    <h1><a name="GROUND Components" href="https://peermaps.org/#support-us">GROUND Components</a></h1>-->
    <div class="section">
      Below are descriptions of designs we've curated and developed for various components of a sensor system that uses a GROUND approach:
    </div>
       <div class="project">
      <div class="logo">
        <a href="ttps://edgecollective.io"><img src="/img/roadmap/baseStation_c.gif" width="150px" style="padding-top: &gt;20px"></a>
      </div>
      <div class="desc">
        <div class="row">
          <div class="title">
            <a href="ttps://edgecollective.io">Gateway / Hub Designs</a>
          </div>
           <div class="status"><img src="/img/roadmap/developing.svg" alt="in development" title="in development"></div>
        </div>
        A GROUND Gateway / Hub is a single-board computer (like the Raspberry Pi) that serves as a 'gateway' or 'hub' for sensor or communications data -- it stores data locally to disk, and presents the data to the user locally as graphs, CSV, or JSON; and forwards it to the cloud (if possible / desired).  We are curating and developing hardware and software for this purpose. 
      </div>
    </div>
    <div class="project">
      <div class="logo">
      <a href="ttps://edgecollective.io"><img src="/img/roadmap/feather_milled_c.gif" width="150px"></a>
      </div>
      <div class="desc">
        <div class="row">
          <div class="title">
            <a href="ttps://edgecollective.io">Relay Designs</a>
          </div>
          <div class="status"><img src="/img/roadmap/alpha.svg" alt="alpha release" title="alpha release"></div>
        </div>
        A 'relay' in this context refers to a microcontroller 'node' in the field that captures data from a sensor (temperature, light, humidity, etc) and relays it to the on-site Gateway / Hub.  There are already some quite effective third party low-cost, open source relays that for which hope to provide better training and documentation than currently is available; we are also developing some designs of our own that we think fills in some gaps in functionality.
      </div>
    </div>
    <div class="project">
      <div class="logo">
      <a href="ttps://edgecollective.io"><img src="/img/roadmap/moisture_c.gif" width="150px"></a>
      </div>
      <div class="desc">
        <div class="row">
          <div class="title">
            <a href="https://edgecollective.io">Sensor and Actuator Designs</a>
          </div>
          <div class="status"><img src="/img/roadmap/alpha.svg" alt="alpha release" title="alpha release"></div>
        </div>
        Sensor selection, calibration, and data interpretation is less trivial than it first appears.  We are hoping to de-mystify the use of the more common sensors in land and water management (temperature, soil moisture), develloping training curricula and protocols and curating best practices. In a few cases we might develop our own sensors as well. 
      </div>
    </div>
    <div class="project">
      <div class="logo">
        <a href="https://edgecollective.io"><img src="/img/roadmap/laptop.svg" width="150px"></a>
      </div>
      <div class="desc">
        <div class="row">
          <div class="title">
            <a href="https://edgecollective.io">Getting Started Guides and Video Tutorials</a>
          </div>
          <div class="status"><img src="/img/roadmap/developing.svg" alt="in development" title="in development"></div>
        </div>
       Despite the large number of emerging software and hardware options for effectively monitoring land and water resources, existing documentation is often spotty, inconsistent, or incorrect.  We hope to develop accessible how-to guides and video tutorials to lead newcomers through the process of setting effective up sensor networks.  
      </div>
    </div>
    <div class="project">
      <div class="logo">
        <a href="https://edgecollective.io"><img src="/img/roadmap/swarmhead.svg" width="150px"></a>
      </div>
      <div class="desc">
        <div class="row">
          <div class="title">
            <a href="https://edgecollective.io">Workshop Curricula</a>
          </div>
          <div class="status"><img src="/img/roadmap/developing.svg" alt="in development" title="in development"></div>
        </div>
        We have run several peer-learning workshops focused on sharing best practices in land and water resource monitoring.  We'd like to develop curricula and pedagogical materials that would enable others to run similar workshops in their local communities.
      </div>
    </div>
    <h1><a name="support-us" href="http://opencollective.com/edgecollective">support us</a></h1>
    <div class="section">
      If you'd like to support our work, we have
      <a href="http://opencollective.com/edgecollective">an account on opencollective</a>
      where you can help fund development.
    </div>
  </div>
  <div id="footer">
    <div>
      GROUND is a project of <a href="https://edgecollective.io">edgecollective</a>
      <span class="about">[<a href="https://edgecollective.io/#about">about us</a>]
    </span></div>
    <div>
    </div>
  </div>

