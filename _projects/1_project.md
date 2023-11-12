---
layout: page
title: Fit Beyond 50, Blazor Blog
description: A dynamic bloging web app with Blazor Server. 
img: assets/img/Project_BlazorBlog/BlazorBlogExample1.png
importance: 1
category: Work
related_publications: 
---

This is a fitness blog project. It has been created in Blazor Server, Net Core 6 LTS. The idea was to create a web app where the blogger could write up posts, preview then, then publish them without my assistance. This goal as been met and having gone through the process I have thought of so many ways I'd like to make it better in the future!

Features will be added...

<div class="row">
    <div class="col-sm mt-6 mt-md-0">
        {% include figure.html path="assets/img/Project_BlazorBlog/BlazorBlogExample_DropDownComments_ShareButton.png" title="DropDownComments ShareButton" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Users can leave comments on posts. The user account is visible to the author but other users can't see any details. Also this is server side so nothing would be accessible from client side if they did look.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/Project_BlazorBlog/BlazorBlogExample_Database.png" title="Initial Database Diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Above is a database diagram generated from SSMS. I am using the individual user authentication supported by asp net web applications. This was integrated into VS and simple to setup. 
</div>

When thinking of how to let the author login to create blog posts I came up with adding role based authentication to the identity user claims of the user object. This is simple ot add to asp net core we aplications. I hard coded the role to give a role to the author then just changed every consequtive register to be given the role of reader. I am using razor tags throughout the code to check the identity of the user and using its roles to decide what controls to show. 


<div class="row justify-content-sm-center">
    <div class="mt-3 mt-md-0">
        {% include figure.html 
        path="assets/img/Project_BlazorBlog/BlazorBlogExample_EditBlogPost.png" 
        title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="mt-3 mt-md-0">
        {% include figure.html 
        path="assets/img/Project_BlazorBlog/BlazorBlogExample_PreviewPost.png" 
        title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The author can write their post, including html tags for styling. After they are done any part they can scroll down and view what it will look like as a post. This was done by just adding a blazor component I made below the post creator. 
</div>

Also if the author created a post they didn't want to see any more they have the option to delete the post or any comments from their admin page. 

<div class="mt-3 mt-md-0">
    {% include figure.html 
    path="assets/img/Project_BlazorBlog/BlazorBlogExample_DeletePosts.png" 
    title="example image" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
    Everything inside the admin page has been configured with middleware to only show to the user with role of author. This page is not visible to readers or anonimous users and can't be navigated to. 
</div>