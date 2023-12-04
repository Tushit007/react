//Context API see the Helper File
// "use client"
// import Header from '@/Components/Header'
// import { MyContext } from '@/Helper/Context'
// import React, { useContext } from 'react'

// const page = () => {
//  const user= useContext(MyContext)
//  console.log(user)
 
//   return (
//     <div>Homepage{user}
//     <Header/>
//     </div>
//   )
// }

// export default page

//React Toastify
// "use client"
// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

// const page = () => {
//   const notify=()=>{
//     toast('🦄 Login Successfull', {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       });
//   }
  
//   return (
//     <div>
//       <button className='rounded p-5 mt-7 ml-7 text-2xl bg-black text-white' onClick={notify}>Login</button>
//       <ToastContainer/>
//     </div>
//   )
// }

// export default page
"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [userdata, setuserdata] = useState("")
  const [num, setnum] = useState(10)
  const getData = async ()=>{
    const response = await axios.get("https://picsum.photos/v2/list")
       setuserdata(JSON.stringify(response.data))
      
  }
  return (
    <div>{num}
    <button  className="m-8 p-5 bg-black text-white rounded"onClick={getData}>Click </button>
    {userdata}
    </div>
  )
}

export default page