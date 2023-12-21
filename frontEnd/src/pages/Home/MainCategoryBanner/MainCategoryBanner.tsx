import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

export default function MainCategoryBanner() {
  return (
    <section className='sectionSpace'>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-5 h-[185px] md:[300px] overflow-hidden text-white'>
        <div className='categoryBanner__accessories rounded-2xl bg-cover bg-center flex flex-col items-start justify-center pr-7 md:pr-12'>
          <span className='font-DanaDemiBold text-l/6 md:text-xl/6 mb-4 md:mb-7'>
            با تجهیزات کامل خرید کنید
          </span>
        </div>
        <div className='categoryBanner__mobile rounded-2xl bg-cover bg-center flex flex-col items-start justify-center pr-7 md:pr-12'>
          <span className='font-DanaDemiBold text-l/6 md:text-xl/6 mb-4 md:mb-7'>
            اورجینال خرید کنید
          </span>
        </div>
      </div>
    </section>
  )
}
