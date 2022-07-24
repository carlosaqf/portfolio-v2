import type { NextPage } from 'next'
import Navbar from '../components/navbar'

const Blog: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto border bg-slate-300 border-red-400'>
        <h1>Blog Page</h1>
      </div>
    </div>
  )
}

export default Blog