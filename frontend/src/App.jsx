import React from 'react'
import Header from './componants/Header'
import Footer from './componants/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
          <Container>
            Welcome To Proshop
            <HomeScreen />
          </Container>
      </main> 
      <Footer />
    </>
  )
}

export default App