---
layout: page
title: Bad USB, Ducky Project
description: Well, I wanted a Ducky Bad USB but could not afford. Long story short here are 2 $5 alternatives w/Arduino, Raspberry Pie 😀
img: assets/img/Gandolf_Thumbnail.png
importance: 2
category: School
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

My slides for this fun project can be found below. 

<b>Note: </b><i>These were proof of concept projects, everything was done on my hardware, I am not condoning or recommending this and neither was the assignment. In fact I did this responsibly with the freedom of topics I was given.</i>

<i>Below are the slides I created. The videos should not work unless you view it <a href="https://docs.google.com/presentation/d/1W2ecQoQON7yraziY6Ja600XYWgqb7X1nyP8KQ3nhXIE/edit?usp=sharing" target="_blank">here</a>. Starting page 15 are the resources and attributes for the project work 👍</i>

<iframe class="w-max" src="https://docs.google.com/presentation/d/e/2PACX-1vTDd3jQpdXg1o7PcCGK0yr7_9lkatLNntXh0IJ8xGRAakqKhsiWxw6XIcNlkEch-L9AiHRJyn7yg1bq/embed?start=true&loop=true&delayms=3000" frameborder="0" 
allowfullscreen="false" mozallowfullscreen="false" webkitallowfullscreen="false">
</iframe>



