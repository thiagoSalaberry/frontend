import { ToastContainer, toast } from "react-toastify";
import  'react-toastify/dist/ReactToastify.css';
type ToastProps = {
    textContent:string;
}
export function ToastifyComp(props:ToastProps) {
    const notify = () => toast.success(props.textContent, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "toast-comp",
        progress: undefined,
        theme: "light",
    });
    return <ToastContainer></ToastContainer>
}