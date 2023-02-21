// import user data from json file
import users from '../data.json' assert { type: "json" };

const Query = {
    users: () => users
}

export default Query;