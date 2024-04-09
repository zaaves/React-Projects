
import React from 'react'

function Card({username,someobj = "Shopify",arr}) {
    //we can either use props and access the object value using props.username name . here we are desturucturing the object and accessing directly the object value
    console.log(username)
    console.log(someobj)
    console.log(arr)

    return (
        <>
            <div className='h-2/6 bg-blue-400 flex items-center justify-center flex-col py-20'>
                <img src="https://images.pexels.com/photos/11728795/pexels-photo-11728795.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className='p-3 rounded-3xl ' />
                <button
                    className='bg-white p-4 rounded-full mb-4'
                >{username || "Visti Me !!!"}
                </button>
                <button
                    className='bg-white p-4 rounded-full mb-4'
                >{someobj}
                </button>
                <button
                    className='bg-white p-4 rounded-full mb-4'
                >{username || "Visti Me !!!"}
                </button>
            </div>
        </>
    )
}


export default Card;
