import './homepage.css';
import axios from 'axios';
import React, { useState , useEffect} from 'react';
import './homepage.css'



function HomePage(){
    const [products, setProducts] = useState([])


    //useEffect determines the first thing that will run when the page loads
    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async () =>{
        let response = await axios.get('https://localhost:44394/api/products')
        //setProduct is talking to products(variable on like 43) and tells it what its value should be
        setProducts(response.data)
    }

    const addToCart = (product) =>{
        console.log(product)
        //post to shopping cart request will go here
    }

    return (
        <div>

            
        </div>
       
            )
            
        }
                 
             
            
export default HomePage;