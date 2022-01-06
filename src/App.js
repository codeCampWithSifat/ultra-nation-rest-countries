import React, { useEffect, useState }  from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Country from './Component/Country/Country';

function App() {
  const [countries , setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then( data => setCountries(data))
    .catch(err => console.log(err))
  },[])
   
  const [cart , setCart] = useState([])
  const handleAddCountry = (country) => {
    const newCountry = [...cart , country];
    setCart(newCountry)
  }

  
  return (
    <div >
      <h1 className="header">Country Loaded {countries.length}</h1>
      <div className="header">
        <h3>Selected County {cart.length}</h3>
        <Cart cart = {cart}></Cart>
      </div>
     <div className="countries-style">
     {
        countries.map(country => <Country 
          handleAddCountry = {handleAddCountry}
           key ={country.alpha3Code} country ={country}></Country>)
      }
     </div>
    </div>
  );
}

export default App;
