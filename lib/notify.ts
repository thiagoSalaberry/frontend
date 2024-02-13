import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const notify = (type: "success" | "warn", text: string) =>
  toast[type](text, {
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
