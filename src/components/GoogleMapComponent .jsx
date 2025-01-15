import React from 'react';
import Iframe from 'react-iframe';

const GoogleMapComponent  = () => {
	return (
		<div>
			<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57844.93231963539!2d89.97039979428467!3d25.023610398867838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d610b1247fcd%3A0x6820b0a61eb62bfc!2sSherpur!5e0!3m2!1sen!2sbd!4v1736939288973!5m2!1sen!2sbd" 
        width="1080px"
        height="320px"
        id=""
        className="mx-auto"
        display="block"
        position="relative"/>
		
		</div>
	);
};

export default GoogleMapComponent ;