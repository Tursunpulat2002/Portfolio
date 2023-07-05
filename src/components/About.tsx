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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className={styles.sectionExperince}>
                <p>5+</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
        </div>
    );
}

export default About;
