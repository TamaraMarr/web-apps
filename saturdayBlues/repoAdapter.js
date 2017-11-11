// import Repos from './repo';
// import Thing from './thingMaker';

// class RepoThing {
//     constructor(params) {
//         this.params = params;
//     }
//     getData(display){
//         var repoThing = new Repos(this.params);

//         repoThing.getRepo((items) => {
//             var thingsArr = this.makeThings(items);
//             display(thingsArr);
//         });
//     }

//     makeThings(items){
//         var thingArr = [];

//         items.forEach(function(item){
//             var newThing = new Thing(item.owner.login, item.owner.avatar_url, item.html_url);
//             thingArr.push(newThing);
//         })

//         return thingArr;
//     }
// }

// export default RepoThing;