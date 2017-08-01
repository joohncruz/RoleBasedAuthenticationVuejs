const users = [
    {
        username: 'admin',
        password: '123',
        role: 'admin'
    },
    {
        username: 'user',
        password: '123',
        role: 'resident'
    }
]

export default class LoginService {

    static login(user) {

        return new Promise(function(resolve, reject) {

        if (user) {
            
            users.forEach(usr => {
                if(user.username == usr.username && user.password == usr.password){
                    resolve({status: 'success', usr});
                }
            })

            reject(Error("user not found"));
        }
        else {
            reject(Error("user undefined"));
        }
        });

    }
}