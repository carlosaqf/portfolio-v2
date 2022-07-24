import type { NextPage } from 'next'
import Navbar from '../components/navbar'

const About: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto border bg-slate-300 border-red-400'>
        <h1>About Page!</h1>
      </div>
    </div>
  )
}

export default About