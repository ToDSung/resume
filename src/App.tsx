import './App.css'
import Resume from './modules/Resume/Resume'
import { PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    <div className='app'>
      <PDFViewer width='100%' height='100%'>
        <Resume />
      </PDFViewer>
    </div>
  )
}

export default App
