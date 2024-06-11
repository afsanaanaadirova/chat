import { toast } from "react-toastify";
import WarningToastIcon from "@svg/warningToastIcon.svg?react";
import SuccessToastIcon from "@svg/successToastIcon.svg?react";
import InfoToastIcon from "@svg/infoToastIcon.svg?react";
import ErrorToastIcon from "@svg/errorToastIcon.svg?react";

const handleToast = (
  status: string,
  message: string,
  options: Record<string, any> = {
    icon: handleIcon(status),
  }
) => {
  switch (status) {
    case "success":
      return toast.success(message, options);
    case "error":
      return toast.error(message, options);
    case "warning":
      return toast.warning(message, options);
    case "info":
      return toast.info(message, options);
    default:
      break;
  }
};
const handleIcon = (key: string) => {
  switch (key) {
    case "success":
      return <SuccessToastIcon className="text-success-300" />;
    case "error":
      return <ErrorToastIcon className="text-error-300" />;
    case "warning":
      return <WarningToastIcon className="text-warning-300" />;
    case "info":
      return <InfoToastIcon className="text-blue-500" />;
    default:
      break;
  }
};
export const toastNotification = (
  status: string,
  message: string,
  options?: Record<string, any>
) => {
  return handleToast(status, message, options);
};

// position: "top-center",
// autoClose: 5000,
// hideProgressBar: false,
// closeOnClick: true,
// pauseOnHover: true,
