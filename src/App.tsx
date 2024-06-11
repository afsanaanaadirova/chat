import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "@/app/routes";
import Toast from "@/ui/shared/Toast";
import { Tooltip } from "react-tooltip";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ui/pages/common/ErrorPage";
import { CloseButton } from "./app/utils/toastCloseButton";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
        closeButton={({ type }) => <CloseButton type={type} />}
      />
      <Suspense fallback={"Loading..."}>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
          <Toast />
          <Tooltip id="my-tooltip" />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
