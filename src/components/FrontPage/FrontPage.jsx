import SearchResult from "../SearchResult/SearchResult";
import classes from "./FrontPage.module.css";

const FrontPage = (props) => {
    return (
        <div>
            <SearchResult searchResult={props.searchResult} />
        </div>
    );
};

export default FrontPage;
