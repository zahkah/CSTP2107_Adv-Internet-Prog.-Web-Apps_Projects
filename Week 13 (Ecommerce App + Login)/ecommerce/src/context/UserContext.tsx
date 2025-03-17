import { createContext } from "react";

// export interface UserContextType {
//     userData: UserData,
//     setUserData: (userData: UserData) => void
// }

interface UserData {
    isUserloggedIn: boolean,
    user: any
}

export interface UserContextType {
    userData: UserData,
    setUserData: (user: UserData) => void;
}

export const INITIAL_VALUE: UserContextType = {
    userData: {
        isUserloggedIn: false,
        user: {}
    },
    setUserData: () => {}
};

const UserContext = createContext<UserContextType>(INITIAL_VALUE);

export default UserContext;