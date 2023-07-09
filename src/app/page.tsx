import About from "@/components/About";
import styles from "../styles/page.module.css";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <div className={styles.root}>
            <Hero />
            <About />
            <Skills />
            <Projects />
        </div>
    );
}
