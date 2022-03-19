import React from "react";
import video from "./../Images/home.mp4"
import "./Home.css"

function Home() {
  return (
    <div className="find">
      
   <div className="job">
   <h1>  Find your job with Us </h1>
</div>      
      
      <video autoPlay loop muted width="100%" style={{position:"absolute",zIndex:"-1",top:"0",left:"0"}}>

    <source src={video}/>

</video>
    </div>
  );
}

export default Home;
