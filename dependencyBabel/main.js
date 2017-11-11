import RepoThing from './getRepoThing';

function startRequest() {
    let repoThings = new RepoThing();
    
    repoThings.getData((thingsArr) => {
        thingsArr.forEach(function(thing) {
            console.log(thing.name);
        });
    });
}

startRequest();