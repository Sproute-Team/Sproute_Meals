import React from 'react'
import CreateNewDash from './addItem'
import Menu from './addMenu'
import Header from './Header'
import MenuItems from './menuItems'

function AllMenu() {
  return (
    <div className="flex w-screen overflow-y-auto bg-[#F7F8FC] flex-col">
        <Header/>
        <div className='flex bg-white mx-5 mt-4 rounded-xl  flex-col'>
            <Menu/>
            <MenuItems/>
            {/* <CreateNewDash/> */}
        </div>
    </div>
  )
}

export default AllMenu