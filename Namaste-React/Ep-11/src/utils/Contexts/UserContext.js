import { createContext } from "react";
const UserContext = createContext({
    loggedInUser: "Default Value",
});

export default UserContext;