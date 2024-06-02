import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div>
                <p className='font-semibold text-gray text-xs'> More Ways To Shop {' '} <span>Find an Apple Store.</span>
                or {' '} <span className='underline text-blue'>Contact Me</span> {' '} near you.
                </p>
                <p className='font-semiblod text-gray text-xs'>Or call +91 9667548307</p>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px] w-full' />
            <div className='flex flex-xol md:flex-row md:items-center justify-between' >
                <p className='font-semibload text-gray text-xs '>
                    Copyright @ 2024 Shashwatttt. All rights are reserved.
                </p>
                <div className='flex'>
                    {footerLinks.map((Link, i) => (
                        <p key={Link} className='font-semibold text-gray text-xs'>
                            {Link}{' '}
                            {i !== footerLinks.lenght - 1 && (
                                <span className='mx-2'> |  </span>
                            )}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer