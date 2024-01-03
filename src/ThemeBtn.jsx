import { useEffect, useState } from "react"



const getThemeFromLocalStorage = ()=>{
  return JSON.parse(localStorage.getItem('theme')) || "emerald"
} 


const ThemeBtn = () => {

  let [theme, setTheme] = useState(getThemeFromLocalStorage())


  const handleTheme = (e) =>{
   setTheme(e.target.value)
  }

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme]) 


  return (
    <div className="dropdown mb-6">
  <div  tabIndex={0} role="button" className="btn m-1">
    Theme
    <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
  </div>
  <ul onClick={handleTheme} tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="emerald"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Night" value="night"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Garden" value="garden"/></li>
  </ul>
</div>
  )
}

export default ThemeBtn
