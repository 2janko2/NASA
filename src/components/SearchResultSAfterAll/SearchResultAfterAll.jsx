import classes from "./SearchResult.module.css";

const SearchResult = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.searchResult?.collection?.items?.map((image) => (
                <div key={image.data[0].nasa_id}>
                    <div className={classes.imageWrapper}>
                        <img src={image.links[0].href} className={classes.imgItem} alt={image.links.rel || "detour"} />
                    </div>
                    <div className={classes.author}>{image.links.rel}</div>
                </div>
            ))}
        </div>
    );
};

export default SearchResult;
