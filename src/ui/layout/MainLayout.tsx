import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const MainLayout = () => {
  return (
    <div className="flex items-stretch min-h-screen">
      <div className="w-full">
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <CircularProgress />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;
