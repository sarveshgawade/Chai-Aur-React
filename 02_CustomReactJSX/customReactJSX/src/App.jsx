// in {} we write evaluated expression
/**
 *  we cannot do like: {true? "Yes":"no"}
 *  because its like an object and we cannot write statements like ternary opertor / is-else in obj's. So we can write only evaluated/final expressions in curly braces {}
 */


function App() {
  const instructorName = "Hitesh Sir"

  return (
    <>
      <h1>Chai Aur React: | Instructor is:  {instructorName}</h1>
    </>
  )
}

export default App
