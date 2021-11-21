import { HashRouter, Route } from "react-router-dom";

import FrontPageContainer from "./components/FrontPage/FrontPageContainer";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header />
                <div>
                    <Route path="/" component={FrontPageContainer} />
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
