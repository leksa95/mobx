import * as yup from "yup";

const createUserValidationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
});
export default createUserValidationSchema;