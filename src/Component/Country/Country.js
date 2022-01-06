import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
     const {name , population , region,flag} = props.country;
     const flagStyle= {
         height : "100px"
     }

     const handleAddCountry = (props.handleAddCountry);
    return (
        <div className="country-style">
           <div >
           <p>Name : {name}</p>
           <img style ={flagStyle} src={flag} alt="" />
           <p><small>Population : {population}</small></p>
           <p>Region : {region}</p>
           <button 
            onClick= {() => handleAddCountry(props.country)}
            className="main-button">Add Population</button>
           </div>
        </div>
    );
};
 
export default Country;