---
layout: front.njk
---

<img src="/img/edge_logo.png" id="profile_pic"/>

<h1> Edge Collective </h1>

<p><b> Technological sovereignty for communities living at ‘the edge’</b> </p>

<!-- <p><a href="http://edgecollective.io">edgecollective.io</a> | contact us at: collaborate @ edgecollective.io</p>-->
<p>::: collaborate @ edgecollective.io :::</p>

----

<h2> What we do ...</h2>

<p>Our mission is to help people gain <b>greater control</b> over their vital <b>food, water, energy, and communications infrastructure</b>. </p>

<p>We do this by: <p>

<ul>
        <li>Developing free, open designs -- software, hardware, mechanical</li>
        <li>Retro-fitting / repairing / enhancing existing infrastructure (e.g. resurrecting bricked 'smart greenhouse' vent motors)</li>
        <li>Teaching and training (videos, online documentation, in-person workshops)</li>

</ul>

<p> Recently, we've focused on:</p> 

<ul>
	<li>Off-grid farming (e.g. monitoring soil moisture, greenhouse temperature)</li>
	<li>Flooding alerts for cities, towns, or boating (sent via email / sms / satellite modem)</li>
	<li>Salinity monitoring for salt contamination of freshwater sources</li>
</ul>

<h2> Designs, Workshops, Software, Hardware ... </h2>

You can find all of our code and hardware designs online [here](https://github.com/edgecollective).


<h2> Let's Work Together!</h2>

<p>We're able to develop and disseminate our designs and documentation to everyone free-of-charge because of contributions (both collaborative work, and monetary!) from folks like you.</p>

<!--- If you'd like to help provide funding, you can <a href="/support">click here</a> to support our work. Thank you! -->
- If you'd like to collaborate on a project, or would like us to design or build something for you, drop us a line at **collaborate@edgecollective.io**.
- If you'd like to help provide funding, you can use our <a href="/support">Open Collective</a> account. Thank you!

<!--
<p>Funding goals: </p>

<ul>
	<li><b>Part-time developer</b> -- $3000 per month or less <b>CURRENT STATUS</b></li>
	<li><b>Full-time developer</b> -- $3,000 per month</li>
</ul>
-->

-----

<h2> Research & Projects </h2>
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

