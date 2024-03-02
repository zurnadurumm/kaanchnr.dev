import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <>
    <main className='flex flex-col h-full items-center justify-center mx-80'>
      <h1 className='text-Text font-bold text-8xl text-center py-32'>Building solutions that
        <span className='text-transparent bg-gradient-to-r from-Primary to-Secondary bg-clip-text'> connect and inspire.</span>
      </h1>
      <div className='grid grid-flow-col grid-rows-2 gap-5 mb-32'>
        {/** Vercel card */}
        <div className='flex gap-6 max-h-36  bg-Primary p-6 rounded-xs items-center '>
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
        {/** Native card */}
        <div className='flex gap-6 max-h-36  bg-Secondary p-6 rounded-xs items-center '>
          <Image 
            src={'/Native.svg'}
            alt='Native'
            width={48}
            height={48}
            
          />
          <div className='flex flex-col gap-2.5 items-start justify-center m-2.5'>
            <h2 className='text-Text font-semibold text-3xl '>React Native</h2>
            <p className='text-Text text-lg'>Beautiful mobile apps for both iOS and Android.</p>
          </div>
        </div>
        {/** React card */}
        <div className='flex gap-6 max-h-36  bg-Secondary p-6 rounded-xs items-center '>
          <Image 
            src={'/React.svg'}
            alt='React'
            width={48}
            height={48}
            
          />
          <div className='flex flex-col gap-2.5 items-start justify-center m-2.5'>
            <h2 className='text-Text font-semibold text-3xl '>React</h2>
            <p className='text-Text text-lg'>Developing modern & dynamic web sites.</p>
          </div>
        </div>
        {/** MERN card */}
        <div className='flex gap-6 max-h-36  bg-Accent p-6 rounded-xs items-center '>
          <Image 
            src={'/Mongo.svg'}
            alt='MERN'
            width={48}
            height={48}
            
          />
          <div className='flex flex-col gap-2.5 items-start justify-center m-2.5'>
            <h2 className='text-Text font-semibold text-3xl '>MERN</h2>
            <p className='text-Text text-lg'>Full stack web apps with MERN.</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center my-16'>
        <Link 
        href={'/contact'}
        className='text-Text bg-Secondary py-3 px-12 rounded-xs hover:bg-Accent  transition hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] shadow-[0_4px_14px_0_rgb(0,0,0,10%)]'
        >Contact</Link>
      </div>    

      
    </main>
    </>
  )
}

export default Home