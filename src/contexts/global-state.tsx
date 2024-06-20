import { createContext, useState } from "react"

/*
Global state context to be used by all components.
Will store the main color theme of the page for now.
*/


const GlobalStateContext = createContext({
    color: "#0075A2",
    cheatCodeActive: false,
    setCheatCodeActive: (active: boolean) => { active; },
    setColor: (color: string) => { color; }
})

const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
    const [color, setColor] = useState("#0075A2")
    const [cheatCodeActive, setCheatCodeActive] = useState(false)

    return (
        <GlobalStateContext.Provider value={{ color, setColor, cheatCodeActive, setCheatCodeActive }}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export { GlobalStateContext, GlobalStateProvider }