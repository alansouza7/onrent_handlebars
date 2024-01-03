import LandContent from "./LandContent"
import DropDownModule from "./DropDownModule"
import SidebarItems from "./SidebarItems"


const Landing = () => {

  return (

<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <DropDownModule />
    <LandContent />
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li className="font-bold mb-2 text-xl">On this page</li>
      {/* Sidebar content here */}
    <SidebarItems />
    </ul>
  
  </div>
</div>





  )
}

export default Landing
