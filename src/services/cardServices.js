
const MAX_ITEMS_PER_PAGE = 20;
const HOST = 'https://api.elderscrollslegends.io'

export const getCards = (page, name) => {

    let url = `${HOST}/v1/cards?pageSize=${MAX_ITEMS_PER_PAGE}&page=${page}`
    url = !!name ? `${url}&name=${name}` : url;

    return fetch(url)
        .then(response => response.json())
        .then(result => result)
        .catch(e => console.log(e))
}