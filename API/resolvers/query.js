// import user data from json file
import users from '../data.json' assert { type: "json" };

const Query = {
    users: () => users,
    // method to find a specific user by the id
    user(parent, args, contextValue, info) {
        return users.find( user => user.id === args.id )
    }
}

export default Query;