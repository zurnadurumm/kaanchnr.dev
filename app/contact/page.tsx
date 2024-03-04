'use client'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { createMessage } from '@/actions/action'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Form from '@/components/Form'

const initialState = {
  name: '',
  surname: '',
  phone: '',
  mail: '',
  message: ''
}


export default function Contact() {
  
  // const router = useRouter()

  // const [state, formAction] = useFormState(createMessage, initialState)
  // const { message } = state;
  
  // const notify = (message: string) => {
  //   toast(message, {
  //     position: 'bottom-center',
  //     theme: 'dark',
  //     onClose: () => {
  //       router.push('/')
  //     }
  //   })
  //   console.log(message)
  // }

  // const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
    
  // }
  
  

  return (
    <main className='h-screen flex flex-col lg:flex-row items-center justify-center'>
      <h1 className='font-semibold text-4xl text-transparent bg-gradient-to-r from-Accent to-Primary bg-clip-text'>
        Contact Me
      </h1>
      <Form />
      <ToastContainer />
    </main>
  )
}

