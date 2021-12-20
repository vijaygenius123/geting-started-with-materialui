import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Notes from "pages/Notes";
import Create from "pages/Create";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="" element={<Notes/>}/>
                        <Route path="/create" element={<Create/>}/>
                    </Route>
                </Routes>
        </Router>
    );
}

export default App;
