// src/components/ContactForm.tsx
import React from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { contactValidationSchema } from "../validations/contactScehma";
import MainButton from "./MainButton";

const ContactForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            user_name: values.user_name,
            user_email: values.user_email,
            message: values.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            Swal.fire({
              icon: "success",
              title: "Uğurlu!",
              text: "Məktubunuz göndərildi",
              confirmButtonText: "Bağla",
              confirmButtonColor: "#aeff00",
            });
            resetForm();
          },
          (error) => {
            console.log("Xəta:", error.text);
            Swal.fire({
              icon: "error",
              title: "Xəta!",
              text: "Məktub göndərilmədi. Zəhmət olmasa yenidən cəhd edin.",
              confirmButtonText: "Bağla",
              confirmButtonColor: "#ef4444",
            });
          }
        )
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-3 w-80">
      <div className="w-full">
        <input
          type="text"
          name="user_name"
          placeholder="Adınız"
          className="border border-gray-300 py-3 px-4 rounded-[30px] w-full"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_name}
        />
        {formik.touched.user_name && formik.errors.user_name && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.user_name}
          </div>
        )}
      </div>

      <div>
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="border border-gray-300 py-3 px-4 rounded-[30px] w-full"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_email}
        />
        {formik.touched.user_email && formik.errors.user_email && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.user_email}
          </div>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Mesajınız"
          className="border border-gray-300 py-3 px-4 rounded-[30px] w-full"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          rows={4}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.message}
          </div>
        )}
      </div>

    <MainButton text={formik.isSubmitting ? "Göndərilir..." : "Göndər"} disabled={formik.isSubmitting} />
    </form>
  );
};

export default ContactForm;