import axios from 'axios';
// let axios = require('axios');
//dohvata json sa servera i obavestava funkciju koja prepakuje podatke
class Repos {
    getRepos(handler) {
        axios.get('https://api.github.com/search/repositories?q=explore&per_page=5')
            .then(function (response) {
                handler(response.data.items);
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    }
}

// new Repos().getRepos(console.log);

export default Repos;

//funkcija koja prepakuje podatke (handler) i zove glavnu

//glavna zapocinje proces