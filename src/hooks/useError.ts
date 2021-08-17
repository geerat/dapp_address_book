import { toast } from 'react-toastify';

export const useError = () => {
    const sendError = (message: string):void => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            });
    }

    return {sendError}
}