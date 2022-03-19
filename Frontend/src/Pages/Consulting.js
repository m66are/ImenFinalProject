import React ,{useState,useEffect} from 'react'
import  "./Consulting.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'

const Nav =({fly})=>{
const map = useMap()
useEffect(() => {
  map.panTo(fly,map.getZoom,{duration:1})
}, [fly])
return null
}

function Consulting() {

  const [search, setSearch] = useState("")
  const [center, setCenter] = useState([ 36.89871361555365, 10.187633360415687])
    
  let list = [{
    
      
      name:"SAGEM",pos:[36.76807901946018, 10.228861670199489]
    },
    {
    name:"ITS",pos:[33.866711623031044, 10.091536321537333]
  },{
    name:"SOHATRAM",pos:[33.839055035061605, 10.154707707904274]
  },{
    name:"OMV",pos:[33.869277244196034, 10.131018438016671]
  }]

  

  
    return (
        <div>
      
      <div className="search">
      <input id="searchbar" onkeyup="search_Société()" type="text"
        name="search" placeholder="Search Société.." onChange={(e)=>{setSearch(e.target.value);
           let found = list.find((el)=>el.name.toLowerCase().includes(search.toLowerCase())) || {name:"",pos:[ 36.89871361555365, 10.187633360415687]}
          setCenter(found.pos)}}/>
      </div>
         <MapContainer style={{height:"700px"}} center={[ 36.89871361555365, 10.187633360415687]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[36.89871361555365, 10.187633360415687]}>
    <Popup>
     blasa test 1
    </Popup>
  </Marker>
  <Nav fly={center}/>
</MapContainer>
        </div>
    )
}
export default Consulting

