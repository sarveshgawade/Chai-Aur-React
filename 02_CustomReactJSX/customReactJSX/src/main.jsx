import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Hello(){
  return <>Hello React</>
}

// creatign element using React
const evaluatedExpression = !true? 'Yes':'No'


/**
 * Below method takes 3 params: 
 *    1) type of HTML element
 *    2) Props
 *    3) Child
 *    4) Number of evaluated expressions
 */
const reactElem = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click to visit google',
  evaluatedExpression
)


// to do below code we need to remove " Strict React Tag "
ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App/>

    // Hello()

    reactElem

)
