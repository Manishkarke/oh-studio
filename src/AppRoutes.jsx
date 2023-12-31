import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";

const AppRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
];

export default AppRoutes;
