import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const Header = () => {
    const user = useContext(MyContext)
  return (
    <div className='bg-green-600 p-5'>
        {user}
    </div>
  )
}

export default Header