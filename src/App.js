import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import FrontPageContainer from "./components/FrontPage/FrontPageContainer";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <div>
                    <Route path="/" component={FrontPageContainer} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
