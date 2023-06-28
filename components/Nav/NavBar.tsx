import React, { FC } from 'react'
import { Menu } from './Menu'

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <nav className="fixed inset-x-0 top-0 flex w-full justify-start gap-8 bg-white p-2">
      <img src="/ego-logo.svg" width="38px" alt="Logo de la compania" />
      <div className="flex items-center gap-4">
        <div>Modelos</div>
        <div>Ficha de modelo</div>
      </div>
    </nav>
  )
}
