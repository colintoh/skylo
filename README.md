Ember-Brunch
============

Ember-Brunch embodies [modern web development workflow](http://www.youtube.com/watch?v=vDbbz-BdyYc) with the help of brunch.io and the ember.js framework. Having a awesome development workflow is important because you want to:

- ***Reduce*** development time.
- ***Reduce*** bugs.
- ***Reduce*** unneccessary premature hairloss.

What ***Ember-Brunch*** can do for you:

- Organize your javascript files into modules. 
- Prevent pollution of the global scope.
- Front-end MVC framework.
- Auto-detect and prompt JS errors the very moment you save the files.
- Auto-reload the browser everytime you save the files.
- A buffet selection of preprocessors to save development time: LESS, STYLUS, JADE, TYPESCRIPT etc...
- Build a production-ready app with just a single command and be ready to deploy.


Dependencies:
    
  - Install Node.js: http://nodejs.org/download/
  - Install Brunch 1.7.0 (The latest 1.7.1 breaks the build) : ``` npm install -g brunch@1.7.0```
  - Install command line tool from XCode
  - Install scaffolt if you want to use generator: *(Optional but highly recommended)* ``` npm install -g scaffolt```

Getting Started
===========

Create a new app with the skeleton:
```brunch new https://github.com/colintoh/ember-brunch.git [appname] ```

Start the server and watch:
```cd [appname] && brunch watch -s```

Deployment(New)
===========
Build a production folder:
```brunch build -o```

Your app will be compiled and minified into the  ```public``` folder. Upload that folder to any host(S3 etc) and you are done!

Or let ***GRUNT*** do both together for you!

### S3 deployment
1. Install grunt-cli: ```npm install -g grunt-cli```
2. Create a bucket at S3 and set it as static web server.
3. Fill up aws.json with your credentials.
4. In your root directory, run ```grunt deploy``` and your code will be live on your S3's url. :)

File Structure
==============

The ```app``` folder stores all file that you will need to start the project. ```app/helper``` stores all your controller+view files. ```app/templates``` and ```app/styles``` stores your handlebars templates and css respectively.

```templates.js``` and ```helper.js``` contains all the files that you want your projects to import in when the server runs. And lastly, ```router.js``` is where you configure your routing.

Generate scaffold
==================
Without generators, you will have to manually type in alot of repetitive code. With the node module ```scaffolt```, you can easily generate controllers, views and template files and append them to the ```templates.js``` and ```helper.js``` files. 

Let's create a **recipe** controller, view and template with the **class** generator.
Inside your application root directory, type ```scaffolt class recipe``` in your terminal. This will generate:
    
    // Inside helper/recipe.js
    
    var App = require('app');

    App.RecipeController = Em.Controller.extend({
    
    });
    
    
    App.RecipeView = Em.View.extend({
        didInsertElement: function(){
      }
    });

and a template call *recipe.hbs* in the ```template``` folder:

    The name of the template: recipe
    
In your ```router.js``` file, manually append your recipe route:

    App.Router.map(function(){
        this.route('index',{path:'/'});
        this.route('home');
        this.route('nextpage');
        this.route('recipe'); <--------- Insert this line
    });
    
Enter ```localhost:[port-number]/#/recipe``` and you will see your new changes.


Want to know more about Brunch and Ember?
=================================

[Brunch.io](http://brunch.io/)

Brunch is an assembler for HTML5 applications. It is a simple but powerful build process and pipeline. It’s agnostic to frameworks, libraries, programming, stylesheet & templating languages and backend technology.

[Ember JS](http://emberjs.com/)

A framework for creating ambitious web applications.
