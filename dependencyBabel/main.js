import RepoThing from './getRepoThing';

function startRequest() {
    let repoThings = new RepoThing();
    repoThings.getData((thingsArr) => {
        thingsArr.forEach(function(thing) {
            // console.log(thing);
            var clickableName = $('<a>');
            clickableName.attr('href', thing.url);
            clickableName.css({'display': 'block'});
            clickableName.text(thing.name);

            var img = $('<img>');
            img.attr('src', thing.avatar);
            img.css({'width': '300px', 'border-radius': '150px'});

            var profileDiv = $('<div>');
            
            profileDiv.append(clickableName);
            profileDiv.append(img);
            profileDiv.css({'text-align': 'center'});
            $('body').append(profileDiv);
        });
    });
}

startRequest();