import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex justify-center mt-5 gap-2'>
      <p> Our products 👉 </p>
      <Link className='flex justify-center hover:text-red-600 transition' href={'/products'}> Products </Link>
    </div>
  )
}
export default HomePage