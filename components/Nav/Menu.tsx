'use client'
import React, { FC, useState } from 'react'

import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

interface MenuProps {}

export const Menu: FC<MenuProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false)
  const toggleMenu = () => {
    setOpen(prev => !prev)
  }
  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 h-full min-h-screen bg-white ${
          open ? 'w-1/5' : 'w-0'
        } transition-all`}
        id="menu-background"
      />
      <aside
        className={`fixed right-0 top-0 ${
          open
            ? 'bottom-0 h-full min-h-screen w-1/5 flex-col'
            : 'bottom-full flex-row'
        }`}
      >
        <div className="flex translate-y-4 items-center justify-end gap-2 pr-4">
          <p>{open ? 'Cerrar' : 'Menu'}</p>
          <button onClick={toggleMenu} className="cursor-pointer">
            {open ? <AiOutlineClose size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
        <div
          className={`mt-4 flex h-full origin-right flex-col justify-evenly text-right ${
            open ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          } transition-opacity delay-100 ease-in-out`}
        >
          <div className="flex flex-col justify-start pr-8">
            <MenuLink url="/modelos" text="Modelos" />
            <MenuLink url="/servicios" text="Servicios y Accesorios" />
            <MenuLink url="/financiacion" text="Financiación" />
            <MenuLink url="/reviews" text="Reviews y Comunidad" />
          </div>
          <hr className="w-5/6 self-center" />
          <div className="flex flex-col justify-start pr-8">
            <MenuLink url="/mobility" text="Toyota Mobility Service" />
            <MenuLink url="/gazoo" text="Toyota Gazoo Racing" />
            <MenuLink url="/hibridos" text="Toyota Híbridos" />
          </div>
          <hr className="w-5/6 self-center" />
          <div className="flex flex-col justify-start pr-8">
            <MenuLink url="/concesionarios" text="Concesionarios" />
            <MenuLink url="/testdrive" text="Test Drive" />
            <MenuLink url="/contacto" text="Contacto" />
          </div>
          <div className="flex flex-col justify-start bg-gray-300/75 py-2 pr-8">
            <MenuLink url="/actividades" text="Actividades" />
            <MenuLink url="/atencion-clientes" text="Servicios al Cliente" />
            <MenuLink url="/ventas-especiales" text="Ventas Especiales" />
            <MenuLink url="/innovacion" text="Innovación" />
            <MenuLink url="/prensa" text="Prensa" />
            <MenuLink url="/about" text="Acerca de..." />
          </div>
        </div>
      </aside>
    </>
  )
}

interface MenuLinkProps {
  text: string
  url: string
}

const MenuLink: FC<MenuLinkProps> = ({ text, url }) => {
  return (
    <p className="my-2">
      <a href={url}>{text}</a>
    </p>
  )
}
