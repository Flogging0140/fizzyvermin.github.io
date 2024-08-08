---
layout: page
title: BubbleSort Chart
description: Using Javascript to sort through elements in a website w/BubbleSort. Chart.js used to display how the algorithm working visually. 
img: assets/img/JsBubbleSortDemoScreenshot.png
importance: 2
category: Personal
---

### Highlights

- BubbleSort Algorithm
- Javascript
- Chart.js
- Azure Static Websites

[YouTube Project Tutorial](https://youtu.be/pF7amXdL8Lc)

[Azure Static Hosted](https://kind-pebble-0dcbb7510.4.azurestaticapps.net/)

[GitHub Repo](https://github.com/Flogging0140/JsBubbleSort)


### Part 1 (HTML)

I wanted something to show what an algorithm was doing. It is better to see something visually. Also, I learned by doing so this was a fun way to spend my Saturday. I started by adding the basic HTML to my index page. Big fan of Emmet so I was def using it; great imo as a time saver. Keeping the HTML simple and not bloated was imp to me as I wanted to show it in a YT video tutorial. 

Styles were added, consisting of 1 selector and some inline styles. Starting I chose to add hard-coded elements in my container to sort. I ran into a problem switching elements so decided to just switch their inner HTML property. Finishing off the first part, I added buttons to trigger our JS methods. 

```html
<style>
    #container .thing {
        display: inline-block;
        background-color: azure;
        padding: 10px;
        margin: 5px;
        border: 1px solid grey;
        border-radius: 25%;
    }
</style>
```

Try the project for yourself on Azure, follow along with the creation in the YouTube tutorial, or contribute features/fixes to the public GitHub repo. 

 
### Part 2 (Javascript)
Adding JS was all about the functionality. Just using Vanilla JS was simplest as I could add to a static web app in Azure later with minimal hassle and maximum simplicity. I had been reading about BubbleSort in a book, '[A Common-Sense Guide to Data Structures and Algorithms](https://a.co/d/8zodL2p)'. After seeing it in an example talking about time complexity I wanted to really do something to learn about it. I landed on coding it up and displaying it on a graph, which updates, to see how it worked. 

As a challenge to myself I didn't copy paste from Geeks for Geeks reference, I instead read the pseudo code, then just used the bullet points on Geeks for Geeks so I understood what the goal and steps were without looking at code while writing. 

We start off by getting all the elements in our container.
```js
let elementArray = document.querySelectorAll('#container .thing');
```

Since the time complexity was O(N^2) I guessed it was nested loops. Below is our first loop. The goal is to loop for the length of the array, and if we finish without needing to sort each (worst case) then we break. We also wanna call our UpdateChart method. Chart.js makes it easy to have great animations. We use a sleep function that I will cover later. 

```js
for (let i1 = elementArray.length - 1; i1 > 0; i1--) {
    swapOccurred = false;
    
    ...

    // Update chart with #'s array, pause
    UpdateChart(Array.from(elementArray).map(e => parseInt(e.innerHTML)));
    await sleep(0.1);

    // No swaps mean everything sorted
    if (swapOccurred == false) {
        document.getElementById('container').style.background = 'blue';
        console.log('Finished')
        break;
    }
}
```
In our second loop, we go from left to right. I declare and instantiate the 2 elements I will be comparing from the array. It just now occurred to me I could have probably omitted the 'undefined' check since I was using .length - 1; I may check later if I refactor. We compare the inner HTML of the elements. As I mentioned swapping the elements themselves was giving strange issues and this was simpler for the demo. I use a placeholder variable to swap the elements properly. 

Setting 'swapOccurred = true' here means if we don't step into this block then when we exit the nested for loop we will break the parent for loop. This is by design bc if we don't do any swaps in a pass, still having x iterations left then we can stop early. 

```js
// Loop to compare and swap elements
for (let i2 = 0; i2 < elementArray.length - 1; i2++) {
    let e1 = elementArray[i2];
    let e2 = elementArray[i2 + 1];
    if (e2 == undefined) continue;

    // Switch 2 elements if greater
    if (parseInt(e1.innerHTML) > parseInt(e2.innerHTML)) {
        let placeHolder = e2.innerHTML;
        e2.innerHTML = e1.innerHTML;
        e1.innerHTML = placeHolder;

        swapOccurred = true;
    }
}
```
For the descending version of the method I only had to change 2 things. I should have considered making this less DRY but for didn't want to fuss at the time. 

Change 1 - Loop from right to left.


```js
// From right to left
for (let i2 = elementArray.length - 1; i2 > 0; i2--) {...}
```

Change 2 - Get left element, one on right. 

```js
...
let e2 = elementArray[i2 - 1];
...
```
Once here I wanted to stager the iteration timing. This would make it more visually appealing as I could see the changes. After some testing with 'SetTimeout' I found out it is async and was being stepped over before finishing executing. My solution at the time, which probably should not be used in practice, was to add a method that I think was thread blocking. 

It was from the site [here](https://www.sitepoint.com//delay-sleep-pause-wait/). I used this because 'Many programming languages have a sleep function~', '~JavaScript lacks this built-in feature'. 

```js
// https://www.sitepoint.com//delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
```
After running the code w/only ~5 elements I wanted more. I read the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) for adding elements as I was not sure how to add elements to a div. I leveraged [W3 Schools](https://www.w3schools.com/JS/js_random.asp) reference material to get a random whole number from JS. 

The process was straight forward. Get random #, create our div, add a class, create our txt, add the txt to our div, and add our div to the container. Simple! I do think it could be more simplified...

```js
// Create Div elements with random #s, add random # to container
function CreateThings(numberToCreate, maxNumberValue) {
    for (let i1 = 0; i1 < numberToCreate; i1++) {
        let randomNumber = Math.floor(Math.random() * maxNumberValue);
        let ourDiv = document.createElement('div');
        ourDiv.classList.add('thing')
        let ourTxt = document.createTextNode(randomNumber);
        ourDiv.appendChild(ourTxt);
        document.getElementById('container').appendChild(ourDiv);
    }
}
```
Lastly, I wanted to do some things when the window loaded. I call CreateThings here and decide how many and what the max will be for my 'things', afterward creating the chart. 

```js
// Create initial 100
window.addEventListener('load', (event) => {
    console.clear()
    CreateThings(50, 100);
    CreateChart();
});
```

### Part 3 (Chart.js)

We have to add a canvas to our HTML page. I chose to add some inline styles to make it show a bit more how I wanted. Also, I added the script tags to link my 'chartScript.js' && 'script.js' && Chart.js CDN to my HTML page. 

```html
<div style="padding: 50px;margin: 0 auto;height: 80vh;">
    <canvas id="myChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="./chartScript.js"></script>
<script src="./script.js"></script>
```
I just created 2 functions, to create and update our chart. The 'data' param, if you recall, is what gets passed in as an array of the parsed integers. 

```js
function CreateChart() {...}
function UpdateChart(data) {...}
```

Chart.js makes the process very simple and seamless to update the chart values, also add animations. All I had to do was get my chart instance, get my first and only dataset to the passed-in values, and call update!

```js
let myChart = Chart.getChart('myChart');
myChart.data.datasets[0].data = data;
myChart.update();
```

For creating the chart we get the canvas and use it to create a chart configured w/options. Here, also, I am selecting the element array as strings, which are used as labels, and as integers for the data property. Since I am more familiar with C# I described the JS 'map' function as similar to 'Select' in my video tutorial. 

```js
...
const ctx = document.getElementById('myChart');
let elementArray = document.querySelectorAll('#container .thing');
let unsorted = Array.from(elementArray).map(e => e.innerHTML);
let unsortedNumbers = Array.from(elementArray).map(e => parseInt(e.innerHTML));
```

To create our chart we can just copy the starting code from the [Chart.js docs](https://www.chartjs.org/docs/latest/). I chose to leave the type as 'bar', however, there are many other options. 

```js
new Chart(ctx, {
    type: 'bar',
    data: {
        ...
    },
    options: {
        ...
    }
    });
```

The data property was set to their object. Very chill. Colors were from [this cool free cool](https://coolors.co/).

```js
data: {
    labels: unsorted,
    datasets: [{
        label: 'Data',
        data: unsortedNumbers,
        borderWidth: 1,
        borderColor: 'rgb(87,226,229)',
        backgroundColor: 'rgba(224,141,172, 0.5)'
    }]
}
```

The options did require some more research. [this stack post](https://stackoverflow.com/questions/40594025/chart-js-aspect-ratio-forced-height) was where I found how to break the aspect ratio. I set the 'x' axis to not display as there were some issues with setting the titles that were inaccurate after updating (because I didn't change them) but the labels were accurate. I used 'callbacks' to customize the method returning the title, just choosing to omit/nullify the value. 

```js
options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        },
        x: {
            display: false
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            callbacks: {
                title: function (TooltipItem) {
                    return '';
                }
            }
        }
    }
}
```