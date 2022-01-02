import Link from 'next/link'
import ThemeToggle from '../ThemeToggle'

const Navbar = () => {
    return (
        <nav className='flex flex-grow items-center pl-56'>
            <ul className='flex flex-row text-gray-400 flex-grow justify-around'>
                <li className='hover:bold hover:text-gray-400'>
                    <Link href='/About'>
                        <a>About</a>
                    </Link>
                </li>
                <li className='hover:bold hover:text-gray-400'>
                    <Link href='/GalleryPage'>
                        <a>Gallery</a>
                    </Link>
                </li>
            </ul>
            <ThemeToggle/>
        </nav>  
    )
}

export default Navbar 