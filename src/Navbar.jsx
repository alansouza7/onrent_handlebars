import { Link } from "react-router-dom"
import ThemeBtn from "./ThemeBtn"
import { copyToast, searchModule } from "./features/modules/module"
import { useDispatch, useSelector } from "react-redux"



export const NavBar = () => {

  const dispatch = useDispatch()
  const {moduleSearched} = useSelector(store => store.module)


  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <ThemeBtn />
    </div>

    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link className="btn btn-secondary text-secondary-content mr-4" to="/">Home</Link>
      <Link className="btn btn-secondary text-secondary-content mr-4" to="/handlebars">Handlebars</Link>
    </ul>
  </div>

  
    <div className="flex-none gap-2">
      <div className="form-control">
        
        <button  className="btn btn-bordered w-24 md:w-auto" onClick={()=>document.getElementById('my_modal_5').showModal()}>Search</button>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
            <input onChange={(e)=>dispatch(searchModule(e))} type="text" placeholder="Search key word" className="input input-bordered w-24 md:w-auto" />
              <div className="mt-6">
              {moduleSearched.map(item =>{
                            const {module, name, input, output, example} = item
                            return <div id={item.name} className="mt-5 mb-24">
                                <h5 className="font-bold mb-2 text-xl">{name}</h5>
                                <p className="mb-5 overflow-auto">{example}</p>
                                <p className="font-semibold mb-2">Input</p>
                                <div  onClick={()=> dispatch(copyToast(input))}   className="mockup-code bg-secondary text-secondary-content mb-8 cursor-pointer hover:scale-[1.02] ease-in-out" >
                                  <pre><code>{input}</code></pre>
                                </div>
                                <p className="font-semibold mb-2 ">Output</p>
                                <div className=" bg-base-200 br-2 rounded-md overflow-auto">
                                     <pre className="p-2" data-prefix="$"><code className="text-gray-900">{output}</code></pre>
                                  </div>
                           
                                

                            </div>
                        })}
        
              </div>
              
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
      </div>

    </div>
  </div>
  )
}

