import Helpers from "./Helpers"
import { NavBar } from "./Navbar"
import Properties from "./Properties"
import ViewModule from "./ViewModule"


const HandleBars = () => {
  return (
    <>
    <NavBar />
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content pl-20 pr-20">
    {/* Page content here */}

    <h1 className="text-5xl font-extrabold mb-7">Handlebars</h1>
<p> Handlebars is a template language used in many web applications. In OnRent, we use Handlebars to place dynamic content and modify data in document layouts and discussion templates.
 </p>
 <p className="mb-20">You can find the Handlebars documentation here: <a target="_blank" href="https://handlebarsjs.com/guide/" className="link link-primary">Handlebars</a></p>
  
 <ViewModule />
<Properties />
<Helpers />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a href="#viewModule">View Module</a></li>
      <li><a href="#properties">Properties</a></li>
      <li><a href="#helpers">Helpers</a></li>
     
    </ul>
  
  </div>
</div>

    </>
 
  )
}

export default HandleBars
