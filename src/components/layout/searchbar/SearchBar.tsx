import type { FormEvent} from "react";
import { useState } from "react";
import "../../../assets/scss/App.scss";
import GlobalButton from "../../common/button/GlobalButton";

interface SearchBarProps {
    initialValue?: string;
    onSearch: (value: string) => void;
}

export const SearchBar = ({ initialValue = "", onSearch }: SearchBarProps) => {
    const [value, setValue] = useState(initialValue);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSearch(value);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                    <form className="input-group mb-3" onSubmit={handleSubmit}>
                        <GlobalButton variant="primary" isBack type="button"/>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search for a movie..."
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            id="Search"
                        />
                        <GlobalButton variant="success" label="Search" type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};
