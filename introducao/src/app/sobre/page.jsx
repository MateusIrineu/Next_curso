import React from 'react'
import Link from 'next/link'

const Sobrepage = () => {
  return (
    <div>
         <div className='flex ml-430 m-2'>
            <div className="text-right border border-red-900 text-red-600 bg-amber-950 rounded-xl text-xl p-5"><Link href="/">Início</Link></div>
            <div className="text-right border border-red-900 text-red-600 bg-amber-950 rounded-xl text-xl p-5 mx-2"><Link href="posts">Posts</Link></div>
        </div>
        <h1 className="text-center border border-red-900 text-red-600 bg-amber-950 rounded-b-xl text-xl p-5 m-10">Página Sobre</h1>


    </div>
  )
}

export default Sobrepage
