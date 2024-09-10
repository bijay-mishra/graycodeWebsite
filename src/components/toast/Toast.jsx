import toast, { Toaster } from 'react-hot-toast';
const notify = (message) => toast(message);
const notifySuccess = (message) => toast( message, {position:'top-right',icon:'', duration:5000, className:'btn-success'});
const notifyError = (message) => toast(message,{position:'top-right',icon:'', duration:5000, className:'btn-danger'});
const notifyInfo = (message) => toast(message,{position:'top-right',icon:'', duration:5000, className:'btn-info'});


export {notify,notifySuccess,notifyError,notifyInfo};