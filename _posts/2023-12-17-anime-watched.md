---
layout: post
title:  Anime & Cartoons I've Watched
date:   2023-12-22 20:00:00
description: Anime and cartoons are some of the ones that I very much like watching. Some of them are very much thought provoking.
tags: anime, cartoon
categories: thinking
thumbnail: assets/img/Thumbnails/gracia-dharma-qTlbO6mkQH0-unsplash.jpg
---

For anime I like psychological thrillers and cartoons, well I like so many that just make you feel invested in the character's outcome. 

No reason to have this here but whatever lol...

<div class="container">
    <div class="row">
    {%- for show in site.data.shows %}
        <div class="col-md-4">
            <h4>{{ show.title }}</h4>
            {% include figure.html path=show.path title=show.title class="img-fluid rounded z-depth-1" %}
        </div>
    {%- endfor %}
    </div>
</div>

<hr>

Photo by <a href="https://unsplash.com/@graciadharmaa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gracia Dharma</a> on <a href="https://unsplash.com/photos/woman-in-black-shirt-taking-selfie-qTlbO6mkQH0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
  