import Quote from '@/components/quote/quote'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const QuoteGeneral = () => {
    return (
        <div className='flex items-end flex-col gap-5 sm:flex-row space-x-4'>
            <Quote />
            <div className="flex items-center gap-2">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='text-[color:var(--yellow)] font-bold'>Dostoyevsky</p>
            </div>
        </div>
    )
}

export default QuoteGeneral
