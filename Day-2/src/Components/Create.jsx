import React, { useState } from 'react'
import { nanoid } from 'nanoid';
const Create = (props) => {
  const tasks = props.tasks
  const setTasks = props.setTasks

  const [topic,setTopic] = useState("");
  const submitHandler = (e) =>{
    e.preventDefault();
    const addTopic = {
        id : nanoid(),
        topic : topic
    }
    const added = [...tasks]
    added.push(addTopic)
    setTasks(added);
    setTopic("");
  }

  
  return (
    <div className='w-[50%]  h-full text-center'>
      <h1 className='text-2xl font-small tracking-tighter mb-25 '>Small steps every day,<br /> <span className='text-6xl'>build big results.</span></h1>
      <form onSubmit={submitHandler}>
        <input className='mb-6 border-b border-black w-1/2 outline-none focus:ring-0 text-2xl text-teal-900' type="text" placeholder='Add Topics' onChange={(e)=>setTopic(e.target.value)} value={topic} />
        <br />
        <button className='bg-gray-800 text-white px-10 py-3 rounded transform active:scale-95 transition-transform duration-150'>Add in Study Plan</button>
      </form>
    </div>
  )
}

export default Create
