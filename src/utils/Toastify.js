import { toast } from "react-toastify";

class Toastify {
	succesMessage(msg) {
		toast.success(msg);
	}
	errorMessage(msg) {
		toast.error(msg);
	}
	warningMessage(msg) {
		toast.warn(msg);
	}
	promise(
		promiseFnc,
		pendingMsg = "pending",
		errorMsg = "error",
		successMsg = "success"
	) {
		toast.promise(promiseFnc, {
			pending: pendingMsg,
			error: errorMsg,
			success: successMsg,
		});
	}
}
export default new Toastify();
