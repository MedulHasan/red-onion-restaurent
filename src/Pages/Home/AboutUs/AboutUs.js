import React, { useEffect, useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const [aboutus, setAboutus] = useState([]);

    useEffect(() => {
        fetch('aboutus.json')
            .then(res => res.json())
            .then(data => setAboutus(data))
    }, [])
    return (
        <div className="about-us-container">
            <div className="about-us-head mb-4">
                <h2>Why you choose us</h2>
                <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            </div>
            <div className="about-us">
                {
                    aboutus.map(item => (
                        <div key={item.id}>
                            <img style={{ width: '300px', height: '300px', borderRadius: '20px' }} src={item.img} alt="" />
                            <div className="body-card">
                                <img className="me-2" src={item.icon} alt="" />
                                <div className="">
                                    <h5>{item.title}</h5>
                                    <p>{item.body}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AboutUs;