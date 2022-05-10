
import Nav from "./components/nav";

import Dashboard from "./components/dashboard.jsx";
import {BrowserRouter } from "react-router-dom"; 
function App() {
  return (
   <div>
    
     
<Nav />

<Dashboard />
<BrowserRouter />
</div>
  );
}

export default App;
