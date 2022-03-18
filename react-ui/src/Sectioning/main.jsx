import  { Route, Routes, BrowserRouter } from 'react-router-dom';
import ForecastForm from "../Components/views/forecastForm";


const Main = () => {
    return (
        <main className="y-wrap">
            <BrowserRouter>
          <Routes>
        <Route path="/*" element={<ForecastForm />} />
      </Routes>
      </BrowserRouter>
        </main>
    )
};

export default Main;