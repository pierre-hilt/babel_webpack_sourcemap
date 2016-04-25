# Webpack Babel sourcemap Problem

There are problems when using Chromer devtool break point and Babel/webpack.
When Babel is used, some lines are not breakable.

This simple project has been created to reproduce the problem.

## start

npm install
npm run build-sm

Open index.html in your browser.

This will generate source maps from Babel, use them in entry and create the final source map.
In App.jsx, line 6 is not breakable.
I also tried to use directly babel loader plugin.
