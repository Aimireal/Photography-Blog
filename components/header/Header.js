import Navbar from "./Navbar"
import Link from 'next/link'

const Header = () => {
    return (
        <div className='h-12 flex flex-row'>
            <div className='flex items-center pl-3'>
                <h3 className='text-gray-400 text-4xl hover:text-gray-50'>
                    <Link href='/'>
                        <a>OKD</a>
                    </Link>
                </h3>
            </div>
            <Navbar/>
        </div>
    )
}

export default Header