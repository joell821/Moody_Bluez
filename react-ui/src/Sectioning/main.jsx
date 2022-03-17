import React, { Route, Routes, useNavigate } from 'react-router-dom';
import ForecastForm from "../views/forecastForm.jsx";


const Main = () => {
    return (
        <main className="y-wrap">
          <Routes>
        <Route path="/*" element={<ForecastForm />} />
      </Routes>
        </main>
    )
};

export default Main;