import React from "react";
import { Helmet } from "react-helmet";

function SEOMeta(props) {
    return (
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1.0,user-scalable=no"
            ></meta>
        </Helmet>
    );
}

SEOMeta.propTypes = {};

export default SEOMeta;
