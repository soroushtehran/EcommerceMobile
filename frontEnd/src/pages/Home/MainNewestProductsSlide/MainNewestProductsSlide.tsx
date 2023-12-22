import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import NewProductsSlider from './NewProductsSlider/NewProductsSlider'

export default function MainNewestProductsSlide() {
    return (
        <section className='sectionSpace'>
            <div className="container relative shadow-lg overflow-hidden bg-slate-300 rounded-3xl">
                <div className='w-full h-min '>
                    <SectionTitle title='جدید ترین محصولات' subTitle='تست' link='/' />
                    <div className='h-full'>
                        <NewProductsSlider />
                    </div>
                </div>
            </div>
        </section>
    )
}
