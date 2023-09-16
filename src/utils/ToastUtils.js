import { toast } from "react-toastify"

class Toastify {
  successMessage(msg) {
    toast.success(msg)
  }

  errorMessage(msg){
    toast.error(msg)
  }

  infoMessage(msg){
    toast.info(msg)
  }

  warningMessage(msg){
    toast.warning(msg)
  }

  promise(promiseFunction, pendingMsg = "Promise is pending!", successMsg = "Promise resolved 👌", errorMsg = "Promise rejected 🤯"){
    toast.promise(promiseFunction, {
      pending : pendingMsg,
      success : successMsg,
      error : errorMsg,
    })
  }
}


export default new Toastify()
