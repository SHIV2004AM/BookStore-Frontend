import React from 'react'

function Card( {item}) {
    console.log(item)
  return (<>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-white dark:text-black" >
  <figure>
    <img
      src={item.image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
        {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.tittle}</p>
    <div className="card-actions justify-between justify-end">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer border border-[2px] rounded-full px-2 py-1 hover:bg-pink-500 hover:text-white duration-200 px-2 py-1">Buy Now</div>
    </div>
  </div>
</div>
      </div>
  </>
  )
}

export default Card
