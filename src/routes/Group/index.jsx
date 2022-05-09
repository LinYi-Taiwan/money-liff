import AllGroup from "@/layouts/AllGroup";
import Group from "@/layouts/Group";

export default {
    "/group": () => <AllGroup />,
    "/group/:id": (params) => <Group />,
};
