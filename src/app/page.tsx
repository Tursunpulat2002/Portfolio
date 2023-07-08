import About from "@/components/About";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <div className={styles.root}>
            <Hero />
            <About />
            <Skills />
        </div>
    );
}
