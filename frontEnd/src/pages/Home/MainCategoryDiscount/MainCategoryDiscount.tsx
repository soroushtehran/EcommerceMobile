import React from 'react'

export default function MainCategoryDiscount() {
    return (
        <section className='sectionSpace'>
            <div className='container'>
                <div className='MainCategoryDiscount__background bg-center bg-cover bg-blend-normal flex items-center w-full h-full justify-center border-px rounded-3xl shadow-xl overflow-hidden'>
                    <div className='w-full h-full flex items-center p-6 md:p-10'>
                        <a href='#' className='flex items-center gap-x-3 md:gap-x-6'>
                            {/* <img src="img/shoe/shoeicona.png" alt="icon" className='w-[87px] md:w-[110px]' /> */}
                            <div className='w-full text-white'>
                                <h5 className='font-MorabbaBold text-xl md:text-4xl mb-2'>موبایلتو قسطی بخر</h5>
                                <p className='font-DanaDemiBold text-lg md:text-2xl '> تخفیف تا 15</p>
                                <span className='font-Dana text-sm md:text-xl md:pr-50 my-4'> ارسال رایگان | پرداخت درب منزل </span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
