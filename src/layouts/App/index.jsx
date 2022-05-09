import React from "react";

import Header from "@/components/organisms/Header";

import { A } from "hookrouter";
import Nav from "@/components/organisms/Nav";

import "./index.scss";

const navList = [{ title: "群組", link: "/group" }];

const App = ({ children }) => (
    <>
        <Header />
        {children}
    </>
);

export default App;
