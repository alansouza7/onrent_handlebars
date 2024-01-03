

const Helpers = () => {
  return (
    <>
      <h2 id="helpers" className="text-3xl font-bold mb-2">Built-In Helpers</h2>
<p>Handlebars offers a variety of built-in helpers such as the if conditional and each iterator.</p>
<p className="mb-10">Learn More: <a target="_blank" href="https://handlebarsjs.com/guide/builtin-helpers.html#if" className="btn btn-secondary btn-ghost">Built-In Helpers</a></p>


<h3 className="text-2xl font-bold mb-2">Math helpers</h3>

<div className="overflow-x-auto max-w-xl mb-10">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        
        <th>Helper</th>
        <th>JavaScript</th>
        <th>Handlebars</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>mult</th>
        <td>a * b </td>
        <td>{`{{mult a b}}`}</td>
  
      </tr>
      {/* row 2 */}
      <tr>
        <th>sub</th>
        <td>a - b </td>
        <td>{`{{sub a b}}`}</td>
       
      </tr>
      {/* row 3 */}
      <tr>
        <th>add</th>
        <td>a + b</td>
        <td>{`{{add a b}}`}</td>
       
      </tr>
       {/* row 4 */}
       <tr>
        <th>div</th>
        <td>a / b</td>
        <td>{`{{div a b}}`}</td>
       
      </tr>
    </tbody>
  </table>
</div>

<h3 className="text-2xl font-bold mb-2">Truth Helpers</h3>

<div className="overflow-x-auto max-w-xl mb-10">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        
      <th>Helper</th>
        <th>JavaScript</th>
        <th>Handlebars</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>eq</th>
        <td>{`if (a === b)`}</td>
        <td>{`{{if (eq a b)}}`}</td>
  
      </tr>
      {/* row 2 */}
      <tr>
        <th>not-eq</th>
        <td> {`if (a !== b)`} </td>
        <td>{`{{if (not-eq a b)}}`}</td>
       
      </tr>
      {/* row 3 */}
      <tr>
        <th>not </th>
        <td>{`if (!a)`}</td>
        <td>{`{{if (not a)}}`}</td>
       
      </tr>
       {/* row 4 */}
       <tr>
        <th>and </th>
        <td>{`if (a && b) `}</td>
        <td>{`{{if (and a b)}}`}</td>
       
      </tr>
       {/* row 5 */}
       <tr>
        <th>or</th>
        <td>{`if (a || b)`}</td>
        <td>{`{{if (or a b)}}`}</td>
       
      </tr>
       {/* row 6 */}
       <tr>
        <th>gt </th>
        <td>{`if (a > b)`}</td>
        <td>{`{{if (gt a b)}}`}</td>
       
      </tr>
       {/* row 7 */}
       <tr>
        <th>gte</th>
        <td>{`if (a >= b) `}</td>
        <td>{`{{if (gte a b)}}`}</td>
       
      </tr>
       {/* row 8 */}
       <tr>
        <th>lt</th>
        <td>{`if (a < b) `}</td>
        <td>{`{{if (lt a b)}}`}</td>
       
      </tr>
       {/* row 9 */}
       <tr>
        <th>lte</th>
        <td>{`if (a <= b) `}</td>
        <td>{`{{if (lte a b)}}`}</td>
       
      </tr>
       {/* row 10 */}
       <tr>
        <th>is-array </th>
        <td>{`if (Ember.isArray(a))`}</td>
        <td>{`{{if (is-array a)}}`}</td>
       
      </tr>
       {/* row 11 */}
       <tr>
        <th>is-empty</th>
        <td>{`if (Ember.isEmpty(a))`}</td>
        <td>{`{{if (is-empty a)}}`}</td>
       
      </tr>
       {/* row 12 */}
       <tr>
        <th>is-equal </th>
        <td>{`if (Ember.isEqual(a, b)) `}</td>
        <td>{`{{if (is-equal a b)}}`}</td>
       
      </tr>
       {/* row 13 */}
       <tr>
        <th>is-any </th>
        <td>{`if (a.isAny(b, c)) `}</td>
        <td>{`{{if (is-any a b c)}}`}</td>
       
      </tr>

    </tbody>
  </table>
</div>

<h3 className="text-2xl font-bold mb-2">Format Helpers</h3>

<div className="overflow-x-auto max-w-xl mb-10">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        
      <th>Helper</th>
        <th>JavaScript</th>
        <th>Handlebars</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>format-date</th>
        <td>{`a.format("YYYY-MM-DD")`}</td>
        <td>{`{{format-date a "YYYY-MM-DD"}}`}</td>
  
      </tr>
      {/* row 2 */}
      <tr>
        <th>format-decimal</th>
        <td>a.toFixed(2) </td>
        <td>{`{{format-decimal a 2}}`}</td>
       
      </tr>
      {/* row 3 */}
      <tr>
        <th>format-string</th>
        <td>a.substring(0, 10) </td>
        <td>{`{{format-string a 10}}`}</td>
       
      </tr>
       {/* row 4 */}
       <tr>
        <th>format-address</th>
        <td>N/A</td>
        <td>{`{{format-address a}}`}</td>
       
      </tr>
      {/* row 5 */}
      <tr>
        <th>str-includes</th>
        <td>a.includes(b)</td>
        <td>{`{{str-includes a b}}`}</td>
       
      </tr>
      {/* row 6 */}
      <tr>
        <th>str-startswith</th>
        <td>a.startsWith(b)</td>
        <td>{`{{str-startswith a b}}`}</td>
       
      </tr>
      {/* row 7 */}
      <tr>
        <th>str-endswith</th>
        <td>a.endsWith(b)</td>
        <td>{`{{str-endswith a b}}`}</td>
       
      </tr>
    </tbody>
  </table>
</div>

<h3 className="text-2xl font-bold mb-2">Other Helpers</h3>

<div className="overflow-x-auto max-w-xl mb-10">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        
      <th>Helper</th>
        <th>JavaScript</th>
        <th>Handlebars</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>now</th>
        <td>moment()</td>
        <td>{`{{now}}`}</td>
  
      </tr>
      {/* row 2 */}
      <tr>
        <th>lookup</th>
        <td>N/A </td>
        <td>{`{{lookup a 1 ["Rental", "Sale", "Service"]}}`}</td>
       
      </tr>
      {/* row 3 */}
      <tr>
        <th>set-var</th>
        <td>let a = b</td>
        <td>{`{{set-var a b}}`}</td>
       
      </tr>
       {/* row 4 */}
       <tr>
        <th>get-var</th>
        <td>a </td>
        <td>{`{{get-var a}}`}</td>
       
      </tr>
      {/* row 5 */}
      <tr>
        <th>console log</th>
        <td>console.log( )</td>
        <td>{`{{log}}`}</td>
       
      </tr>
      {/* row 6 */}
      <tr>
        <th>if</th>
        <td>if()</td>
        <td>{`{{#if}}  {{/if}}`}</td>
       
      </tr>
      {/* row 7 */}
      <tr>
        <th>unless</th>
        <td>unlessg( )</td>
        <td>{`{{#unless}}  {{/unless}}`}</td>
       
      </tr>
      {/* row 8 */}
      <tr>
        <th>each</th>
        <td>foreach( )</td>
        <td>{`{{#each}}  {{/each}}`}</td>
       
      </tr>
    </tbody>
  </table>
</div>
    </>
  )
}

export default Helpers
