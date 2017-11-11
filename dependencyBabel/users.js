let axios = require('axios');

class Users {
    getUsers(onFinish) {
        axios.get('https://api.github.com/search/users?q=marko')
            .then(function (response) {
                onFinish(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default Users;