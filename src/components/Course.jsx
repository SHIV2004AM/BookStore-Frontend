import React from 'react'
import list from "../../public/list.json"
import Card from './Card.jsx'
import {Link} from "react-router-dom"
function Course() {
    // const filterData = list.map((data) => data.price != 0)
    // console.log(filterData)
  return <>
    <div  className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-white dark:text-black'>
       <div className='mt-28 items-center justify-center text-center'>
        <h1 className='font-semibold text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here!:)</span> </h1>
        <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia repellendus ipsa iusto, dolorem molestiae, perspiciatis sunt ut facere temporibus magni voluptates veniam ullam repellat quod possimus officiis unde corrupti minima provident maxime, quidem esse. Laudantium quae consectetur aliquam rem adipisci soluta hic nobis mollitia nulla, tempore dicta, recusandae id eum!</p>
        <Link to = '/'>
        <button className='mt-6 bg-pink-500 text-white hover:bg-pink-700 duration-300 px-4 py-2 rounded-md' >Back</button>
        </Link>
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            list.map((item)=> (
                <Card key={item.id} item = {item} /> 
            ))}
        
       </div>
    </div>
    </>
  
}

export default Course
