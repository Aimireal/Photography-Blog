import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex flex-grow items-center pl-56'>
            <ul className='flex flex-row text-gray-50 flex-grow justify-around'>
                <li className='hover:underline hover:text-gray-400'>
                    <Link href='/About'>
                        <a>About</a>
                    </Link>
                </li>
                <li className='hover:underline hover:text-gray-400'>
                    <Link href='/GalleryPage'>
                        <a>Gallery</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar