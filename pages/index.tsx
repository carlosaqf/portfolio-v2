import type { NextPage } from 'next'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className='container max-w-5xl mx-auto border bg-slate-300 border-red-400 p-3 xl:px-0'>
        <h1 className='font-bold'>
          Hello, World!
        </h1>
        <p>This is a test!</p>
      </div>
    </>
  )
}

export default Home
