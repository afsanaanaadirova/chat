import { RouteObject, useRoutes } from "react-router-dom";
import NotFound from "@/ui/pages/common/NotFound";
import MainLayout from "@/ui/layout/MainLayout";
import Login from "@/ui/pages/login/Login";
import Register from "@/ui/pages/register/register";
import Chat from "@/ui/pages/chat/chat";

const AppRoutes = () => {
  const routesConfig: RouteObject[] = [
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  const routes = useRoutes(routesConfig);

  return routes;
};

export default AppRoutes;
