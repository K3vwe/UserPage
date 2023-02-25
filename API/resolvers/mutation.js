import bcrypt from 'bcrypt';
import { ForbiddenError, AuthenticationError } from 'apollo-server-express';
import { v4 as uuidv4 } from 'uuid';
import users from '../data.json' assert { type: "json" };
import writeDataToFile from "../utils.js";

const Mutation = {
    // Mutation to create a new user and add to JSON file
    userSignUp: async (parent, {username, email, firstname, lastname, password}) => {
        // remove spaces from email and convert to lowercase
        email = email.trim().toLowerCase();

        // hash the user password
        const hashed = await bcrypt.hash(password, 10);

        /* Store hased password in JSON file */
        // Create new user
        const newUser = {
            id: uuidv4(),
            username,
            firstname,
            lastname,
            password: hashed,
            email
        }

        // Push newUser to users array
        users.push(newUser);
        
        // // rewrite the users data in the JSON file to the new one
        writeDataToFile('./data.json', users);

        return "User Created";
    },

    // Mutation for a User to signIN
    userSignIn: async (parent, {username, email, password}) => {
        if(email) {
            // format email address
            email = email.trim().toLowerCase();
        };

        // Search for user in JSON file
        try {
            // if user exists
            const user = users.find( u => u.username === username);
            return `${user.username} logged in successfully`
        } catch {
            throw new Error(`${username || email} is not an active user`)
        }

    }
}

export default Mutation;