import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import NewProductsSlider from '../MainNewestProductsSlide/NewProductsSlider/NewProductsSlider'

export default function MainDiscountProductsSlide() {
  return (
    <section className='sectionSpace'>
        <div className="container relative shadow-lg overflow-hidden bg-slate-300 rounded-3xl">
            <div className='w-full h-min '>
                <SectionTitle title='محصولات تخفیف دار' subTitle='تست' link='/' />
                <div className='h-full'>
                    <NewProductsSlider hastOffer />
                </div>
            </div>
        </div>
    </section>
  )
}
