#PotatoFlickr

> A feed built using AngularJS that pulls in photos from Flickr with the tag "potato"

### Built using AngularJS, Browserify and BourbonNEAT.

My first experience of using Angular outside a tutorial environment, and my first ever experience of Browserify.

I wanted to experiment using NPM as my build tool, which made a tool like Browserify necessary to manage the concatenation of the JS. You'll see in the package.json that I've included a number of useful scripts to both provide a simple development environment and build. 

More information about using NPM as a build tool can be found here: [Keith Cirkel - How to Use npm as a Build Tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) where there is more info about minifying, using live-reload, linting/testing and a whole host of other tools. I omitted them from this project for simplicity and brevity.

**NOTE:** I would probably use more conventional tools in future such as Grunt, Gulp or Brunch; as I feel that although more complex, they are a better solution to the problem.

BourbonNEAT was included as it's my library of choice to assist with mixins, includes and grids. It's very simple to implement, and you can use as much or as little of it as you like. It's main purpose on this project was providing breakpoints that are simple to implement.

### I currently have the site hosted on my test server. [Click here to view live site](http://test.tactically-creative.co.uk)

#### Use it yourself!

Clone the repo:

	git clone https://github.com/TacticallyCreative/PotatoFlickr.git

Change directory:

	cd PotatoFlickr

Install npm dependencies:

	npm install --save-dev

Build the site:

    npm run build

Build & watch the site:

	npm run build:watch

Various other commands can be run for building/watching the CSS & Javascript individually. Please see the package.json for details.
