import React, { Suspense } from "react";

import App from "@/layouts/App/index";

import { useRoutes, A } from "hookrouter";
import routes from "../../routes";

const Loading = () => <div>Loading...</div>;

const Router = () => {
    const matchComponent = useRoutes(routes) || "not found";

    const loading = false;
    const renderComponent = loading ? (
        <Loading />
    ) : (
        <Suspense fallback={<Loading />}>{matchComponent}</Suspense>
    );

    return <App children={renderComponent} />;
};

export default Router;
