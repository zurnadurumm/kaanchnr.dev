'use client'

import { useFormState } from 'react-dom'
import SubmitForm from './SubmitForm'
import { createMessage } from '@/actions/action'

const initialState = {
    name: '',
    surname: '',
    phone: '',
    mail: '',
    message: ''
}


function Form() {
    const [state, formAction] = useFormState(createMessage, initialState)

  return (
    <div className='text-Background'>
        <form action={formAction}>
            <div className='grid grid-cols-2 gap-x-6 gap-y-8 '>
                <input type="text" name='name' className='w-80 ' required/>
                <input type="text" name='surname' className='w-80 ' required/>
                <input type="tel" name='phone' className='w-80 ' required/>
                <input type="email" name='mail' className='w-80 ' required/>
                <textarea name="message" className='col-span-2' required></textarea>
            </div>
            <SubmitForm />
      </form>
    </div>
  )
}

export default Form