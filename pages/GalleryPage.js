import { useState } from "react"
import Head from "next/head"

import galleryData from "../public/data/GalleryData"
import Gallery from "../components/Gallery"
import Backdrop from "../components/Backdrop";
import Header from "../components/Header"


export default function GalleryPage() {
    const galleryPhotos = galleryData.gallery
    const [ photoInfo, setPhotoInfo ] = useState([
        null, null, null, null, null, null, null, null
    ])

    return (
        <div>
            <Head>
                <title>OKDEE</title>
            </Head>
            <div>
                <Header/>
                <div className='bg-white-200 w-screen flex items-center justify-center pt-4 pl-2 pr-4'>
                    <p className='text-color-gray-900 font-bold underline text-center'>Click for more details</p>
                </div>
                <Gallery photos={galleryPhotos} setPhotoInfo={setPhotoInfo}/>
                <Backdrop photoInfo={photoInfo} setPhotoInfo={setPhotoInfo}/>
            </div>
        </div>
    )
}