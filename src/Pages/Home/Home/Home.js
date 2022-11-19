import React from 'react';
import Appointment from '../MakeAppointment/MakeAppointment';
import Banner from '../Banner/Banner';
import Contain from '../Contain/Contain';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import ContactInfo from '../ContactInfo/ContactInfo';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Contain></Contain>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;