import { list } from "./data"
import { selectModule} from "./features/modules/module"
import { useDispatch } from "react-redux"

const DropDownModule = () => {

    const dispatch = useDispatch()
  return (
    <div className="dropdown mb-6 ">
                    <div  tabIndex={0} role="button" className="btn m-1">
                        Module
                        <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                    </div>
                        <ul  tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-[280px]">
                        {list.map((item, index)=>{                       
                        return <li key={index} ><input  onChange={(e)=>dispatch(selectModule(e))}   type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label={item.name} value={item.value}></input></li>
                        })}
                            
                        </ul>
                        </div>
  )
}

export default DropDownModule
