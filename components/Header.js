import { useState, useEffect, useCallback } from "react"
import Navbar from "./Navbar"
import Link from 'next/link'

const mediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false)
    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true)
        } else {
            setTargetReached(false)
        }
        }, [])

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`)
        media.addEventListener('change', e => updateTarget(e))
        if (media.matches) {
            setTargetReached(true)
        }
    return () => media.removeEventListener('change', e => updateTarget(e))
    }, [])

    return targetReached
}

const Header = () => {
    return (
        <div className='bg-gray-900 h-16 flex flex-row'>
            <div className='flex items-center pl-3'>
                <h3 className='text-gray-400 font-logo text-4xl hover:text-gray-50'>
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