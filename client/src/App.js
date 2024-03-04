import AppRouter from './routes/AppRouter';
import { BrowserRouter } from "react-router-dom"
import './css/main.css'

function App() {
  return (
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
