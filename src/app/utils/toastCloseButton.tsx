import CloseIcon from '@svg/notification-close-icon.svg?react'

export const CloseButton = ({ type }: { type: string }) => {
    return <CloseIcon className={`flex items-center h-11 mr-2 ${handleIconColor(type)}`} />
}

const handleIconColor = (type: string) => {
    switch (type) {
        case "success":
            return 'text-success-500';
        case "error":
            return 'text-error-500'
        case "warning":
            return 'text-warning-500';
        case "info":
            return 'text-blue-500';
        default:
            break;
    }
}
