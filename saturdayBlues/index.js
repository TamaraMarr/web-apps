import RepoThing from './repoAdapter';
import searchedForThing from './userAdapter';

class Run {
    display(){
        const searchedTerm = $('#searchedInput').val();
        const endPoint = $('#endPoint').val();
        
        const params = {
            searchedTerm,
            endPoint    
        }

        var things = new searchedForThing(params);
        things.getData((items) => {
            items.forEach(function(thing) {
                console.log(thing)
                var clickableName = $('<a>');
                clickableName.attr('href', thing.userURL);
                clickableName.css({
                    'display': 'block'
                });
                clickableName.text(thing.userName);
                
                var img = $('<img>');
                img.attr('src', thing.userAvatar);
                img.css({
                    'width': '200px',
                    'border-radius': '150px'
                });


                var profileDiv = $('<div>');

                profileDiv.append(clickableName);
                profileDiv.append(img);
                profileDiv.css({
                    'text-align': 'center',
                    'display': 'inline-block',
                    'float': 'left'
                });
                $('#results').append(profileDiv);
            });
        });
    };
}

var run = new Run();
document.querySelector('#search').addEventListener('click', run.display);