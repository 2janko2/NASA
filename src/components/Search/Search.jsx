import React, { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./Search.module.css";
import { getSearchRequest } from "../../store/app";

const Search = (props) => {
    const [value, setValue] = useState("");

    const dispatch = useDispatch("");

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onKeyUp = (e) => {
        if (e.charCode === 13) request();
    };

    const request = () => {
        dispatch(getSearchRequest(value));
    };

    return (
        <div className={classes.wrapper}>
            <input
                onChange={(e) => onChange(e)}
                onKeyPress={onKeyUp}
                value={value}
                className={classes.input}
                type="text"
                placeholder="find your star"
            />
            <button className={classes.button} type="submit" onClick={request}></button>
        </div>
    );
};

export default Search;
