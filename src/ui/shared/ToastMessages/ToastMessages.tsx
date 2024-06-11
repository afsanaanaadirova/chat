import { twMerge } from "tailwind-merge";
import { TToastMessages } from "./TToastMessages";

const ToastMessages = ({ className, children }: TToastMessages) => {
    return (
        <div className={twMerge("w-full border border-gray-300 bg-gray-100 rounded", className)}>
            {children}
        </div>
    )
}

export default ToastMessages