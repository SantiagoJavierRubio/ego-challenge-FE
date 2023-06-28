import React, { FC } from 'react'
import { Menu } from './Menu'

interface NavBarProps {
  
}

export const NavBar: FC<NavBarProps> = ({  }) => {
  return (
    <nav className='fixed top-0 left-0 right-0 w-full flex justify-start gap-8 p-2 bg-white'>
        <img src="/ego-logo.svg" width="38px" alt="Logo de la compania" />
        <div className='flex items-center gap-4'>
            <div>Modelos</div>
            <div>Ficha de modelo</div>
        </div>
    </nav>
  )
}