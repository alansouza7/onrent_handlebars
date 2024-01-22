import { useDispatch, useSelector } from "react-redux"
import {copyToast } from "./features/modules/module"

const LandContent = () => {

    const {module, moduleTitle} = useSelector(store => store.module)
    const dispatch = useDispatch()


if(moduleTitle === "Order Items" || moduleTitle === "Invoice Items" || moduleTitle === "PO Items" || moduleTitle === "Delivery Items"){
    return (
        <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-6">{moduleTitle}</h1>
        <p className="mb-2">Order/Invoice items are items that you've added to an order.<br></br>To build this in Handlebars, you'd use a similar structure:</p>
        <div   className="mockup-code bg-secondary text-secondary-content cursor-pointer hover:scale-[1.02] ease-in-out mb-[180px]" >
                  <pre><code>{moduleTitle === "Order Items"?"{{#each order.rentalOrderItems as |item|}}"
                  :moduleTitle === "Invoice Items"?"{{#each invoice.invoiceItems as |item|}}"
                  :moduleTitle === "PO Items"?"{{#each order.purchaseOrderItems as |item|}}"
                  :moduleTitle === "Delivery Items"?"{{#each delivery.deliveryItems as |item|}}":null}</code></pre>
                  <pre><code className="text">{"  {{item.name}}"}</code></pre>
                  <pre><code>{"{{/each}}"}</code></pre>
                </div>
        
        {module.map((item, index) =>{
            const {module, name, input, output, example} = item
            return <div key={index} id={item.name} className="mt-5 mb-24">
                <h5 className="font-bold mb-2 text-xl">{name}</h5>
                <p className="mb-5 overflow-auto">{example}</p>
                <p className="font-semibold mb-2">Input</p>
                <div  onClick={()=> dispatch(copyToast(input))}  className="mockup-code bg-primary text-primary-content mb-8 cursor-pointer hover:scale-[1.02] ease-in-out" >
                  <pre><code>{input}</code></pre>
                </div>
                <p className="font-semibold mb-2 ">Output</p>
                <div className=" bg-base-200 br-2 rounded-md overflow-auto">
                     <pre className="p-2" data-prefix="$"><code className="text-gray-900">{output}</code></pre>
                  </div>
           
                
    
            </div>
        })}
    </div>
    )
}

  return (
    <div className="max-w-lg">
    <h1 className="text-4xl font-bold mb-[80px]">{moduleTitle}</h1>
    {module.map((item, index) =>{
        const {module, name, input, output, example} = item
        return <div key={index} id={item.name} className="mt-5 mb-24">
            <h5 className="font-bold mb-2 text-xl">{name}</h5>
            <p className="mb-5 overflow-auto">{example}</p>
            <p className="font-semibold mb-2">Input</p>
            <div  onClick={()=> dispatch(copyToast(input))}  className="mockup-code bg-primary text-primary-content mb-8 cursor-pointer hover:scale-[1.02] ease-in-out" >
              <pre><code>{input}</code></pre>
            </div>
            <p className="font-semibold mb-2 ">Output</p>
            <div className=" bg-base-200 br-2 rounded-md overflow-auto">
                 <pre className="p-2" data-prefix="$"><code className="text-gray-900">{output}</code></pre>
              </div>
       
            

        </div>
    })}
</div>
  )
}

export default LandContent
