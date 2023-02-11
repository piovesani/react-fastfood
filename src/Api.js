
let ENDPOINT = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        const res = await fetch(`${ENDPOINT}/categories`);
        const json = await res.json();
        return(json);
    }
};



