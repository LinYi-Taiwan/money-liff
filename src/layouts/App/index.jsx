import React from "react";

import Header from "@/components/organisms/Header";

import "./index.scss";

const App = ({ children }) => (
    <>
        <Header />
        {children}
    </>
);

export default App;
