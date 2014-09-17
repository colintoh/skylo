Skylo
======

**Required Library**
- Twitter Bootstrap 2.3.2 or Twitter Bootstrap 3.0

**Required Files**

Download [skylo.js](https://github.com/colintoh/skylo/blob/master/vendor/scripts/skylo.js) and [skylo.css](https://github.com/colintoh/skylo/blob/master/vendor/styles/skylo.css). Include them below ```bootstrap.js``` and ```bootstrap.css```  respectively. Check out the examples in the examples folder.

**Demo And Documentation**

[Skylo Demo And Docs](http://skylo.s3-website-ap-southeast-1.amazonaws.com/#/home)

---

Options
--------
    //Default options
    $.skylo({
        state: 'info',
        inchSpeed: 200,
        initialBurst: 5,
        flat: false
    });

```state ["info", "success", "warning", "danger"]``` : Customizes the theme of the progress bar. Uses the same parameters as Bootstrap uses for buttons.

```inchSpeed (ms)```: Determine the speed of the inching motion.

```initialBurst (1 - 100)```: The initial length of the loader that you want to load.

```flat (true/false)```: If ```flat``` is set to true, the animated striped UI of the progress bar will be removed.

---

Methods
-------
```start```: This will initiate the loader with a initial burst of length.

    $.skylo('start');

```end```: The loader will reach 100% and then fade out.

    $.skylo('end');

```set(width)```: The loader's width will be animated to the percentage stated. Ranges from 1 - 100.

    $.skylo('set',50); //Set width to 50%

```get```: Returns the current loader's width percentage.

    $.skylo('get');

```inch```: Loader will inch forward according to the parameters set.

    $.skylo('inch',10); //Inch forward by 10%

```show(callback)```: Loader will be inserted into the DOM and a callback function will be called.

     $.skylo('show',function(){
        //After inserting Loader, animates width to 30%
        $.skylo('set',30);
     });

```remove```: Remove Loader from the DOM. Normally unused. Just use ```end`` method to complete the animation.

    $.skylo('end');

---

Credits:
--------
Thanks to [2359 Media](http://2359media.com/) for providing the space and time for me to finish this plugin.