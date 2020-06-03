import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap,Marker } from 'react-google-maps';
import Geocode from 'react-geocode';



Geocode.setApiKey("AIzaSyA3U3NI16Po7UyNTxwFeA9da4UdxDNt8iU");
Geocode.setLanguage("iw");
Geocode.enableDebug();


const Geo = (props) =>{
    console.log(props.location)
    return props.location
    
}




Geocode.fromAddress("רחוב הארבעה תל אביב").then(
//getting weird data
    // Geocode.fromAddress(Geo).then(
    response=>{
       
        // const {lat,lng} = response.results[0].geometry.location;
        // BaseMap(lat,lng)
        const BaseMapData = response.results[0].geometry.location;
        console.log(BaseMapData)
        BaseMap(BaseMapData)
 
    },error=>{
        console.error(error)
    }
   
)



function BaseMap(props){
    console.log(props)
    return(
        <div>
        <GoogleMap  defaultZoom ={16} 
        
        // defaultCenter={props}/>
        defaultCenter={{lat:32.0601128,lng:34.7846326}}/>

        <Marker position={{lat:32.0601128,lng:34.7846326}} title="the place" />
        </div>
      
        ) 
}

const WrappedMap = withScriptjs(withGoogleMap(BaseMap));

function Map(){
    return(
        <div style={{width:'100vw',height:'100vh'}}>
        <WrappedMap  googleMapURL= {"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA3U3NI16Po7UyNTxwFeA9da4UdxDNt8iU"}
        loadingElement= {<div style={{ height: `100%` }} />}
        containerElement= {<div style={{ height: `100%` }} />}
        mapElement= {<div style={{ height: `100%` }} />} />
        </div>
    )
}
 export  {Map, Geo};