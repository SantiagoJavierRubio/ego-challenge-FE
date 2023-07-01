'use client'
import React, { FC, useState, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'

import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import useClickOutside from '@/lib/hooks/useClickOutside'
import Link from 'next/link'
export const Menu: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const ref = useRef(null)
  const toggleMenu = () => {
    setOpen(prev => !prev)
  }
  const closeMenuCB = useCallback(() => setOpen(false), [])
  useClickOutside(ref, closeMenuCB)

  return (
    <>
      <MenuBackground isOpen={open} />
      <aside
        className={`fixed right-0 top-0 z-40 sm:z-30 ${
          open
            ? 'bottom-0 h-full w-screen flex-col sm:w-1/5 sm:min-w-[350px]'
            : 'bottom-full flex-row'
        }`}
        id="menu"
        ref={ref}
      >
        <div
          onClick={toggleMenu}
          className={`z-50 flex cursor-pointer items-center justify-end gap-2 p-3 transition-all`}
        >
          <p className="hidden sm:block">{open ? 'Cerrar' : 'Menu'}</p>
          <div>
            <AiOutlineClose
              className={`text-2xl ${open ? 'block' : 'hidden'}`}
            />
            <HiOutlineMenu
              className={`text-3xl ${open ? 'hidden' : 'block'}`}
            />
          </div>
        </div>
        <div
          className={`-mt-3 flex min-h-full origin-right flex-col justify-evenly gap-0 text-right text-lg sm:gap-1 ${
            open ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          } transition-opacity delay-100 ease-in-out`}
        >
          <div className="flex flex-col justify-start gap-0.5 pr-4 sm:gap-1 sm:pr-8">
            <MenuLink close={closeMenuCB} url="/modelos" text="Modelos" />
            <MenuLink
              close={closeMenuCB}
              url="/servicios"
              text="Servicios y Accesorios"
            />
            <MenuLink
              close={closeMenuCB}
              url="/financiacion"
              text="Financiación"
            />
            <MenuLink
              close={closeMenuCB}
              url="/reviews"
              text="Reviews y Comunidad"
            />
          </div>
          <hr className="w-5/6 self-center" />
          <div className="flex flex-col justify-start gap-0.5 pr-4 sm:gap-1 sm:pr-8">
            <MenuLink
              close={closeMenuCB}
              url="/mobility"
              text="Toyota Mobility Service"
            />
            <MenuLink
              close={closeMenuCB}
              url="/gazoo"
              text="Toyota Gazoo Racing"
            />
            <MenuLink
              close={closeMenuCB}
              url="/hibridos"
              text="Toyota Híbridos"
            />
          </div>
          <hr className="w-5/6 self-center" />
          <div className="flex flex-col justify-start gap-0.5 pr-4 sm:gap-1 sm:pr-8">
            <MenuLink
              close={closeMenuCB}
              url="/concesionarios"
              text="Concesionarios"
            />
            <MenuLink close={closeMenuCB} url="/testdrive" text="Test Drive" />
            <MenuLink close={closeMenuCB} url="/contacto" text="Contacto" />
          </div>
          <div className="flex flex-col justify-start gap-0.5 bg-gray-300/75 py-4 pb-6 pr-4 sm:gap-1 sm:py-8 sm:pr-8">
            <MenuLink
              close={closeMenuCB}
              url="/actividades"
              text="Actividades"
            />
            <MenuLink
              close={closeMenuCB}
              url="/atencion-clientes"
              text="Servicios al Cliente"
            />
            <MenuLink
              close={closeMenuCB}
              url="/ventas-especiales"
              text="Ventas Especiales"
            />
            <MenuLink close={closeMenuCB} url="/innovacion" text="Innovación" />
            <MenuLink close={closeMenuCB} url="/prensa" text="Prensa" />
            <MenuLink close={closeMenuCB} url="/about" text="Acerca de..." />
          </div>
        </div>
      </aside>
    </>
  )
}

interface MenuLinkProps {
  text: string
  url: string
  close: () => void
}

const MenuLink: FC<MenuLinkProps> = ({ text, url, close }) => {
  const path = usePathname()
  const isCurrentPath = path.includes(url)
  return (
    <p
      className={`transition-all hover:font-bold active:font-semibold ${
        isCurrentPath ? 'font-bold text-red-500' : 'text-inherit'
      }`}
    >
      <Link href={url} onClick={close}>
        {text}
      </Link>
    </p>
  )
}

const MenuBackground: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 z-30 h-full min-h-screen bg-white sm:max-w-full ${
          isOpen ? 'w-screen sm:w-1/5 sm:min-w-[350px]' : 'w-0'
        } transition-all`}
        id="menu-background"
      />
      <div
        className={`fixed inset-0 z-20 hidden bg-gray-700 ${
          isOpen ? 'opacity-50 sm:block' : 'opacity-0 sm:hidden'
        } backdrop-blur-md transition-opacity`}
        id="menu-backdrop"
      />
    </>
  )
}
