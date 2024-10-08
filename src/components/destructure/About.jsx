
import React from 'react';

const About = () => {
    return (
        <div style={styles.aboutContainer}>
            <h1 style={styles.heading}>About Tracom Development Academy</h1>
            <p style={styles.introduction}>
                Welcome to Tracom Development Academy! We are dedicated to providing top-notch education and training in software development. Our mission is to empower individuals with the skills and knowledge they need to succeed in the tech industry.
            </p>
            <div style={styles.cardContainer}>
                <Card
                    title="Comprehensive Curriculum"
                    description="Our courses cover a wide range of topics, including web development, mobile app development, data science, and more. Each course is designed to give you hands-on experience with the latest tools and technologies."
                />
                <Card
                    title="Experienced Instructors"
                    description="Learn from industry experts who bring real-world experience to the classroom. Our instructors are passionate about teaching and are committed to your success."
                />
                <Card
                    title="Community & Networking"
                    description="Join a vibrant community of learners and professionals. Our networking events and workshops allow you to connect with industry leaders and peers."
                />
                <Card
                    title="Job Placement Assistance"
                    description="We offer job placement assistance to help you kickstart your career. Our partnerships with leading tech companies provide you with valuable job opportunities."
                />
                <Card
                    title="Hands-On Projects"
                    description="Apply your knowledge through hands-on projects that simulate real-world scenarios. Build your portfolio with practical work that showcases your skills."
                />
                <Card
                    title="Flexible Learning Options"
                    description="Choose from in-person and online classes to fit your schedule. We provide flexible learning options that cater to your needs."
                />
            </div>
            <p style={styles.conclusion}>
                At Tracom, we believe in equipping you with the tools necessary for a successful career in technology. Join us and become part of a community that is shaping the future of the tech industry.
            </p>
        </div>
    );
};

const Card = ({ title, description }) => (
    <div style={styles.card}>
        <h2 style={styles.cardTitle}>{title}</h2>
        <p style={styles.cardDescription}>{description}</p>
    </div>
);

const styles = {
    aboutContainer: {
        backgroundImage: 'linear-gradient(to left, 001F3F, 003366)',
        padding: '50px',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        margin: '20px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#ffcc00',
        marginBottom: '20px',
    },
    introduction: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        marginBottom: '40px',
        color: '#fff',
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
    },
    card: {
        backgroundColor: '#fff',
        color: '#333',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        flex: '1 1 250px', // Adjust card size
        maxWidth: '300px',
        textAlign: 'left',
        transition: 'transform 0.3s',
    },
    cardTitle: {
        fontSize: '1.5rem',
        marginBottom: '10px',
        color: '#0066ff',
    },
    cardDescription: {
        fontSize: '1rem',
        lineHeight: '1.4',
    },
    conclusion: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        marginTop: '40px',
        color: '#fff',
    },
};

export default About;


