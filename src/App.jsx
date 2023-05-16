
import Navigation from './components/Navigation'
import About from './components/About'
import Form from './components/Form'
import './App.css'

function App() {


  return (
    <>
      <Navigation />
      <div className='container'>
        <About />
        <Form />
      </div>
    </>
  )
}

export default App