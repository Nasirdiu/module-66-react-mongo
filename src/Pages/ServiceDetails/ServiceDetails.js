import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serices,setServices]=useState({});
  useEffect(()=>{
    const url=`http://localhost:5000/service/${serviceId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    <div>
      <h1> Service Details:-{serices.name}</h1>
      <div className="text-center">
        <Link to="/cheekout">
          <button className="btn btn-info">cheek out</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
