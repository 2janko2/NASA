import React, { useEffect } from "react";

import FrontPage from "./FrontPage";
import { connect } from "react-redux";
import { getSearchRequest } from "../../store/app";

const FrontPageContainer = (props) => {
    useEffect(() => {
        props.getSearchRequest("Earth");
    }, []);

    return <FrontPage searchResult={props.searchResult} />;
};

const mapStateToProps = (state) => {
    return { searchResult: state.app.searchResult };
};

export default connect(mapStateToProps, { getSearchRequest })(FrontPageContainer);
