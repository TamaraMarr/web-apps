// import axios from 'axios';

// class Repos {

//     constructor(params) {
//         this.searchedTerm = params.searchedTerm;
//         this.endPoint = params.endPoint;
//     }

//     getRepo(resultGetter) {
//         axios
//             .get(`${urlBase}${this.endPoint}?q=${this.searchedTerm}`)
//             .then(function (results) {
//                 // console.log(results);
//                 resultGetter(results.data.items)
//             })
//             .catch(function (error) {
//                 console.log('Error: ', error);
//             })
//     }
// }

// export default Repos;