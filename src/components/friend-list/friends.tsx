import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";

export const Contacts = ()=> {
    const contacts = [];
    for (let i = 0; i < 12; i++) {
        contacts.push(<p key={i} className='py-2 px-4 border-b w-full text-2xl'>{i}</p>);    
    }
    
    return (
        <ScrollArea className='h-full'>
            <div>
                {contacts}
            </div>
        </ScrollArea>
    )
}