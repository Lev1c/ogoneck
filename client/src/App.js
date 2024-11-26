import AppRouter from './routes/AppRouter';
import { BrowserRouter } from "react-router-dom"
import './css/main.css'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
 
  return (
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
