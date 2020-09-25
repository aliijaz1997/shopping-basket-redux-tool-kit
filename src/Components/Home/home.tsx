import React from 'react';
import "./home.css";
function Home() {
  return (
   <div>
     <div className = "heading" >
      To welcome Summer We are going to launch amazing stuff
      Click the product button top right to see the collection
       </div>
       <div >
      <img  width="600" height="400" className = "image" alt = "clothes" src = "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
      </div>
   </div>
  );
}

export default Home;
