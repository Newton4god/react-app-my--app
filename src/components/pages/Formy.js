import React from 'react'
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import  {yupResolver} from "@hookform/resolvers/yup"
import './form.css'

const Formy = () => {

const schema = yup.object().shape({
    fullName:yup.string().required("Your FullName is Required"),
    email:yup.string().email().required("Your email Add ress is Required"),
    websiteUrl:yup.string().required("Your Website URL is Required"),
    message:yup.string().required("please leave a message"),
})

const {register, handleSubmit, formState:{errors}} = useForm(
    { 
        resolver: yupResolver(schema)
    }
);

const onsubmit = (data) => {
    console.log(data)
}


  return (
  
   <form onSubmit={handleSubmit(onsubmit)}>
    <label className='label'>Full Name</label> <br/>
    <input type='text' placeholder='John Doe' className='input' {...register("fullName")}/><br/>
    <p className='pee'>{errors.fullName?.message}</p><br/>

    <label className='label'>Email Address</label> <br/>
    <input type='email' placeholder='name@company.com' className='input' {...register("email")}/><br/>
    <p className='pee'>{errors.email?.message}</p><br/>

    <label className='label'>Website</label><br/>
    <input type='text' placeholder='Enter your business website link' className='input' {...register("websiteUrl")}/><br/>
     <p className='pee'>{errors.websiteUrl?.message}</p><br/>

    <label className='label'>Message</label><br/>
    <textarea rows="4" cols="50" className='area' {...register("message")} placeholder='Write your message'/><br/>
    <p className='pee'>{errors.message?.message}</p><br/>

    <input type='submit' value='Send Message' className='message'/>
   </form>
   
  )
}

export default Formy