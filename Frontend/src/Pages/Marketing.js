import React from "react";
import {Card,Button} from "react-bootstrap";
import ee from "../Images/Electrical.jpg"
import ce from "../Images/computer engineering.jpg"
import ener from "../Images/energetic.jpg"
import tp from "../Images/Topographical+surveyors+in+Edmond.jpg"
import ds from "../Images/Data_Science_Software_Development.jpg"
import Mec from "../Images/Mechanical.jpg"
import Com from "../Images/comptable.jpg"
import ful from "../Images/Full stack.jpg"
import OwlCarousel from 'react-owl-carousel';


import "./Marketing.css"
import { flushSync } from "react-dom";



function Marketing() {
  let data=[{
    img:ee,
    title:"Electrical Engineer",
    description:"electrical engineering to work on wearable and non-wearable devices for health "
  },
  {img:ce,
  title:"Computer Engineering",
  description:"we are looking to hire a C/C++ Software Development Engineer to reinforce our Development Team and offer an opportunity"},
{
  img:ener,
  title:"Energy Engineer",
  description:"  The specialists will implement project activities, coordinate closely with the client and local stakeholders, and work with the program management team based in Tunisia."

},
{
  img:tp,
  title:"Topographer",
  description:" We are a small construction company hoping to hire someone to help with the topographical needs we face."
},
{ img: ds,
  title:"Data_Scientist",
  description:"If this sounds like the role for you and you’re ready to join an amazing team, please share your resume for immediate considerations."

},
{
  img: Mec,
title:"Mechanical Engineer",
description:"The Mechanical Engineer is responsible for assisting in providing innovative and cost-effective solutions requiring the development or sustaining of new or improved techniques, procedures, or products."
},
{
  img: Com,
  title:"Accountant",
  description:"You will work directly in Oracle Netsuite, completing transactions, preparing reports, and interacting with internal and external partners and customers. Building quotes and invoices, purchase orders, applying incoming payments, managing cash positions, paying suppliers will be core to your role."

},
{
  img: ful,
  title:"Full Stack Developer",
  description:"The Developer will use his or her understanding of programming languages and tools to analyze current codes and industry developments, formulate more efficient processes, solve problems, and create a more seamless experience for users. You should have excellent communication, computer, and project management skills."
}

]
  return (
    <div className="offre">
      <h1 className="market">Nos Offres</h1>
      <div className="cards">
      {/* {
        data.map((e)=>(
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={e.img}/>
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            <Card.Text>
              {e.description.slice(0,80)}...
            </Card.Text>
            <Button variant="primary">See More</Button>
          </Card.Body>
        </Card>
        ))
      } */}
<OwlCarousel className='owl-theme' loop autoWidth margin={20} items={3} nav>
   
    {
        data.map((e)=>(
          <div class='item'>
     
     <Card style={{ width: '18rem',height:"25rem"}}>
          <Card.Img variant="top" src={e.img}/>
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            <Card.Text>
              {e.description.slice(0,80)}...
            </Card.Text>
            <Button className="but" variant="primary">See More</Button>
          </Card.Body>
        </Card>
        </div>
        ))
      }
   
</OwlCarousel>;

     </div>
   



















    </div>
  );
}

export default Marketing;
