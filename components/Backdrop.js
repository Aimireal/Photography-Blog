import Image from 'next/image';

const Backdrop = ( {photoInfo, setPhotoInfo} ) => {
    const containerStyle = () => {
        if (photoInfo[2] === 'large') {
            return 'flex flex-col items-center justify-content h-screen sm:flex-row'
        } else {
            return 'flex flex-col items-center justify-content h-screen lg:flex-row'
        }
    }

    const firstBoxStyle = () => {
        if (photoInfo[2] === 'large') {
            return 'h-1/2 w-full p-4 flex items-center justify-center sm:py-6 sm:p-0 sm:h-full sm:ml-6 sm:mr-3 lg:w-2/5 lg:ml-8 lg:mr-3 lg:py-8 lg:px-0'
        } else {
            return 'h-1/2 w-full mt-8 p-4 flex items-center justify-center sm:p-0 sm:mt-6 lg:h-full lg:w-2/5 lg:ml-8 lg:mr-3 lg:py-8 lg:px-0'
        }
    }

    const secondBoxStyle = () => {
        if (photoInfo[2] === 'large') {
            return 'w-full h-1/2 p-4 mb-2  sm:h-3/4 sm:ml-3 sm:mr-6 sm:p-0 lg:w-3/5 lg:mr-8 lg:ml-3 lg:p-0'
        } else {
            return 'w-full h-1/2 p-4 mb-2 sm:pb-0 sm:mb-6 sm:px-6 ms:pt-6 lg:h-3/4 lg:w-3/5 lg:mr-8 lg:ml-3 lg:p-0'
        }
    }

    const textBoxStyle = () => {
        if (photoInfo[2] === 'large') {
            return 'text-gray-50 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center mb-2 h-1/3 sm:justify-evenly sm:h-1/4 lg:h-1/5 lg:flex-row'
        } else {
            return 'text-gray-50 bg-gray-900 mb-2 bg-opacity-90 text-center flex flex-col items-center justify-center h-1/3 sm:flex-row sm:justify-around sm:h-1/4 lg:h-1/5'
        }
    }

    const manageRender = () => {
        if (photoInfo[0] != null && photoInfo[1] != null && photoInfo[2] != null && photoInfo[6] != null) {
            return (
                <div className='fixed transform -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 bg-gray-900 bg-opacity-70 h-screen w-screen'>
                    <div className='absolute w-6 top-3 right-4 z-50 sm:top-4 sm:right-8 sm:w-8' 
                        onClick={() => {
                            setPhotoInfo([null, null, null, null, null, null, null, null])
                        }}>
                        <Close />
                    </div>
                    <div className={containerStyle()}>

                        <div className={firstBoxStyle()}>
                            <div className='relative h-full w-full'>
                                <Image 
                                    src={photoInfo[1]}
                                    key={photoInfo[0]}
                                    alt={photoInfo[6]}
                                    layout="fill"
                                    objectFit="contain"
                                    placeholder='blur'
                                /> 
                            </div>  
                        </div>

                        <div className={secondBoxStyle()}>
                            <div className={textBoxStyle()}>
                                <h1><span className='font-semibold'>Country:</span>  {photoInfo[3]}</h1>
                                <h1><span className='font-semibold'>City:</span>  {photoInfo[4]}</h1>
                                <h1><span className='font-semibold'>Location:</span>  {photoInfo[5]}</h1>
                            </div>
                            <div className='p-4 text-justify text-gray-900 bg-black-400 bg-opacity-90 h-2/3 overflow-y-auto scrollbar scrollbar-thumb-gray-300  scrollbar-thumb-rounded-full sm:h-3/4 lg:h-4/5'>
                            <p className='mr-3'>{photoInfo[7]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }

return manageRender()
}

const Close = (props) => {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 18L18 6M6 6l12 12" 
          fill="#FBBF24"
          stroke="#F9FAFB"
          strokeWidth="2"
          />
        </svg>
    )
}

export default Backdrop