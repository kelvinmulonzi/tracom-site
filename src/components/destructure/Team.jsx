import React from 'react';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'Project Manager',
        image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8', 
        bio: 'John has over 10 years of experience in project management, leading diverse teams to success in the tech industry. He excels in agile methodologies and delivering projects on time.',
        experience: '10+ years in Project Management',
        skills: ['Agile Methodologies', 'Team Leadership', 'Budget Management'],
        contact: 'john.doe@tracom.com'
    },
    {
        name: 'Jane Smith',
        role: 'Lead Developer',
        image: 'https://images.unsplash.com/photo-1573496800440-5c9c48a8d0f0?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        bio: 'Jane is a highly skilled full-stack developer with a passion for building scalable web applications. She specializes in React, Node.js, and cloud-based technologies.',
        experience: '8+ years in Software Development',
        skills: ['React', 'Node.js', 'AWS'],
        contact: 'jane.smith@tracom.com'
    },
    {
        name: 'Sam Wilson',
        role: 'UI/UX Designer',
        image: 'https://plus.unsplash.com/premium_photo-1674586421844-99330bd20c65?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Correct local path
        bio: 'Sam is a creative UI/UX designer who focuses on creating intuitive user experiences. His designs are known for their simplicity and user-centered approach.',
        experience: '5+ years in UI/UX Design',
        skills: ['Figma', 'Sketch', 'Adobe XD'],
        contact: 'sam.wilson@tracom.com'
    }
];

const Team = () => {
    return (
        <div className="team-container">
            <h1 className="team-title">Meet Our Team</h1>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={`${member.name}`} className="member-image" />
                        <h2>{member.name}</h2>
                        <p className="member-role">{member.role}</p>
                        <p className="member-bio">{member.bio}</p>
                        <p><strong>Experience:</strong> {member.experience}</p>
                        <p><strong>Skills:</strong> {member.skills.join(', ')}</p>
                        <p><strong>Contact:</strong> <a href={`mailto:${member.contact}`}>{member.contact}</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;