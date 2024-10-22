import React from 'react';


const servicesData = [
    {
        title: 'Web Development',
        description: 'Building responsive and high-quality websites.',
        icon: '🌐',
    },
    {
        title: 'Mobile Development',
        description: 'Creating mobile applications for Android and iOS.',
        icon: '📱',
    },
    {
        title: 'UI/UX Design',
        description: 'Designing user-friendly and beautiful interfaces.',
        icon: '🎨',
    },
];

const Services = () => {
    return (
        <div className="services-container">
            <h1 className="services-title">Our Services</h1>
            <div className="services-list">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;