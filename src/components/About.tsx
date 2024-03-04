import React from 'react'

export function About() {
  return (
    <>
    <div className='flex justify-center'>
    <div className='absolute top-44'>
    <div className='flex flex-col justify-center'>
        <h2 className='block mx-auto font-extralight text-xl sm:text-2xl text-center mb-2'>about lumina gallery</h2>
        <div className="photo rounded-md max-w-96 mx-auto">
            <img src="/imgs/about.jpg" alt=""  className="w-[100%] h-[100%] rounded-md object-cover" />
        </div>
    </div>
    </div>
    </div>
    <div className=''>
    <div>
        <p className=''>Welcome to Lumina Gallery, a sanctuary of photographic art where the beauty of the world is captured and displayed. Nestled in a modern, minimalist space bathed in natural light, our gallery is a testament to the power of simplicity and elegance. With a palette of white and off-white, the interior serves as the perfect canvas for the vibrant and thought-provoking photographs that adorn our walls.</p>
        <p className=''>At Lumina Gallery, we celebrate the art of photography in all its forms. From breathtaking landscapes to intimate portraits, our carefully curated collection showcases the work of both renowned photographers and emerging talents. Each photograph tells a story, inviting viewers to embark on a visual journey that transcends time and space.</p>
        <p className=''>Our mission is to inspire and connect with our visitors, offering a tranquil environment where the art of photography can be appreciated and explored. Lumina Gallery is not just a space for viewing photographs; it's a place where memories are made, and the beauty of life is illuminated.</p>
    </div>
    </div>
    </>
  )
}
