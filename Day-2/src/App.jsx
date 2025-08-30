import React,{useState} from 'react'
import Create from './Components/Create'
import Read from './Components/Read'

const App = () => {

  const [tasks,setTasks] = useState([])

  return (
    <div className='p-8 flex justify-between bg-gray-400 w-screen h-screen'>
      <Create tasks={tasks} setTasks={setTasks}/>
      <Read tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App

