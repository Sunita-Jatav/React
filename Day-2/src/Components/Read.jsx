import React from 'react'

const Read = (props) => {
    const tasks = props.tasks;
    const setTasks = props.setTasks;

   const removeHandler = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
    const render = tasks.map((e,i)=>{
        return  <li className=' text-2xl flex justify-between items-center mb-4' key={e.id}>{e.topic} <button className= 'text-[1rem] bg-red-400 px-4 rounded text-black transform active:scale-95 transition-transform duration-150' onClick={()=>{removeHandler(e.id)}}>remove</button></li>
    })

   return (
    <div className='w-[50%] bg-gray-300 rounded p-10 relative'>
      <h1 className='text-4xl font-medium tracking-tighter text-green-500 mb-10 border-b border-black'>Today's Study Plan</h1>
       {tasks.length===0?(
        <p className='text-xl text-red-500'>No topics added yet.</p>
      ) :<ol className=" list-decimal list-inside ">{render}</ol>}
    </div>
   )
}

export default Read
