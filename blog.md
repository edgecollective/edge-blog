---
layout: front.njk
---

<a href="/">Edge Collective</a>

<div class="posts-area">
{% for blog in collections.blog reversed %}
  <article class="post project-card">
    <div class="text">
      <h2><a href="{{ blog.url }}">{{ blog.data.pageTitle }}</a></h2>
      <p>{{ blog.data.blurb }}</p>
      <em>Updated: {{ blog.date | date: "%Y-%m-%d" }}</em>
    </div>
  </article>
{% endfor %}
</div>
