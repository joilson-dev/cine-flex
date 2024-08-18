import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Movies from '../pages/Movies';
import Sessions from '../pages/Sessions';
import Seats from '../pages/Seats';
import Success from '../pages/Success';

const router = createBrowserRouter([
    {
        path: "/movies",
        element: <Movies />,
    },
    {
        path: "/sessoes/:idFilme",
        element: <Sessions />,
    },
    {
        path: "/assentos/:idSessao",
        element: <Seats />,
    },
    {
        path: "/sucesso",
        element: <Success />,
    },
]);

export default router;
