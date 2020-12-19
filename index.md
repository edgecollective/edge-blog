---
layout: front.njk
---

<!--<img src="/img/edge_medium.png" id="profile_pic"/>-->

<div id='pullout'>

<!--<img src="/img/edge_flower_medium.png">-->
<img src="/img/ec_flower_logo_small.png">

<h1> Edge Collective </h1>

<!--
*Accessible infrastructure for communities living at ‘the edge'.*
-->

<!--
[Podcast](#podcast) | [Projects](#projects) | [Guides](#guides) | [Presentations](#talks) | [Research](#notebook)
-->

[Projects](#projects) | [Guides](#guides) | [Presentations](#talks) | [Research](#notebook)

<div id='intro'>

[Edge Collective](/about) is a distributed **research**, **teaching**, and **facilitation** cooperative working to help individuals and communities increase the capacity of their vital **food**, **water**, **energy**, and **communications infrastructure** to adapt to challenging environments. All of the research, designs, and code that we produce is [freely available online](https://github.com/edgecollective).  We support our research, projects, and teaching through [donations](https://opencollective.com/edgecollective) and via 'pay-as-you-can' arrangements. 

You can reach us at **collaborate (at) edgecollective (dot) io** -- cheers!

<!-- <p><a href="http://edgecollective.io">edgecollective.io</a> | contact us at: collaborate @ edgecollective.io</p>-->


</div>
</div>

<!--
# <a name="podcast"></a>Podcast


To subscribe, copy the following feed link into your favorite podcast app: ```https://edgecollective.io/podcast/feed.xml```  

And if you'd like to help support our podcast, you can now do so via [Patreon](https://www.patreon.com/edgecollective). Thanks!  


<div class="posts-area">
{% for podcast in collections.podcasts reversed %}
  <div class="post">
    <div class="podcast-contents">
      <div class="image">
        <a href="{{ podcast.url }}">
          <img src="{{ podcast.data.image }}"/>
        </a>
      </div>
      <div class="text">
        <h3><a href="{{ podcast.url }}">{{ podcast.data.pageTitle }}</a></h3>
        <p>{{ podcast.data.blurb }}</p>
        <em>Recorded: {{ podcast.data.updated | date: "%Y-%m-%d" }}</em>
      </div>
    </div>
  </div>
{% endfor %}
</div>
-->

# <a name="projects"></a>Projects

<div class="posts-area">
{% for project in collections.projects reversed %}
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

# <a name="guides"></a>Guides


<div class="posts-area">
{% for workshop in collections.pedagogy reversed %}
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

# <a name="talks"></a>Presentations

<div class="posts-area">
{% for talk in collections.talks reversed %}
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


# <a name="notebook"></a>Research Notebook

<div class="posts-area">

{% for note in collections.notes reversed %}
  <div class="post">
    <div class="note-contents">
      <div class="image">
        <a href="{{ note.url }}">
          <img src="{{ note.data.image }}"/>
        </a>
      </div>
      <div class="text">
        <h3><a href="{{ note.url }}">{{ note.data.pageTitle }}</a></h3>
        <p>{{ note.data.blurb }}</p>
        <em>Updated: {{ note.data.updated | date: "%Y-%m-%d" }}</em>
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
