import {ThemeProvider} from 'styled-components'
import theme from '@/components/theme'
import {Navbar} from '@/components/Navbar'
import {Home} from '@/pages/Home'
import {Works} from '@/pages/Works'
import {About} from '@/pages/About'
import {Resume} from '@/pages/Resume'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar routes={[
          {to: '/', name: 'Inicio'},
          {to: '/about', name: 'Sobre mí'},
          {to: '/works', name: 'Trabajos'},
          {to: '/resume', name: 'Currículum'},
        ]} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works'  element={<Works />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
