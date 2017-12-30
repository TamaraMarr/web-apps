import axios from 'axios';
const urlBase = 'https://api.github.com/search/';


class searchedForItem {

    constructor(params) {
        this.searchedTerm = params.searchedTerm;
        this.endPoint = params.endPoint;
    }

    getUser(resultGetter) {
        axios.get(`${urlBase}${this.endPoint}?q=${this.searchedTerm}`)
            .then(function (results) {
                resultGetter(results.data.items)
            })
            .catch(function (error) {
                console.log('Error: ', error);
            })
    }
}

export default searchedForItem;