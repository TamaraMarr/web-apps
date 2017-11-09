// var repo = require("./repos");
// var thing = require("./thing")
import Repos from './repos';
import Thing from './thing';

class RepoThing {
    getData(display) {
        //ekstraktuje podatke iz dobijenog objekta iz repos.js;
        const repo = new Repos();
        repo.getRepos(items => {
            const resultForMain = this.makeThings(items);
            display(resultForMain);
        });

    }

    makeThings(repoItems) {

        let thingsArr = [];
        
        repoItems.forEach(function(item) {
            const thing = new Thing(item.name, item.owner.avatar_url);
            thingsArr.push(thing);
        });
        
        return thingsArr;
    }
}

export default RepoThing;