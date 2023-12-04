import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import search from '../../assets/search.png'
import bar from '../../assets/bar.png'
import user from '../../assets/Icon_user.png'
import cart from '../../assets/Icon_cart.png'


const Header = () => {
  return (
    <section className='bg-header py-[25px]'>
        <Container>
            <Flex>
                <div className="w-1/3">
                    <Flex className='content-center'>
                        <Image src={bar}/>
                        <p className='text-primary font-dmsans text-[14px] font-normal'>
                        Shop by Category
                        </p>
                    </Flex>
                </div>
                <div className="w-1/3 relative">
                    <input type="text" placeholder='Search Products' className='w-full py-4 ps-[21px] placeholder:text-[14px] placeholder:text-[#C4C4C4] focus:outline-none'/>
                    <div className='absolute top-1/2 -translate-y-1/2 right-[17px]'>
                    <a href="#" className=''>
                        <Image src={search}/>
                    </a>
                    </div>
                </div>
                <div className="w-1/3">
                    <Flex className="justify-end">
                    <Image src={user} className='me-[41px]'/>
                    <Image src={cart} className=''/>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Header