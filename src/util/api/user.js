import { api } from "./config/config";

export const isUserOrRegister = async (userInfo) => {
    const { picture, sub, name } = userInfo;
    let payload = { avatar_url: picture, name: name, line_id: sub };
    const { data, status } = await api.post("v1/user/register", payload);

    return data.message;
};
