gir# Webpack Babel sourcemap Problem

There are problems when using Chromer devtool break point and Babel loader.
When Babel loader is used, some lines are not breakable.

To reproduce the problem, you just have to uncomment webpack loader and try to set a break point on line 11 in App.jsx.

Build:

npm start

Open index.html in your browser.
