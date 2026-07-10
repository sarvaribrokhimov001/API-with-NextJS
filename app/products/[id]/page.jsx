import React from 'react'

const getSingleProducts = async(id) => {
    const request = await fetch(`https://dummyjson.com/products/${id}`);
    if(!request.ok) throw new Error();
    const data = await request.json();
    return data;
}

const ProductsInfo = async({params}) => {
    const {id} = await params;
    const result = await getSingleProducts(id);
    console.log(result);
    
  return (
    <div className='flex items-center justify-center m-auto'>
        <div className='flex items-center flex-col justify-center w-[250px] h-[220px] pl-2 m-auto bg-neutral-800 rounded-2xl'>
            <h1 className='text-green-600'> Id: <span className='text-red-600'> {id} </span> </h1>
            <p className='text-green-600'> Name: <span className='text-red-600 text-shadow-rose-600'> {result?.title} </span> </p>
            <img src={result?.images[0]} alt={result?.title} width={'140px'} />
        </div>
    </div>
  )
}
export default ProductsInfo