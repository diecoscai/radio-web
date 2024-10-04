import { useEffect, useState } from 'react';

              {/* <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div> */}

const ThemeSwitch = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const switchTheme = (e) => {
        setTheme(e.target.checked ? "dark" : "light");
    };

    return (
        <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" onChange={switchTheme} checked={theme === "dark"}/>
                  <span className="slider round"></span>
                </label>
        </div>
    );
};

export default ThemeSwitch;