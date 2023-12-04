import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import List from '../List'
import LOGO from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className='py-[32px]'>
        <Container>
            <Flex>
                <div className="w-[615px]">
                    <Image src={LOGO} />
                </div>
                <div className="w-3/4">
                    <ul>
                        <Flex>
                        <List href='#' text='Home' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                        <List href='#' text='Shop' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                        <List href='#' text='Contacts' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                        <List href='#' text='About' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                        <List href='#' text='Journal' className='text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300'/>
                        
                        </Flex>
                    </ul>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar