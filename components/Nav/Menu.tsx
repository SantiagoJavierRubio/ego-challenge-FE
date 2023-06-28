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
    <>
        <div className={`fixed top-0 right-0 bottom-0 min-h-screen h-full bg-white ${open ? 'w-1/5' : 'w-0'} transition-all`} id="menu-background"/>
        <div className={`fixed top-0 right-0 ${open ? 'flex-col bottom-0 min-h-screen h-full w-1/5' : 'flex-row bottom-full'}`}>
            <div className='flex gap-2 pr-4 items-center justify-end translate-y-4'>
                <p>
                    {open ? 'Cerrar' : 'Menu'} 
                </p>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {open ? <AiOutlineClose size={28} /> : <HiOutlineMenu  size={28} />}
                </button>
            </div>
            <div className={`flex flex-col text-right h-full justify-evenly mt-6 origin-right ${open ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} transition-opacity delay-100 ease-in-out`}>
                <div className='flex-col flex pr-8 justify-start'>
                    <MenuLink url="/modelos" text="Modelos" />
                    <MenuLink url="/servicios" text="Servicios y Accesorios" />
                    <MenuLink url="/financiacion" text="Financiación" />
                    <MenuLink url="/reviews" text="Reviews y Comunidad" />
                </div>
                <hr className='self-center w-5/6' />
                <div className='flex-col flex pr-8 justify-start'>
                    <MenuLink url="/mobility" text="Toyota Mobility Service" />
                    <MenuLink url="/gazoo" text="Toyota Gazoo Racing" />
                    <MenuLink url="/hibridos" text="Toyota Híbridos" />
                </div>
                <hr className='self-center w-5/6' />
                <div className='flex-col flex pr-8 justify-start'>
                    <MenuLink url="/concesionarios" text="Concesionarios" />
                    <MenuLink url="/testdrive" text="Test Drive" />
                    <MenuLink url="/contacto" text="Contacto" />
                </div>
                <div className='bg-gray-300/75 pr-8 flex flex-col justify-start'>
                    <MenuLink url="/actividades" text="Actividades" />
                    <MenuLink url="/atencion-clientes" text="Servicios al Cliente" />
                    <MenuLink url="/ventas-especiales" text="Ventas Especiales" />
                    <MenuLink url="/innovacion" text="Innovación" />
                    <MenuLink url="/prensa" text="Prensa" />
                    <MenuLink url="/about" text="Acerca de..." />
                </div>
            </div>
        </div>
        </>
  )
}

interface MenuLinkProps {
    text: string,
    url: string
}

const MenuLink: FC<MenuLinkProps> = ({ text, url }) => {
    return (
        <p className='my-2'>
            <a href={url}>{text}</a>
        </p>
    )
}