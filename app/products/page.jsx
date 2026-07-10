import Link from 'next/link';
import React from 'react'

const getProducts = async() => {
    const request = await fetch("https://dummyjson.com/products?limit=10");

    if(!request?.ok) throw new Error();
    const data = await request.json();
    return data?.products;
}

const ProductsPage = async() => {
    const data = await getProducts();
    console.log(data);
    
  return (
    <div className='block m-auto w-[500px] '>
        {data?.map((item) => (
          <Link className='flex gap-4' href={`/products/${item?.id}`} key={item?.id}>
            <p className='text-green-600 hover:text-red-600'> {item?.id} </p>
            <p className='hover:text-red-600'> {item?.title} : <b> {item?.price}$ </b> </p>
          </Link>
        ))}
    </div>
  )
}
export default ProductsPage