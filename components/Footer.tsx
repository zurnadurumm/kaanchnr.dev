import React from 'react'

const Footer = () => {
    const date = new Date()
  return (
    <footer className='flex items-center justify-center py-2 bg-zinc-900 text-center'>
        <p className='text-Text text-sm'>© {date.getFullYear()} Kaan Chinar</p>
    </footer>
  )
}

export default Footer