import axiosInstance from "../axiosnstance";
import endpoints from "../endpoints";

export const API_getEbooksList = async () => {
    return await axiosInstance({
        url: endpoints.ebooksList,
        method: "get",
    });
};

export const API_getEbookDetails = async (id, token) => {
    return await axiosInstance({
        url: endpoints.ebooksList,
        method: "get",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
