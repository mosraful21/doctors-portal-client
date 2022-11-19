import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <section className='my-6' style={{
            background: `url(${bg})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse p-0">
                    <img src={chair} className="lg:w-1/2 rounded-lg" alt='' />
                    <div className='lg:p-10'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupid vol et in. Quae fug ut assume except exercitation quasi. In dele aut rep et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;