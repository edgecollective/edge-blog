---
layout: front.njk
---

<!--<img src="/img/edge_medium.png" id="profile_pic"/>-->

<div id='intro'>
<img src="/img/edge_flower_medium.png">

<h1> Edge Collective </h1>

> Climate-adaptive infrastructure for communities living at ‘the edge' -- including rural and off-grid farms, urban areas vulnerable to flooding, and island communities.

<!-- <p><a href="http://edgecollective.io">edgecollective.io</a> | contact us at: collaborate @ edgecollective.io</p>-->

> We'd love to hear from you!  You can reach us at: **collaborate @ edgecollective.io**

<h2> Who we are ... </h2>

We're a distributed R&D, teaching, and training cooperative working to help individuals and communities increase the capacity of their vital <b>food, water, energy, and communications infrastructure</b> to adapt to changing environmental conditions. 

More broadly, our work aims to enhance **local technological sovereignty** (autonomy, control) while also promoting **global technological solidarity** (collaboration, mutual aid).  

<h2> What we do ...</h2>

We work to accomplish our mission by:


- Developing <b>free and open source</b> designs -- software, hardware, mechanical
- **Retro-fitting** / repairing / enhancing existing infrastructure 
- Offering **workshops**, teaching and training (videos, online documentation, remote or in-person meet-ups)



<p> Recently we've been focused on:</p> 

- **Off-grid farming** -- monitoring soil moisture, greenhouse temperature)
- **Flood mitigation** -- designing flood alert systems for coastal or urban municipalities (sent via email / sms / satellite modem);
- **Water quality** -- salinity monitoring to mitigate saltwater contamination of freshwater sources, and to support oceanographic research;
- **Conservation ecology** -- assessing the impact of climate change on various vulnerable species (e.g. diamond back terrapins)

<h2> Designs, Projects, Workshops, Software, Hardware ... </h2>

You can find all of our code and hardware designs online [here](https://github.com/edgecollective). (Not all of it is very well-documented -- sorry, we're working on it :))


<h2>Let's Work Together!</h2>

We are dedicated to creating opportunities for developing and sharing useful knowledge & helping others to do the same. We'd love to hear from you!
<!--- If you'd like to help provide funding, you can <a href="/support">click here</a> to support our work. Thank you! -->
- If you'd like to collaborate on a project, or would like us to design or build something for you, drop us a line at **collaborate@edgecollective.io**.
- If you'd like to help provide funding, you can use our <a href="/support">Open Collective</a> account. Thank you!

<!--
<p>Funding goals: </p>

<ul>
	<b>Part-time developer</b> -- $3000 per month or less <b>CURRENT STATUS</b>
	<b>Full-time developer</b> -- $3,000 per month
</ul>
-->

</div>

-----

<h2> Notes on Current Projects:</h2>
<div class="posts-area">
{% for post in collections.posts %}
  <div class="post">
    <div class="post-contents">
      <div class="image">
        <a href="{{ post.url }}">
          <img src="{{ post.data.image }}"/>
        </a>
      </div>
      <div class="text">
        <h3><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h3>
        <p>{{ post.data.blurb }}</p>
        <em>Updated: {{ post.data.updated | date: "%Y-%m-%d" }}</em>
      </div>
    </div>
  </div>
{% endfor %}
</div>

-----

Edge Collective logo is based on Mike Bostock's ['Radial Dendrogram' visualization](https://observablehq.com/@d3/radial-dendrogram).