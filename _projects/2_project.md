---
layout: page
title: Bad USB, Ducky Project
description: Well, I wanted a Ducky Bad USB but could not afford. Long story short here are 2 $5 alternatives w/Arduino, Raspberry Pie 😀
img: assets/img/Gandolf_Thumbnail.png
importance: 2
category: fun
giscus_comments: false
---

Below I have included the video for some of the fun things I got to do with my Bad USBs 👾🤫


<div class="row">
    <div class="col-md mt-5 mt-md-0">
        {% include video.html 
        path="assets/video/PicoPlusArduinoGANDOLF.mp4" 
        class="img-fluid rounded z-depth-1" 
        controls=true autoplay=false %}
    </div>
</div>
<div class="caption">
    An example of using microcontroller, miroprocessor as HUD devices (keybord, mouse, etc.). 
</div>



<div class="row">
    <div class="col-md mt-5 mt-md-0">
        {% include video.html 
        path="assets/video/BruteForceAnderoid.mp4" 
        class="img-fluid rounded z-depth-1" 
        controls=true autoplay=false %}
    </div>
</div>
<div class="caption">
    Brute forcing my Anderoid phone as a proof of concept. 
</div>

Apologies in advance, This one is hard to watch because of my lack of film equipment. The idea is clear through, I am demonstrating I can similarly give commands to a phone with either of these devices. In this example I am using it to wait 30 seconds (lockout period) then to enter passwords. Since on this phone the default is 30s wait and no wipe, and only having 4 digit # password it would take me about ~4 days to brute force. I did skip this part for time sake but can be done. 

<div class="row">
    <div class="col-md mt-5 mt-md-0">
        {% include video.html 
        path="assets/video/ReverseDuckyPlusPersistance_DemoFull.mp4" 
        class="img-fluid rounded z-depth-1" 
        controls=true autoplay=false %}
    </div>
</div>
<div class="caption">
    My desktop is the attack comptuer, using my Kali usb. My laptop is the subject of attack. I create scheduled PS task triggered on login that if listening the attack comptuer can get access. 
</div>

This took a lot of effort on my part and research. In summery there is one setting in windows you have to disable 1 time, could be done with a USB like the other examples. Once this is done I just created a powershell script that pulled some code hosted on my GitHub (could be anywhere), then schedule a task to run triggered by user login. Using someone elses library I can get access to their computer remotely as demonstrated by the remote attack computer (my Kali desktop). I will have the same permissions/access level the logged in user has. 


Since the PC basically thinks the user is typing this through a keyboard is is a great example of why giving a threat actor physical access to a device is a bad idea to say the least. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/roads_example.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/roads_example.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/roads_example.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/roads_example.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal its glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/roads_example.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/roads_example.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>
