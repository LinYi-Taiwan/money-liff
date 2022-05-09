import Groups from "./Group";

const routes = {
    "/": () => "home",
    ...Groups,
};

export default routes;
