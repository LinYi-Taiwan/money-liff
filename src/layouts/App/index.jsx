import React from "react";

import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import "./index.scss";
const App = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default App;
