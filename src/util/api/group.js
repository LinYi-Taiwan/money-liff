import { api } from "./config/config";

export const createGroup = async (groupInfo) => {
    const { name, userLimit, imageUrl } = groupInfo;
    const payload = { name: name, user_limit: userLimit, image_url: imageUrl };
    const { data } = await api.post("v1/group", payload);

    return data;
};
