import React, { FC } from 'react'

export const NavBar: FC = () => {
  return (
    <nav className="fixed inset-x-0 top-0 flex w-full justify-start gap-8 border-b-2 border-gray-300/50 bg-white p-2">
      <a href="/">
        <img src="/ego-logo.svg" width="38px" alt="Logo de la compania" />
      </a>
      <div className="hidden items-center gap-4 sm:flex">
        <div>Modelos</div>
        <div>Ficha de modelo</div>
      </div>
    </nav>
  )
}
