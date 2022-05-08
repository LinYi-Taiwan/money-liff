import React, { Suspense } from "react";

import Liff from "@/components/organisms/Liff";
import App from "@/layouts/App/index";

// import { HistoryContext } from "models/routing";

// import useRouter from 'util/hook/useRouter';

const Loading = () => <div>Loading...</div>;

const Router = ({ routes, history, store }) => {
    // const { loading, component } = useRouter(routes, history, store);
    const loading = false;
    const renderComponent = loading ? (
        <Loading />
    ) : (
        <Suspense fallback={<Loading />}>{<Liff />}</Suspense>
    );

    return <App children={renderComponent} />;
};

export default Router;
