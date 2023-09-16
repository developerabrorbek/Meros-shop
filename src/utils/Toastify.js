import { toast }  from "react-toastify";



class Toastify{
    succesMessage(msg){
    toast.success(msg);
    } 
    errorMessage(msg){
        toast.error(msg);
    }
    warningMessage(msg){
        toast.warn(msg);
    }
    promise(msg){
        toast.promise(
            msg,{
                pending:"pending",
                error:"error",
                success:"success"
            }

        )
    }
}
export default new Toastify();