import * as Yup from "yup";


export const LOGIN_SCHEMA = Yup.object().shape({
    email: Yup.string().email().required("Required Email Address*"),
    password: Yup.string().required("Required Password*"),
});
