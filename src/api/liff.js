import axios from "axios";
import liff from "@line/liff";

export const getUserData = async () => {
    await liff
        .init({
            liffId: import.meta.env.VITE_LIFF_ID,
        })
        .then(() => {
            console.log(liff.getDecodedIDToken());
            // setProfile(liff.getDecodedIDToken());
            setMessage("LIFF init succeeded.");
        })
        .catch((e) => {
            setMessage("LIFF init failed.");
            setError(`${e}`);
        });
};
