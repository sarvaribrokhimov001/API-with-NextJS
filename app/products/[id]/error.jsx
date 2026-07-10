'use client'
import React from 'react'

const ProductsInfoError = ({error}) => {
  return (
    <div>
      <h1 className='text-center text-red-600 text-shadow-red-600 text-2xl'> Error holati yuz berdi: {error} </h1>
    </div>
  )
}
export default ProductsInfoError