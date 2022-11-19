import React from 'react';
import image from '../../../assets/images/treatment.png'

const Contain = () => {
    return (
        <div className="hero mt-28">
            <div className="hero-content flex-col lg:flex-row p-0">
                <img src={image} className="lg:w-1/2 rounded-lg" alt='photos' />
                <div className='lg:ml-12'>
                    <h2 className="card-title text-4xl mb-8">Exceptional Dental Care, on Your Terms</h2>
                    <p className='text-justify mb-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Contain;