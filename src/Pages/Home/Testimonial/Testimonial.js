import React from 'react';
import icon from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/1.jpg';
import people2 from '../../../assets/images/2.jpg';
import people3 from '../../../assets/images/3.jpg';
import Review from './Review';

const reviews = [
    {
        id: 1,

        name: 'Shahid Al Siam',
        img: people1,
        location: 'Jaldhaka',
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
        id: 2,
        name: 'Sahoriar Faysal',
        img: people2,
        location: 'Negbokto',
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
        id: 3,
        name: 'Mosraful Habib',
        img: people3,
        location: 'Balagram',
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
]

const Testimonial = () => {
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <figure><img className='w-24 lg:w-48' src={icon} alt="" /></figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;