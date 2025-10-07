import * as Yup from "yup";

export const contactValidationSchema = Yup.object({
  user_name: Yup.string()
    .min(2, "Ad ən azı 2 simvoldan ibarət olmalıdır")
    .max(50, "Ad maksimum 50 simvol ola bilər")
    .required("Ad tələb olunur"),
  user_email: Yup.string()
    .email("Düzgün email daxil edin")
    .required("Email tələb olunur"),
  message: Yup.string()
    .min(10, "Mesaj ən azı 10 simvoldan ibarət olmalıdır")
    .max(500, "Mesaj maksimum 500 simvol ola bilər")
    .required("Mesaj tələb olunur"),
});