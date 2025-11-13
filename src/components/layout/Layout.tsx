import type { ReactNode } from "react";
import { Header } from "./header/Header";
import styles from "./Layout.module.scss";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
    <div className={styles.container}>
        <Header/>
        <main className={styles.main}>{children}</main>
        <p className={styles.footer}>
            This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
    </div>
);

