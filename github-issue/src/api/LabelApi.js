export const labelApi = async (url, labelId) => {
    try {
        await fetch(`${url}/${labelId}`, {
            method: "DELETE",
        });
    } catch (e) {
        alert(e);
    }
};

export const fetchLabels = async (url) => {
    try {
        const response = await fetch(url);
        const data = response.json();

        return data;
    } catch (e) {
        alert(e);
    }
};