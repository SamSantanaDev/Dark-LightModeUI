import Image from 'next/image'
import Start from './components/Start'
import Task1 from './components/Task1'
import Task2 from './components/Task2' 
import Task3 from './components/Task3'
import Task4 from './components/Task4'
import Finish from './components/Finish'

export default function Home() {
  return (
   <div>
    <Start/>
    <Task1/>
    <Task2/>
    <Task3/>
    <Task4/>
    <Finish/>
   </div>
  )
}
