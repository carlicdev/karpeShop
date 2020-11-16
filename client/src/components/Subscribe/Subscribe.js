import React from 'react';
import { FaEnvelopeOpen } from 'react-icons/fa';

const Subscribe = () => {
    return (
        <div>
            <div className='max-w-md bg-green-700 text-gray-200 p-5 text-center mx-auto shadow'>
                <FaEnvelopeOpen size={45} className='mx-auto' />
                <div className='mt-3'>Suscríbete a nuestro boletín informativo</div>
                <form>
                    <input
                        className='w-full mt-3 rounded text-gray-800 focus:outline-none focus:shadow-outline py-1 px-2 bg-gray-200'
                        type='text'
                        placeholder='Correo Electrónico'
                    />
                    <button className='mt-2 bg-green-800 hover:bg-green-900 focus:outline-none py-2 w-full rounded'>SUSCRIBIRSE</button>
                </form>
            </div>
        </div>
    )
}

export default Subscribe
