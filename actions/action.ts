'use server'

import { revalidatePath } from "next/cache"
import { PrismaClient } from '@prisma/client'
import {z} from 'zod'

const prisma = new PrismaClient()

export async function createMessage(prevState:{message: string}, formData: FormData){
    const schema = z.object({
        name: z.string().min(3),
        surname: z.string(),
        phone: z.string().min(10),
        mail: z.string(),
        message: z.string().min(10)
    })

    const parse = schema.safeParse({
        name: formData.get('name'),
        surname: formData.get('surname'),
        phone: formData.get('phone'),
        mail: formData.get('mail'),
        message: formData.get('message')
    })

    if(!parse.success){
        return { message: "Failed to send message"}
    }

    const {name, surname, mail, phone, message} = parse.data

    try {
        await prisma.user.create({
            data: {
                name,
                surname,
                email: mail,
                phone,
                message
            }
        })
        revalidatePath('/')
        return {
            message: "Message sent"
        }
    }
    catch(e){
        return {
            message: "Failed to send message"
        }
    }
}