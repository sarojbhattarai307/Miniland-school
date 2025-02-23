
import React, { useRef } from 'react'
import { X } from 'lucide-react'

const LoginPopup = ({onClose}) => {
const modalRef = useRef()

  const closePopup = (e) =>{
    if(modalRef.current === e.target){
      console.log(e.target)
      console.log(modalRef.current)
      onClose()
    }
  }

  return (
    <>
    <div ref={modalRef} onClick={closePopup} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
 <div className='flex flex-col'>
    <button onClick={onClose} className='place-self-end'> <X size={30}/> </button>
    <div className='bg-[#303030] text-white rounded-lg px-10 py-5 text-center max-w-[600px]'>
<h1 className='font-extrabold text-3xl'>Welcome back</h1>
<p className='text-xl max-w-[300px] mt-3 '>Login to be a part of the school and have better experience</p>

<div className='mt-5 flex flex-col gap-5'>
  <button className='w-full bg-white border border-gray-100 text-black rounded-full text-xl p-2'>Login as a student</button>
  <button className='bg-transparent border border-gray-50 rounded-full text-xl p-2'>Login as a teacher</button>
</div>

<div className='flex gap-10 justify-center mt-5'>
  <a className='underline font-extrabold' href="">Login as admin</a>
  <a  className='underline font-extrabold' href=" ">stay as guest</a>
</div>
    </div>
 </div>
    </div>
    </>
  )
}

export default LoginPopup