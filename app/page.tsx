import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <main className='flex flex-col h-screen items-center justify-center mx-80'>
      <h1 className='text-Text font-bold text-8xl text-center'>Building solutions that
        <span className='text-transparent bg-gradient-to-r from-Primary to-Secondary bg-clip-text'> connect and inspire.</span>
      </h1>
      <div className='grid grid-flow-col grid-rows-2 gap-5'>
        <div className='flex gap-6 max-h-36  bg-Primary p-6 rounded-xs items-center justify-center'>
          <Image 
            src={'/Vercel.svg'}
            alt='Vercel'
            width={48}
            height={48}
            
          />
          <div className='flex flex-col gap-2.5 items-start justify-center m-2.5'>
            <h2 className='text-Text font-semibold text-3xl '>Next JS</h2>
            <p className='text-Background text-lg'>Building fast and scalable web apps.</p>
          </div>
        </div>
        <div className='flex gap-6 max-h-36  bg-Secondary p-6 rounded-xs items-center justify-center'>
          <Image 
            src={'/Native.svg'}
            alt='Native'
            width={48}
            height={48}
            
          />
          <div className='flex flex-col gap-2.5 items-start justify-center m-2.5'>
            <h2 className='text-Text font-semibold text-3xl '>Next JS</h2>
            <p className='text-Background text-lg'>Building fast and scalable web apps.</p>
          </div>
        </div>
        <div className='flex gap-6 max-h-36  bg-Secondary p-6 rounded-xs items-center justify-center'>
          <Image 
            src={'/Vercel.svg'}
            alt='Vercel'
            width={48}
            height={48}
            
          />
          <div className='flex flex-col gap-2.5 items-start justify-center m-2.5'>
            <h2 className='text-Text font-semibold text-3xl '>Next JS</h2>
            <p className='text-Background text-lg'>Building fast and scalable web apps.</p>
          </div>
        </div>
        <div className='flex gap-6 max-h-36  bg-Primary p-6 rounded-xs items-center justify-center'>
          <Image 
            src={'/Vercel.svg'}
            alt='Vercel'
            width={48}
            height={48}
            
          />
          <div className='flex flex-col gap-2.5 items-start justify-center m-2.5'>
            <h2 className='text-Text font-semibold text-3xl '>Next JS</h2>
            <p className='text-Background text-lg'>Building fast and scalable web apps.</p>
          </div>
        </div>
      </div>
      

      
    </main>
  )
}

export default Home