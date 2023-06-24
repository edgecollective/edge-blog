---
layout: front.njk
---

<h1> Edge Collective Field School </h1>
<div id='pullout'>

<div id='intro'>

<!--Workshops, classes, and study groups.-->

</div>
</div>

<div class="posts-area">
{% for fs in collections.fieldschool reversed %}
  <div class="post">
    <div class="project-contents">
      <div class="image">
        <a href="{{ fs.url }}">
          <img src="{{ fs.data.image }}"/>
        </a>
      </div>
      <div class="text">
        <h3><a href="{{ fs.url }}">{{ fs.data.pageTitle }}</a></h3>
        <p>{{ fs.data.blurb }}</p>
        <em>Updated: {{ fs.date | date: "%Y-%m-%d" }}</em>
      </div>
    </div>
  </div>
{% endfor %}
</div>

