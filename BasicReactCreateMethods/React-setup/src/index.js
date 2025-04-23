 import React from "react";
 import ReactDOM from "react-dom/client "

 const heading = React.createElement('h1', {id: 'title'}, "Hello React app");

 const app = document.getElementById('app')

 const root = ReactDOM.createRoot(app);

 root.render(heading)