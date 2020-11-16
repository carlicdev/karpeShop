import React from 'react'
import Subscribe from '../Subscribe/Subscribe'

const Footer = () => {
    return (
        <div className='w-full bg-green-600 text-gray-200 mt-5 p-5'>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                <div className='col-span-1 text-justify p-5'>One</div>
                <div className='col-span-1 text-justify p-5'>Two</div>
                <div className='col-span-1 text-justify p-5'>
                    <Subscribe />
                </div>
            </div>
        </div>
    )
}

export default Footer
