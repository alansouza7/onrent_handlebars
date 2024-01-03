import { handleStatus} from "./features/modules/module"
import { useDispatch, useSelector } from "react-redux"


const SidebarItems = () => {

    const {module} = useSelector(store => store.module)
    const dispatch = useDispatch()

  return (
    <>
     {module.map((item, index)=>{               
       return <li key={index}  onClick={()=>dispatch(handleStatus(item.name))}  className={item.status === true? "active": ""}><a href={`#${item.name}`}>{item.name}</a></li>
    })}
    </>
  )
}

export default SidebarItems
