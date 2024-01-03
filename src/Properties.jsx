
const Properties = () => {
  return (
    <>
      <h2 id="properties" className="text-3xl font-bold mb-2">Properties</h2>

<p className="mb-8">The properties contained within the view model will contain the following inner properties:</p>

<p className="font-bold mb-1">properties.colours</p>
<div className="mockup-code max-w-xl mb-16">
  <pre className="bg-warning text-warning-content"  data-prefix="colours: {"><code>      /* Document element text/background colours */</code></pre> 
  <pre ><code>   bodyTextColour,</code></pre> 
  <pre ><code>   borderColour,</code></pre> 
  <pre ><code>   disclaimerBackgroundColour,</code></pre>
  <pre ><code>   disclaimerTextColour,</code></pre> 
  <pre ><code>   footerTextColour,</code></pre>
  <pre ><code>   headingBackgroundColour,</code></pre> 
  <pre ><code>   headingTextColour,</code></pre> 
  <pre ><code>   summaryBackgroundColour,</code></pre> 
  <pre ><code>   summaryHeadingBackgroundColour,</code></pre> 
  <pre ><code>   summaryTextColour,</code></pre> 
  <pre ><code>   titleTextColour</code></pre> 
  <pre data-prefix="}"><code></code></pre> 
</div>

<p className="font-bold mb-1">properties.fonts</p>
<div className="mockup-code max-w-xl mb-16">
  <pre className="bg-warning text-warning-content"  data-prefix="fonts: {"><code>      /* Document element font sizes */</code></pre> 
  <pre ><code>   bodyFontSize,</code></pre> 
  <pre ><code>   disclaimerFontSize,</code></pre> 
  <pre ><code>   footerFontSize,</code></pre>
  <pre ><code>   headingFontSize,</code></pre> 
  <pre ><code>   summaryFontSize,</code></pre>
  <pre ><code>   titleFontSize</code></pre> 
  <pre data-prefix="}"><code></code></pre> 
</div>

<p className="font-bold mb-1">properties.strings</p>
<div className="mockup-code max-w-xl mb-16">
  <pre className="bg-warning text-warning-content"  data-prefix="strings: { "><code>      /* Document element strings */</code></pre> 
  <pre ><code>  disclaimerString</code></pre>  
  <pre data-prefix="}"><code></code></pre> 
</div>

<p className="font-bold mb-1">properties.systemProperties</p>
<div className="mockup-code max-w-xl mb-16">
  <pre   data-prefix="{ "><code> </code></pre> 
  <pre ><code> signFlag /* Flag to determine if the document can be signed */</code></pre>  
  <pre data-prefix="}"><code></code></pre> 
</div>

<p className="font-bold mb-1">properties.stringDefaults</p>
<div className="mockup-code max-w-xl mb-40">
  <pre className="bg-warning text-warning-content"  data-prefix="stringDefaults: {"><code>            /* Document element string defaults (labels) */</code></pre> 
  <pre data-prefix="headingTitleString: {"><code>   </code></pre>  
  <pre ><code> useDefaultValueFlag, </code></pre> 
  <pre  ><code> value</code></pre>
  <pre data-prefix="}"><code>  </code></pre> 
  <pre data-prefix="headingSubTitleString: {"><code>   </code></pre>
  <pre ><code> useDefaultValueFlag,  </code></pre> 
  <pre ><code> value  </code></pre> 
  <pre data-prefix="}"><code>   </code></pre> 
  <pre data-prefix="headingTextString: {"><code>   </code></pre> 
  <pre ><code> useDefaultValueFlag, </code></pre> 
  <pre ><code> value </code></pre> 
  <pre data-prefix="}"><code>  </code></pre> 
  <pre data-prefix="footerTextLine1: {"><code>   </code></pre> 
  <pre ><code> useDefaultValueFlag,  </code></pre> 
  <pre ><code> value </code></pre> 
  <pre data-prefix="}"><code>  </code></pre> 
  <pre data-prefix="footerTextLine2: {" ><code>   </code></pre> 
  <pre ><code> useDefaultValueFlag,  </code></pre> 
  <pre ><code> value </code></pre> 
  <pre data-prefix="}"><code>  </code></pre> 
  <pre data-prefix="}"><code></code></pre> 
</div>

    </>
  )
}

export default Properties
