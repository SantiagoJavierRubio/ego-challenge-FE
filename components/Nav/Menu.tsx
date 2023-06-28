"use client"
import React, { FC, useState } from 'react'

import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

interface MenuProps {
  
}

export const Menu: FC<MenuProps> = ({  }) => {
    const [open, setOpen] = useState<boolean>(false)
    const toggleMenu = () => {
        setOpen(prev => !prev)
    }
  return (
        <div className={`fixed top-0 right-0 p-2 pt-3 ${open ? 'flex-col bottom-0 min-h-screen h-full w-1/5 bg-white' : 'flex-row bottom-full'}`}>
            <div className='flex gap-2 items-center justify-end'>
                <p>
                    {open ? 'Cerrar' : 'Menu'} 
                </p>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {open ? <AiOutlineClose size={28} /> : <HiOutlineMenu  size={28} />}
                </button>
            </div>
            {open &&
                <div className='flex-col gap-4 text-right mt-8 pr-8'>
                    <div className='flex-col gap-2'>
                        <p><a href="/modelos">Modelos</a></p>
                        <p><a href="/servicios">Servicios y Accesorios</a></p>
                        <p><a href="/financiacion">Financiación</a></p>
                        <p><a href="/reviews">Reviews y Comunidad</a></p>
                    </div>
                    <div className='flex-col gap-2'>
                        <p><a href="/mobility">Toyota Mobility Service</a></p>
                        <p><a href="/gazoo">Toyota Gazoo Racing</a></p>
                        <p><a href="/hibridos">Toyota Híbridos</a></p>
                    </div>
                    <div className='flex-col gap-2'>
                        <p><a href="/concesionarios">Concesionarios</a></p>
                        <p><a href="/testdrive">Test Drive</a></p>
                        <p><a href="/contacto">Contacto</a></p>
                    </div>
                </div>
            }
        </div>
  )
}