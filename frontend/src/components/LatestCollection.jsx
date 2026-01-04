import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const LatestCollection = () => {

    const{products} =useContext(ShopContext);
    const [latestProducts,setLatestProducts]=useState([]);

    useEffect(()=>{ 

      
    },[]);
    
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} /> 
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Discover our latest collections featuring trendy designs and high-quality materials, perfect for updating your wardrobe with the newest styles.
        </p>
      </div>


    </div>
  )
}

export default LatestCollection

