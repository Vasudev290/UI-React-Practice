# Namaste vasu React 🚀


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



 Two types of Export/Import


- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()



#  2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing


EP-7
----
 # ComponentLifeCycle Methods

Main of Mounting 
====== == ======
Render Phase
1. Constructor
2. Render

Commit Phase
3. UpdateTheDOM Manipulation
4. ComponentDidMount use Case (Fetching API)


# Activity for adding another Component

  -Parent Constructor
  -Parent Render
    -first Constructor
    -first Render

    -Second Constructor
    -Second Render

    -First componentDidMount
    Second ComponentDidMount

  -Parent ComponentDidMount


--------Mounting----------

Constructor (dummy)
Render (dummy)
    <HTML Dummy>

    ComponentDidMount
      <API Call>
      <this.setState>

----------Updating-----------
when the setState is called react trrigger the Recounilisation (React Fiber)

-render (API Data)
-The React Updates the DOM
   -<HTML> (new API data loaded)
   componentDidUpdate 

------------UnMounting---------------

When we go to another component or another page the ComponentWillUnMount is called!

In Functional component
return () => {
  cleanUpId()
}


# Optimising our App
 1, Chunking
 2, Code Spliting
 3, Dynamic Bundling
 4, Lazy Loading
 5, on Demand Loading
 5, Dynamic import


 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector


# Types of testing (devloper)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom
 

