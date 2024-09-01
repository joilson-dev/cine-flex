import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "../pages/movies/Movies";
import Sessions from "../pages/sessions/Sessions";
import Seat from "../pages/seats/Seat";
import Success from "../pages/success/Success";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/sessoes/:idfilm" element={<Sessions />} />
                <Route path="/assentos/:idSessao" element={<Seat />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;