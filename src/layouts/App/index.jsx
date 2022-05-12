import React from "react";
import SEOMeta from "../../components/atom/SEOMeta";

import Header from "@/components/organisms/Header";

import "./index.scss";

const App = ({ children }) => (
    <>
        <SEOMeta />
        <Header />
        {children}
    </>
);

export default App;
