import ThingsRepo from './getRepoThing';

function startRequest() {
    let repoThings = new ThingsRepo();
    repoThings.getData((thingsArr) => {
        thingsArr.forEach(function(thing) {
            console.log(thing.name);
        });
    });
}

startRequest();