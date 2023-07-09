import React from "react";
import styles from "../styles/skills.module.css";
import Skill, { skill } from "./Skill";

interface SkillObject {
    category: string;
    skills: Array<skill>;
}

const skillData: Array<SkillObject> = [
    {
        category: "Languages",
        skills: [
            { image: "swift.svg", title: "Swift" },
            { image: "objective-c.svg", title: "Objective-C" },
            { image: "kotlin.svg", title: "Kotlin" },
            { image: "javascript.svg", title: "Javascript" },
            { image: "typescript.svg", title: "Typescript" },
            { image: "java.svg", title: "Java" },
            { image: "python.svg", title: "Python" },
            { image: "html-5.svg", title: "HTML" },
            { image: "css-3.svg", title: "CSS" },
            { image: "c.svg", title: "C" },
            { image: "c-plusplus.svg", title: "C++" },
            { image: "c-sharp.svg", title: "C#" },
        ],
    },
    {
        category: "Frameworks & Libraries",
        skills: [
            { image: "uikit.svg", title: "UIKit" },
            { image: "webkit.svg", title: "WebKit" },
            { image: "nextjs.svg", title: "Next.js" },
            { image: "react.svg", title: "React" },
            { image: "bootstrap.svg", title: "Bootstrap" },
            { image: "tailwindcss.svg", title: "Tailwind" },
            { image: "flask.svg", title: "Flask" },
            { image: "android.svg", title: "Android" },
        ],
    },
    {
        category: "Tools & Data",
        skills: [
            { image: "mysql.svg", title: "MySql" },
            { image: "sqlite.svg", title: "Sqlite" },
            { image: "nodejs.svg", title: "Node.js" },
            { image: "figma.svg", title: "Figma" },
            { image: "vercel.svg", title: "Vercel" },
            { image: "xcode.svg", title: "XCode" },
            { image: "cocoapods.svg", title: "Cocoapods" },
            { image: "github.svg", title: "GitHub" },
            { image: "git.svg", title: "Git" },
        ],
    },
];

function Skills() {
    return (
        <div className={styles.root}>
            {skillData.map((skill, i) => {
                return (
                    <div className={styles.categoryContainer} key={i}>
                        <h2>{skill.category}</h2>
                        <div className={styles.skillsContainer}>
                            {skill.skills.map((item, j) => {
                                return <Skill key={j} skill={item} />;
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Skills;
