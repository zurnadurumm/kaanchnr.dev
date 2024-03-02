'use client'

import { useFormStatus } from "react-dom"

function SubmitForm() {
    const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending} className="font-bold p-2.5 bg-Primary hover:bg-Accent text-Text transition rounded-xs">Submit!</button>
  )
}

export default SubmitForm