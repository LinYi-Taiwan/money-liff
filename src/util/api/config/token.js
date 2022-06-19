export const getLocalStorageLineInfo = () => {
    const storageLineItemKey = `LIFF_STORE:${
        import.meta.env.VITE_LIFF_ID
    }:decodedIDToken`;
    const storageLineItemValues =
        window.localStorage.getItem(storageLineItemKey);

    return JSON.parse(storageLineItemValues);
};
