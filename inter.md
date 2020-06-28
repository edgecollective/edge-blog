---
layout: front.njk
---

# Projects

<div class="posts-area">
{% for project in collections.projects %}
  <div class="post">
    <div class="inter-contents">
      <div class="image">
        <a href="{{ project.url }}">
          <img src="{{ project.data.image }}"/>
        </a>
      </div>
      <div class="inter-text">
        <h3><a href="{{ project.url }}">{{ project.data.pageTitle }}</a></h3>
        <p>{{ project.data.blurb }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

# Workshops and Tutorials

<div class="posts-area">
{% for workshop in collections.pedagogy %}
  <div class="post">
    <div class="post-contents">
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

# Workshops, Tutorials

<div class="posts-area">
{% for workshop in collections.pedagogy %}
  <div class="post">
    <div class="post-contents">
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
    <div class="post-contents">
      <div class="image">
        <a href="{{ talk.url }}">
          <img src="{{ talk.data.image }}"/>
        </a>
      </div>
      <div class="text">
        <h3><a href="{{ talk.url }}">{{ talk.data.pageTitle }}</a></h3>
        <p>{{ talk.data.blurb }}</p>
        <em>Updated: {{ workstalkhop.data.updated | date: "%Y-%m-%d" }}</em>
      </div>
    </div>
  </div>
{% endfor %}
</div>

-----

Edge Collective logo is based on Mike Bostock's ['Radial Dendrogram' visualization](https://observablehq.com/@d3/radial-dendrogram).
