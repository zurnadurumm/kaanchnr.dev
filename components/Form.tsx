'use client'

import { useRouter } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'
import { createMessage } from '@/actions/action'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const initialState = {
    name: '',
    surname: '',
    phone: '',
    mail: '',
    message: '',
    success: false
}


function Form(){
  const { pending } = useFormStatus()
  

  const [state, formAction] = useFormState(createMessage, initialState);
  let { message , success} = state
  
  const handleClick = () => {
    success ? toast.success(message) : toast.error(message)
    console.log(success)
  }
  return (
    
    <div className='text-center p-10 text-Background'>
    <form action={formAction} className='max-w-md mx-auto lg:p-8'>
            <div className='space-y-4'>
            <input type="text" name='name' placeholder="First Name" className='w-full p-2 border rounded-xs outline-none' required/>
            <input type="text" name='surname' placeholder="Last Name" className='w-full p-2 border rounded-xs outline-none' required/>
            <input type="tel" name='phone' placeholder="Phone Number" className='w-full p-2 border rounded-xs outline-none' required/>
            <input type="email" name='mail' placeholder="Mail address" className='w-full p-2 border rounded-xs outline-none' required/>
            <textarea name="message" placeholder="Write your message:" 
                      className='w-full p-2 border rounded-xs h-32 resize-none outline-none'
                      required></textarea>
        </div>
        <button type="submit" aria-disabled={pending} className="font-bold p-2.5 bg-Primary hover:bg-Accent text-Text transition rounded-xs" onClick={handleClick}>Submit!</button>
    </form>
    <ToastContainer />
</div>

  )
}

export default Form