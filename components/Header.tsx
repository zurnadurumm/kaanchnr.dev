import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <div className='flex items-center justify-between px-9 py-4.5'>
            <div>
                <Link href={'/'}>
                    <Image 
                        src={'/logo.svg'}
                        alt='Logo'
                        width={100}
                        height={100}
                        priority
                    />
                </Link>
  
            </div>
            <div className='flex gap-2.5 lg:gap-12 font-semibold'>
                <Link href={'/'} className='transition-all text-Text hover:text-transparent hover:bg-gradient-to-r hover:from-Primary hover:to-Accent bg-Text bg-clip-text'>Home</Link>
                <Link className='transition-all text-Text hover:text-transparent hover:bg-gradient-to-r hover:from-Primary hover:to-Accent bg-Text bg-clip-text' href={'/contact'}>Contact</Link>
                <Link className='transition-all text-Text hover:text-transparent hover:bg-gradient-to-r hover:from-Primary hover:to-Accent bg-Text bg-clip-text' href={'/blog'}>Blog</Link>
                
            </div>
        </div>
    </header>
  )
}

export default Header