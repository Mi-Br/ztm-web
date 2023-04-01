import { useState } from 'react'
import './App.css'
import Grid from './Components/Grid'
import Search from './Components/Search'
import { robots } from './assets/Robots'



function App() {

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log('changing', e.target.value)
    filterRobots(e.target.value)
    if(e.target.value === "") {setRobots(robots)}
  }
  const [filteredRobots, setRobots] = useState(robots)
  
  const filterRobots = (txt:string)=>{
    const nextRobots = filteredRobots.slice().filter((r)=>{
      if(r.name.includes(txt) || r.email.includes(txt) || r.username.includes(txt)) {
        return r
      }
    })
    setRobots(nextRobots)
    console.log(nextRobots)
  }
  return (

   <>
   <h1>Find your robot </h1>
    <Search onSearchChange={onSearchChange}></Search>
    <Grid robots={filteredRobots}/>
   </>
  )
}
export default App
