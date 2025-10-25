// src/components/ContactForm.tsx
import React from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { contactValidationSchema } from "../validations/contactScehma";
import MainButton from "./MainButton";

const ContactForm: React.FC = () => {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await fetch(`${API_URL}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_name: values.user_name,
            user_email: values.user_email,
            message: values.message,
          })
        });

        const data = await response.json();

        if (response.ok && data.success) {
          Swal.fire({
            icon: "success",
            title: "Uğurlu!",
            text: data.message || "Məktubunuz göndərildi",
            confirmButtonText: "Bağla",
            confirmButtonColor: "#aeff00",
          });
          resetForm();
        } else {
          Swal.fire({
            icon: "error",
            title: "Xəta!",
            text: data.message || "Məktub göndərilmədi. Zəhmət olmasa yenidən cəhd edin.",
            confirmButtonText: "Bağla",
            confirmButtonColor: "#ef4444",
          });
        }
      } catch (error) {
        console.error('Xəta:', error);
        Swal.fire({
          icon: "error",
          title: "Xəta! ",
          text: "Serverlə əlaqə qurulamadı. Zəhmət olmasa yenidən cəhd edin.",
          confirmButtonText: "Bağla",
          confirmButtonColor: "#ef4444",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-3 w-80">
      <div className="w-full">
        <input
          type="text"
          name="user_name"
          placeholder="Adınız"
          className="border border-gray-300 py-3 px-4 rounded-[30px] w-full focus:outline-none focus:border-[#aeff00]"
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
          className="border border-gray-300 py-3 px-4 rounded-[30px] w-full focus:outline-none focus:border-[#aeff00]"
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
          className="border border-gray-300 py-3 px-4 rounded-[30px] w-full focus:outline-none focus:border-[#aeff00]"
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

      <MainButton 
        type="submit" 
        text={formik.isSubmitting ? "Göndərilir..." : "Göndər"} 
        disabled={formik.isSubmitting} 
      />
    </form>
  );
};

export default ContactForm;