import React, { FC } from 'react'
import { NavIndicator } from './NavIndicator'
import Link from 'next/link'

export const NavBar: FC = () => {
  return (
    <nav className="fixed inset-x-0 top-0 flex w-full justify-start gap-8 border-b-2 border-gray-300/50 bg-white p-2">
      <Link href="/">
        <img src="/ego-logo.svg" width="38px" alt="Logo de la compania" />
      </Link>
      <div className="hidden items-center gap-4 sm:flex">
        <NavIndicator pageName="MODELOS">
          <Link href="/modelos">Modelos</Link>
        </NavIndicator>
        <NavIndicator pageName="FICHA">Ficha de modelo</NavIndicator>
      </div>
    </nav>
  )
}
