import styles from "./Header.module.scss";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { SearchBar } from "../searchbar/SearchBar";

export const Header = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") ?? "";

    const handleSearch = (value: string) => {
        const trimmed = value.trim();
        if (!trimmed) return;
        navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    };

    return(
        <div className={styles.container}>
            <div className={styles.gridHeader}>
                <div/>
                <div className={styles.colCenter}>
                    <header className={styles.header}>  
                        <Link to="/" className={styles.logo}>
                            <img src="/AvaLonn.png" className={styles.logoPic}/>
                        </Link>
                    </header>
                </div>
                <div/>
            </div>

            <SearchBar initialValue={q} onSearch={handleSearch}/>
        </div>
    )
}