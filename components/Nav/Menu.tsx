'use client'
import React, { FC, useState } from 'react'
import { usePathname } from 'next/navigation'

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
        className={`fixed inset-y-0 right-0 z-20 h-full min-h-screen max-w-full bg-white ${
          open ? 'w-1/5 min-w-[350px]' : 'w-0'
        } transition-all`}
        id="menu-background"
      />
      <div
        className={`absolute inset-0 z-10 bg-gray-700 ${
          open ? 'block opacity-50' : 'hidden opacity-0'
        } backdrop-blur-md transition-opacity`}
        id="menu-backdrop"
      />
      <aside
        className={`fixed right-0 top-0 z-20 max-w-full ${
          open
            ? 'bottom-0 h-full w-1/5 min-w-[350px] flex-col'
            : 'bottom-full flex-row'
        }`}
      >
        <div
          className={`flex ${
            open ? 'translate-y-1' : 'translate-y-4'
          } transition-all" items-center justify-end gap-2 pr-4`}
        >
          <p>{open ? 'Cerrar' : 'Menu'}</p>
          <button onClick={toggleMenu} className="cursor-pointer" tabIndex={0}>
            {open ? <AiOutlineClose size={20} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
        <div
          className={`flex min-h-full origin-right flex-col justify-evenly gap-2 text-right text-lg ${
            open ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          } transition-opacity delay-100 ease-in-out`}
        >
          <div className="flex flex-col justify-start gap-2 pr-8">
            <MenuLink url="/modelos" text="Modelos" />
            <MenuLink url="/servicios" text="Servicios y Accesorios" />
            <MenuLink url="/financiacion" text="Financiación" />
            <MenuLink url="/reviews" text="Reviews y Comunidad" />
          </div>
          <hr className="w-5/6 self-center" />
          <div className="flex flex-col justify-start gap-2 pr-8">
            <MenuLink url="/mobility" text="Toyota Mobility Service" />
            <MenuLink url="/gazoo" text="Toyota Gazoo Racing" />
            <MenuLink url="/hibridos" text="Toyota Híbridos" />
          </div>
          <hr className="w-5/6 self-center" />
          <div className="flex flex-col justify-start gap-2 pr-8">
            <MenuLink url="/concesionarios" text="Concesionarios" />
            <MenuLink url="/testdrive" text="Test Drive" />
            <MenuLink url="/contacto" text="Contacto" />
          </div>
          <div className="flex flex-col justify-start gap-1 bg-gray-300/75 py-8 pr-8">
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
  const path = usePathname()
  const isCurrentPath = path === url
  return (
    <p
      className={`transition-all hover:font-bold ${
        isCurrentPath ? 'font-bold text-red-500' : 'text-inherit'
      }`}
    >
      <a href={url}>{text}</a>
    </p>
  )
}
