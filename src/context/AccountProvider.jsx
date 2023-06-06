import { createContext, useState } from "react";

export const AccountContext = createContext(null)


const AccountProvider = ({children}) => {
    const [person,setPerson] = useState({})
    const [account, setAccount] = useState();
    return (
        <AccountContext.Provider value={{account,setAccount,person,setPerson} }>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider