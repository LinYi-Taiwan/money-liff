import { api } from "./config/config";

export const createGroupApi = async (groupInfo) => {
    const { name, userLimit, imageUrl } = groupInfo;
    const payload = {
        name: name,
        user_limit: userLimit,
        image_url: "imageUrl", // 要先 call upload image api
    };
    const { data } = await api.post("v1/group", payload);

    return data;
};

export const getGroupApi = async () => {
    const { data } = await api.get("v1/group?page=1&per_page=6");
    return data;
};
