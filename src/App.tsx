import './App.css'
import Resume from './Resume/Resume'
import { PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    <div className='app'>
      <PDFViewer width='100%' height='100%'>
        <Resume />
      </PDFViewer>
      {/* <PDFDownloadLink document={<Resume />} fileName="Tod's Resume.pdf">
        {({ loading }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
    </PDFDownloadLink> */}
    </div>
  )
}

export default App
