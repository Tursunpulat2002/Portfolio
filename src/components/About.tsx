import React from "react";
import { DevicePhoneMobileIcon, GlobeAltIcon, CircleStackIcon, PaintBrushIcon } from "@heroicons/react/24/solid";
import styles from "../styles/about.module.css";

function About() {
    return (
        <div className={styles.root}>
            <div className={styles.sectionTitle}>
                <h2>About Me</h2>
            </div>
            <div className={styles.sectionBody}>
                <p>
                    I am a dedicated software developer with a strong foundation in iOS development. Through academic coursework and hands-on
                    projects, I have honed my skills in creating user-friendly applications, integrating external APIs seamlessly, and adhering to
                    industry best practices. With a collaborative mindset and a drive for continuous learning, I am committed to delivering impactful
                    solutions that enhance user experiences while upholding high-quality standards in collaborative team environments.
                </p>
            </div>
            <div className={styles.sectionExperince}>
                <p>5+</p>
                <p>
                    With a commitment to delivering high-quality code and adhering to industry best practices, I have thrived in collaborative team
                    environments, fostering a positive and inclusive work culture. Throughout my journey, I gained invaluable experience in
                    Mobile development, successfully completing hands-on projects that involved creating interactive apps by leveraging external APIs.
                </p>
            </div>
            <div className={styles.skills}>
                <div className={styles.skill}>
                    <DevicePhoneMobileIcon />
                    <p>MOBILE</p>
                    <p>DEVELOPMENT</p>
                </div>
                <div className={styles.skill}>
                    <GlobeAltIcon />
                    <p>WEB</p>
                    <p>DEVELOPMENT</p>
                </div>
                <div className={styles.skill}>
                    <CircleStackIcon />
                    <p>DATABASES MANAGEMENT</p>
                </div>
                <div className={styles.skill}>
                    <PaintBrushIcon />
                    <p>UI & UX</p>
                    <p>DESIGN</p>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1688946513">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
            <div className="custom-shape-divider-top-1688946632">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
        </div>
    );
}

export default About;
