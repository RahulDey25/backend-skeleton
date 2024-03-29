import App from '../App';
import ExampleCalendar from '../example-component/calendar';
import ExampleCard from '../example-component/card';
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",  // This is root path
        element: <App />
    },
    {
        path: "/calendar", // You can access this path by https://localhost:3000/calendar
        element: <ExampleCalendar />
    },
    {
        path: "/card",
        element: <ExampleCard />
    }
]);

export default router;