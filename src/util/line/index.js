import liff from "@line/liff/dist/lib";

export const lineInit = (liffId = import.meta.env.VITE_LIFF_ID) => {
    return liff.init({
        liffId: liffId,
    });
};

export const getLineUserProfile = () => {
    return liff.getDecodedIDToken();
};

export const lineShareTargetPicker = (flexContent) => {
    return liff.shareTargetPicker([
        {
            type: "flex",
            altText: `flex box test `,
            contents: flexContent,
        },
    ]);
};
