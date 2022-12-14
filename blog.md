---
layout: front.njk
---

<a href="/">Edge Collective</a>

<div class="posts-area">
{% for blog in collections.blog reversed %}
  <div class="post">
    <div class="project-contents">
      <div class="text">
        <h2><a href="{{ blog.url }}">{{ blog.data.pageTitle }}</a></h2>
        <p>{{ blog.data.blurb }}</p>
        <p class=project-updated">
        <em>Updated: {{ blog.date | date: "%Y-%m-%d" }}</em>
        </p>
      </div>
    </div>
  </div>
{% endfor %}
</div>
