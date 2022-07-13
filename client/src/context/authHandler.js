import { getUser } from "./Data";

export const signInAuth = async(username, password) => {
    console.log(username);
    console.log(password);
    const user = await getUser(username,password);
    return user;
}