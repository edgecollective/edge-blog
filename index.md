---
layout: front.njk
---

<!--<img src="/img/edge_medium.png" id="profile_pic"/>-->

<div id='pullout'>

<img src="/img/edge_flower_medium.png">


<h1> Edge Collective </h1>


*Accessible infrastructure for communities living at ‘the edge'.*

<div id='intro'>


[Edge Collective](/about) is a distributed **research, teaching**, and **facilitation** cooperative working to help individuals and communities increase the capacity of their vital **food, water, energy**, and **communications** infrastructure to adapt to challenging environments.

Any of the research, designs, and code that we produce are [freely available](https://github.com/edgecollective) as **Free and Open Source** / **Creative Commons**.

We support our work through [donations](https://opencollective.com/edgecollective), and via 'pay-as-you-can' arrangements. 

<!-- <p><a href="http://edgecollective.io">edgecollective.io</a> | contact us at: collaborate @ edgecollective.io</p>-->




</div>
</div>

# Projects

<div class="posts-area">
{% for project in collections.projects %}
  <div class="post">
    <div class="project-contents">
      <div class="image">
        <a href="{{ project.url }}">
          <img src="{{ project.data.image }}"/>
        </a>
      </div>
      <div class="text">
        <h3><a href="{{ project.url }}">{{ project.data.pageTitle }}</a></h3>
        <p>{{ project.data.blurb }}</p>
        <em>Updated: {{ project.data.updated | date: "%Y-%m-%d" }}</em>
      </div>
    </div>
  </div>
{% endfor %}
</div>

# Workshops and Tutorials


<div class="posts-area">
{% for workshop in collections.pedagogy %}
  <div class="post">
    <div class="pedagogy-contents">
      <div class="image">
        <a href="{{ workshop.url }}">
          <img src="{{ workshop.data.image }}"/>
        </a>
      </div>
      <div class="text">
        <h3><a href="{{ workshop.url }}">{{ workshop.data.pageTitle }}</a></h3>
        <p>{{ workshop.data.blurb }}</p>
        <em>Updated: {{ workshop.data.updated | date: "%Y-%m-%d" }}</em>
      </div>
    </div>
  </div>
{% endfor %}
</div>

# Talks

<div class="posts-area">
{% for talk in collections.talks %}
  <div class="post">
    <div class="talk-contents">
      <div class="image">
        <a href="{{ talk.url }}">
          <img src="{{ talk.data.image }}"/>
        </a>
      </div>
      <div class="text">
        <h3><a href="{{ talk.url }}">{{ talk.data.pageTitle }}</a></h3>
        <p>{{ talk.data.blurb }}</p>
        <em>Updated: {{ talk.data.updated | date: "%Y-%m-%d" }}</em>
      </div>
    </div>
  </div>
{% endfor %}
</div>

<!--
# Notes 

<div class="posts-area">
{% for note in collections.notes %}
  <div class="post">
    <div class="project-contents">
      <div class="text">
        <h3>Note {{ note.data.id }}</h3>
        <p>{{ note.templateContent }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>
-->
