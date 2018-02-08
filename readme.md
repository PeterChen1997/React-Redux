# React + Redux Learning Files

Here is the Redux Learning route from [Wes Bos's Course](https://learnredux.com/). It's really a wonderful course and really appreciate it.

> The app is a online order system, build with React + Redux

Online Github Page: https://peterchen1997.github.io/ReduxApp/


## File Structure

- REDUXAPP (the project source file)
  - client/ (the front end project files)
    - actions/ ()
    - data/ (the comments and posts data)
    - reducers/ (the redux reducers folder)
    - styles/ (the styl in the project)
    - reduxstagram.js (the entry of this project)
    - store.js (the redux store file)
  - package.json
  - devServer.js (the local server for hot loading)
- The Github page
  - dist (the run build sources)
  - index.html (the default page for github)
  - 404.html (the simple way to solve the route problem in github page)

## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.
