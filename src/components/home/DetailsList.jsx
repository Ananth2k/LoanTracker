import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';



function DetailsList({list}) {

  const Lists = [
    {id:1, title:"Finance details", link:'/borrowers-list'},
    {id:2, title:"Borrowers list", link:'/borrowers-list'},
    {id:2, title:"Create Borrowers ", link:'/borrowers-list'},

  ]



  return (

    <>
    {Lists.map((item)=>(
      <Link key={item.id} to={item.link}>
                           <li className='mb-3 mt-3' >
                        <div className='d-flex rounded-4 px-2 py-3 home-details-card align-items-center justify-content-between'>
                           <div className='d-flex rounded-2 align-items-center justify-content-between'>
                                     
                              <FaRegEdit fill='#000' className="custom-bg-green-icon p-2 me-2 rounded-3" style={{ width: '35px', height: '35px' }} />

                           
                            <h5 className='fs-6 mb-0 text-dark'>{item.title}</h5>

                           </div>
                   


                            <FaArrowRight fill='#000' className="bg-white p-2 me-2 rounded-5" style={{ width: '30px', height: '30px' }} />

                        </div>
                    </li>
                    </Link>

    ))}
    </>

  )
}

export default DetailsList