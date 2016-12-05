# threejs-typescript

A skeleton project for writing threejs demos/games/etc in TypeScript.

## Setup

    git clone git@github.com:mwcz/threejs-typescript.git
    cd threejs-typescript
    npm install

## Development commands

Start a development environment with automatic rebuilding and BrowserSync:

    npm run watch

BrowserSync will automatically reload your browser when files
change.  No more manual refreshing!  You can open the game in multiple browsers
and they will all be refreshed together.  Clicks will also be synchronized so
you can test the game in several browsers at the same time.

To create a build in the `build/` directory:

    npm run build

## Working with TypeScript

If you haven't worked with TypeScript before, get excited!  Try out the
[official tutorial][tut].

The type definitions of external libraries are managed with `typings`.  Type
definitions for both three.js and Lodash are included as examples, see
`typings.json`.  Try `typings search` to find type definitions for other
libraries.

## External libraries

Two external libraries are included in this project: three.js and Lodash.
They're both loaded from a CDN, for simplicity (no bower/webpack/browserify).

To include additional third party libraries, follow these two steps:

 1. add it to the `paths` object in index.html
 2. find and install its type definitions using `typings install
    theLibName`*, then you can `import` it into any .ts file, and make full
    use of its handy type definitions.
 3. find it on cdnjs.com and add the path to `index.html`

(*) If no type definition exists for the lib you want, you can still use it, just
include `declare let MyLibName: any;` instead of importing it.  You won't get
the benefits of static typing, but the lib can still be used.

[tut]: http://www.typescriptlang.org/docs/tutorial.html
