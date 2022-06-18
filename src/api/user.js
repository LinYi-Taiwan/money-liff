import { api } from "./config/config";

export const isUserOrRegister = async (userInfo) => {
    const { picture, sub, name } = userInfo;
    let payload = { avatar_url: picture, name: name, line_id: sub };
    const res = await api.post("v1/user/register", payload);

    console.log("im res", res);
};
