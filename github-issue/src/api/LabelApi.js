export const deteleLabel = async (url, labelId) => {
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

export const addLabels = async (url, params) => {
    try {
        const response = await fetch(url,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(params)
        });
        const data = response.json();

        return data;
    } catch (e) {
        alert(e);
    }
};