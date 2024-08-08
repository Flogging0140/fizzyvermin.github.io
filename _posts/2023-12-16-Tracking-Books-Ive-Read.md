---
layout: post
title:  Tracking Books I've Read
date:   2023-12-16 10:00:00
description: Here are some books I've read. I am tracking for myself to see what I read over time and I want to publicly review the notes I get from a book. This is my way of taking good notes, then creating a plan to act which is how to incorporate into life. 
tags: 
categories: 
thumbnail: assets/img/siora-photography-hgFY1mZY-Y0-unsplash.jpg
---

<i>
    Disclaimer: My taste in reading does not reflect that of anyone I am working for or with, thanks. 
</i>

<div class="container">
    <div class="row">
    {%- for book in site.data.books %}
        <div class="col-md-4">
            <h4>{{ book.title }}</h4>
            {% include figure.html path=book.path title=book.title class="img-fluid rounded z-depth-1" %}
        </div>
    {%- endfor %}
    </div>
</div>
<!-- TODO: include year, maybe sort -->

<hr>

Photo by <a href="https://unsplash.com/@siora18?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Siora Photography</a> on <a href="https://unsplash.com/photos/woman-covering-her-face-with-white-book-hgFY1mZY-Y0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  