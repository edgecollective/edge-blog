---
layout: front.njk
---

<a href="/">Edge Collective</a>

<h1>Journal</h1>

{% for journal in collections.journal reversed %}
<b><a href="{{ journal.url }}">{{ journal.data.pageTitle }}</a></b>.
{{ journal.data.blurb }} ({{ journal.date | date: "%Y-%m-%d" }})
{% endfor %}

<!--
<div class="posts-area">
{% for journal in collections.journal reversed %}
  <div class="post">
    <div class="project-contents">
      <div class="text">
        <h2><a href="{{ journal.url }}">{{ journal.data.pageTitle }}</a></h2>
        <p>{{ journal.data.blurb }}</p>
        <p class=project-updated">
        <em>Updated: {{ journal.date | date: "%Y-%m-%d" }}</em>
        </p>
      </div>
    </div>
  </div>
{% endfor %}
</div>
-->
