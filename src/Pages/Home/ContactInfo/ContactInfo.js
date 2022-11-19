import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactInfo = () => {
    return (
        <section className='mt-28 mb-5' style={{
            background: `url(${appointment})`
        }}>
            <div className='p-12'>
                <div className='mb-8 text-center'>
                    <h5 className='font-bold text-primary'>Contact Us</h5>
                    <h3 className='text-3xl text-white'>Stay connected with us</h3>
                </div>
                <div className='text-center'>
                    <input type="text" placeholder="Email address" className="input w-full max-w-xs mb-4" /> <br />
                    <input type="text" placeholder="Subject" className="input w-full max-w-xs mb-4" /> <br />
                    <textarea className="textarea w-full max-w-xs" placeholder="Your message"></textarea>
                </div>
                <div className='text-center mt-4'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;