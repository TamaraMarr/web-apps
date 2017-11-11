import searchedForItem from './user';
import Thing from './thingMaker';

class searchedForThing {
    constructor(params) {
        this.params = params
    }
    
    getData(display){
        var thing = new searchedForItem(this.params);
        
        thing.getUser((items) => {
            var thingsArr = this.makeThings(items);
            display(thingsArr);
        });
    }
    
    makeThings(items){
        var that = this;
        var thingArr = [];

        items.forEach(function(item){
            if(that.params.endPoint === 'users'){
                var newThing = new Thing(item.login, item.avatar_url, item.html_url);
            } else {
                var newThing = new Thing(item.owner.login, item.owner.avatar_url, item.html_url);
            }
            
            thingArr.push(newThing);
        })

        return thingArr;
    }
}

export default searchedForThing;