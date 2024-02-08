import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const notify = (text: string) =>
  toast.success(text, {
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
