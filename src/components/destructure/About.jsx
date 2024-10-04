
const About = () => {
    return (
        <div style={styles.aboutContainer}>
            <h1 style={styles.heading}>About Tracom Development Academy</h1>
            <p style={styles.paragraph}>
                Welcome to Tracom Development Academy! We are dedicated to providing top-notch education and training in software development. Our mission is to empower individuals with the skills and knowledge they need to succeed in the tech industry.
            </p>
            <p style={styles.paragraph}>
                At Tracom, we offer a variety of courses and programs designed to cater to different skill levels, from beginners to advanced developers. Our experienced instructors are passionate about teaching and are committed to helping you achieve your goals.
            </p>
            <p style={styles.paragraph}>
                Join us and become a part of a vibrant community of learners and professionals who are shaping the future of technology.
            </p>
        </div>
    );
};
export default About;

const styles = {
    aboutContainer: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '2em',
        color: '#333',
        marginBottom: '10px',
    },
    paragraph: {
        fontSize: '1em',
        color: '#666',
        lineHeight: '1.6',
        marginBottom: '10px',
    },
};
