'use client'
import React, { useState } from 'react'
import border_sprites from '../../../../public/border-green.png'

/*
Height-b : 64px
Width-b : 64px
*/
// const height = 64 * 4;
// const width = 64 * 5;
// const imgHeight = height / 4;
// const imgWidth = width / 5;


export const ChatBorder = ({
    children
}: {
    children: React.JSX.Element
}) => {

    return <div className='h-fit w-fit border-t-slate-600
     border-t-2 border-x-slate-400 border-x-2
     border-b-slate-400 border-b-2 border-gap
     shadow-md shadow-white/65
     rounded-lg
     '>
        {children}
    </div>
}