import React, { useState } from 'react'
import { ThemeContext, themes } from './context/ThemeContext'
import Login_form from './Login_form'
import './style.css'

function App() {
    const [theme, setTheme] = useState(themes.light)

    function handleOnClick() {
        theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, handleOnClick }}>
                <div className="Container" >
                    {/* <div>
                        <button onClick={handleOnClick} className='btn btn-outline-success btn-lg'>
                            {theme}
                        </button>
                    </div> */}


                    <Login_form theme={theme} />
                </div>
            </ThemeContext.Provider>
        </>
    )
}

export default App
