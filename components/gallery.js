import Image from 'next/image';

const Gallery = ({photos, setPhotoInfo}) => {
    const photoSpan = (photo) => {
        if (photo.size === 'large') {
            return 'photoGallery row-span-2 flex justify-center'
        } else if (photo.size === 'panoramic') {
            return 'photoGallery col-span-2 row-span-2 flex justify-center'
        } else {
            return 'photoGallery flex justify-center'
        }
    }

    return (
        <div>
            <div className='grid grid-cols-2 grid-rows-14 grid-flow-row-dense gap-3 px-3 py-3 md:grid-cols-3 md:px-6 md:py-6 lg:grid-cols-4 xl:grid-cols-5'>
                {photos.map( item => {
                    return <div className={photoSpan(item)} onClick={() => {
                        setPhotoInfo([item.index, item.photo, item.size, item.country, item.city, item.location, item.location, item.description]);
                    }} >
                            <Image 
                                src={item.photo}
                                key={item.index}
                                alt={item.alt}
                                layout='fill'
                                objectFit='cover'
                                object-position="50% 50%"
                                placeholder="blur"
                                className='hover:opacity-80'
                            />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Gallery