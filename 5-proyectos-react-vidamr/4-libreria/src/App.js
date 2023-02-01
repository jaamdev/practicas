import { Route, Routes, BrowserRouter } from "react-router-dom";
import Store from "./store/store";
import Index from "./pages/index";
import Create from "./pages/create";
import View from "./pages/view";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
