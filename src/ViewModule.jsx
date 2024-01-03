

const ViewModule = () => {
  return (
    <>
      <h2 id="viewModule" className="text-3xl font-bold mb-2">The View Model</h2>
 <p>When OnRent executes a document template it will provide the document a compatible view model
which contains all the data neccessary for the document.</p>

<p className="mb-5">The view model provided will have the following top-level properties:</p>

<div className="mockup-code max-w-xl mb-5">
  <pre data-prefix="{"><code></code></pre> 
  <pre ><code>   company, /* The users logged in company */</code></pre> 
  <pre ><code>   currentUser, /* The logged in user */
</code></pre> 
  <pre  ><code>   properties, /* The document template properties */</code></pre>
  <pre ><code>   systemProperties /* Any special system properties */
</code></pre> 
  <pre className="bg-warning text-warning-content" ><code>   invoice * /* The primary model */
</code></pre>
  <pre ><code>   signature /* The documents signature, if there is one */</code></pre> 
  <pre data-prefix="}"><code></code></pre> 
</div>

<div className="leading-8 mb-20">
  <p>⚫ The company will be a standard Company object containing all the relevant company data
</p>
<p>⚪ The currentUser will be a standard User object representing the current logged in user
</p>
<p>⚫ The signature will be populated with a standard Signature object, if the document has been
signed</p>
<p>⚪ The primary model property name ('invoice' above) will change according to the model type.
For example, for an invoice the property will be named 'invoice', and an order
(rental/sale/purchase/works) the property will be named 'order'.</p>
</div>
    </>
  )
}

export default ViewModule
