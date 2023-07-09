"use client";
import React from "react";
import styles from "../styles/projects.module.css";
import Skill, { skill } from "./Skill";
import Image from "next/image";
import { CodeBracketIcon, BoltIcon } from "@heroicons/react/24/solid";

interface project {
    image: string;
    title: string;
    description: string;
    repo: string;
    live?: string;
    tech: Array<skill>;
}

const projects: Array<project> = [
    {
        image: "/imgs/type-master.png",
        title: "Type Master",
        description:
            "It offers timed typing exercises with real-time feedback, allowing users to track their words per minute (WPM) and accuracy. With comprehensive performance statistics and progress charts, it serves as a valuable resource for individuals seeking to enhance their typing skills. With comprehensive performance statistics and progress charts, it serves as a valuable resource for individuals seeking to enhance their typing skills.",
        repo: "https://github.com/Tursunpulat2002/type-master",
        live: "https://tursunpulat2002.github.io/type-master/",
        tech: [
            {
                image: "html-5.svg",
                title: "HTML",
            },
            {
                image: "css-3.svg",
                title: "CSS",
            },
            {
                image: "javascript.svg",
                title: "Javascript",
            },
        ],
    },
    {
        image: "/imgs/culinary-delights.png",
        title: "Culinary Delights",
        description:
            "This is a native iOS app built with SwiftUI that allows users to browse recipes using the MealDB API. The app fetches data from the API to display a list of meals in various categories, and provides detailed information for each meal.",
        repo: "https://github.com/Tursunpulat2002/Culinary-Delights",
        tech: [
            {
                image: "swift.svg",
                title: "Swift",
            },
            {
                image: "objective-c.svg",
                title: "Objective-C",
            },
        ],
    },
    {
        image: "/imgs/geoguess.png",
        title: "Geoguess",
        description:
            "GeoGuess is an interactive iOS app developed using Swift UI and the Google Maps API. It challenges users to test their geographical knowledge by guessing locations based on random street views.",
        repo: "https://github.com/Tursunpulat2002/Class-Projects/tree/main/Geoguess",
        tech: [
            {
                image: "swift.svg",
                title: "Swift",
            },
            {
                image: "objective-c.svg",
                title: "Objective-C",
            },
        ],
    },
];

function Projects() {
    return (
        <div className={styles.root}>
            <h2>Projects</h2>
            <div className={styles.projectsContainer}>
                {projects.map((project, i) => {
                    return (
                        <div className={styles.projectContainer} key={i}>
                            <div className={styles.imageContainer}>
                                <Image height={1000} width={1000} src={project.image} alt={project.title} />
                            </div>
                            <div className={styles.description}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <div className={styles.skillsContainer}>
                                {project.tech.map((skill, j) => {
                                    return <Image height={30} width={30} src={skill.image} alt={skill.title} key={j} />;
                                })}
                            </div>
                            <div className={styles.buttonsContainer}>
                                <button
                                    onClick={() => {
                                        window.open(project.repo, "_blank");
                                    }}
                                >
                                    <p>Repo</p>
                                    <CodeBracketIcon className={styles.buttonIcon} />
                                </button>
                                {project.live ? (
                                    <button
                                        onClick={() => {
                                            window.open(project.live, "_blank");
                                        }}
                                    >
                                        <p>Live</p>
                                        <BoltIcon className={styles.buttonIcon} />
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
