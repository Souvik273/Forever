import React, {useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller , setBestSeller] = useState([])

    useEffect(()=>{
        const bestProducts = products.filter(product => product.bestseller)
        setBestSeller(bestProducts.slice(0,5))
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores sapiente vero, qui nemo placeat illum
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.map((item,index)=>{
                return <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/> 
            })}
        </div>
    </div>
  )
}

export default BestSeller