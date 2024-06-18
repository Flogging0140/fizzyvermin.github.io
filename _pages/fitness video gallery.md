---
layout: page
title: Fitness Video Gallery
permalink: /fitness-video-gallery/
description: A showcase of some of my acomplishments in the gym, if for nothing more than personal tracking && goals. 
nav: false
nav_order: 2
---

So far I have been working out for a long time. Started back in 2018 I think... 
Started in a abandon high school gym, I think. I will have to ask, I was ~150lbs around that time 🤔

<br />

<div class="grid">
  {%- for workout in site.data.workoutVid %}
      <div class="grid-item">
          {% include video.html 
          path=workout.path
          title=workout.title
          class="img-fluid rounded z-depth-1" 
          caption=workout.caption
          controls=true autoplay=false%}
      </div>
  {%- endfor %}
</div>

<style>
  .grid-item { width: 20vw; }
  .grid-item--width2 { width: 25vw; }
</style>