import React from 'react'

const Searchfaculty = () => {
  return (
    <section className='left-85 top-5 absolute'>
      <div className='absolute flex left-5 top-5 w-auto '>
      <button className='bg-sky-500 rounded-md  w-auto'> Search Faculty</button>
      </div>
 
    
    <div className='border-2 h-auto rounded-md border-black flex justify-center items-center mt-20 m-10 -mb-10 -pb-5'>
    <div className="p-10">
      <div className="flex mb-4 mt-10">
        <input 
          type="text"
          placeholder=" Enter Faculty id, Name or Department"
          className="placeholder:text-sky-500 px-2 border-2 w-40 text-md text-black rounded-md border-sky-500 flex-1 mr-2"
        />
        <button className="px-2 py-1 bg-sky-500 text-white w-auto rounded-r-md rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Search Faculty
        </button>
      </div>
      <div className='overflow-hidden block'>
      <div className="flex w-60vw h-40vh border-3 rounded-tl-3xl rounded-tr-3xl overflow-auto  border-sky-500 rounded-xl">
      <table className="w-full h-10 text-center rounded-md border-collapse">
        <thead>
          <tr>
            <th className="border bg-blue-950  text-white px-4 py-2">SL No</th>

            <th className="border bg-blue-950 text-white px-4 py-2">
             Faculty ID
            </th>
          
            <th className="border bg-blue-950 text-white px-4 py-2">Faculty Name</th>



            <th className="border bg-blue-950 text-white px-4 py-2">Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2">1</td>
            <td className="border border-black px-4 py-2">123456</td>
            <td className="border border-black px-4 py-2">Jane Smith</td>
            <td className="border border-black px-4 py-2">DSCA</td>

          </tr>
          <tr>
            <td className="border border-black px-4 py-2">2</td>
            <td className="border border-black px-4 py-2">12356</td>
            <td className="border border-black px-4 py-2">Jane doe</td>
            <td className="border border-black px-4 py-2">DSCA</td>

          </tr>
        </tbody>
      </table>
      </div>
      </div>
    </div>
    </div>
    </section>
  )
}
  
export default Searchfaculty
