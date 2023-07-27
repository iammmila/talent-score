import * as yup from "yup";

export const generalQuestion = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  surname: yup
    .string()
    .min(2, "Surname must be at least 2 characters")
    .max(50, "Surname must be at most 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "Surname can only contain letters and spaces")
    .required("Surname is required"),
  employment: yup
    .string()
    .required("Hazırda məşğuliyyətiniz seçimi zorunludur."),
  education: yup.string().required("Təhsiliniz seçimi zorunludur."),
  degree: yup.string().required("Aşağıdakılardan birini seçiniz."),
});
