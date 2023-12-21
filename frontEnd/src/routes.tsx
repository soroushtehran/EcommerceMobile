import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Home from "./pages/Home/Home";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/courseInfo/:courseInfoId", element: <CourseInfo /> },
];

export default routes;
