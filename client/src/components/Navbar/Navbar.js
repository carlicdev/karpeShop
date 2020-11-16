import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-green-600 text-gray-200 shadow'>
            <div className='flex justify-center content-center p-3'>
                <div className='text-xl ml-2 mr-auto'>LOGO</div>

                {/* hidden links in smaller viewports */}
                <div className='hidden lg:inline mr-5'>
                    <ul>
                        <li className='inline mx-5 font-medium'>
                            <Link to='/about'>
                                Nosotros
                            </Link>
                        </li>
                        <li className='inline mx-5 font-medium'>
                            <Link to='/contact'>
                                Contacto
                            </Link>
                        </li>
                        <li className='inline mx-5 font-medium'>
                            <Link to='/about'>
                                Nosotros
                            </Link>
                        </li>
                        <li className='inline mx-5 font-medium'>
                            <Link to='/contact'>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* smaller viewports links */}
                <div className='ml-auto mr-2 text-2xl lg:hidden'>
                    <button 
                        className='hover:text-green-800 focus:outline-none focus:text-green-800'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {
                            isOpen ? <AiFillCloseCircle /> : <GiHamburgerMenu />
                        }
                    </button>
                </div>
            </div>
            {
                isOpen && (
                    <div className='bg-green-800 py-2 px-2 text-center'>
                        <Link 
                            to='/blog'
                            className='block py-1 rounded hover:bg-green-600'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Blog
                        </Link>
                        <Link 
                            to='/about'
                            className='block py-1 rounded hover:bg-green-600'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            About
                        </Link>
                        <Link 
                            to='/contact'
                            className='block py-1 rounded hover:bg-green-600'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Contact
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar
