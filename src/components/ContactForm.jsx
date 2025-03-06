import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";

const schema = yup.object().shape({
  fullName: yup.string().min(3, "Full name must be at least 3 characters").required("Full name is required"),
  subject: yup.string().min(3, "Subject must be at least 3 characters").required("Subject is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  body: yup.string().min(3, "Message must be at least 3 characters").required("Message is required"),
});

const ContactForm = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    const onSubmit = (data) => {
      console.log("Form Data:", data);
      setSuccessMessage("Thank you! Your message has been sent.");
      reset();
    };
  
    return (
      <div className="w-full max-w-2xl bg-gray-200 p-10 rounded-lg shadow-lg text-gray-700">
        {successMessage && <p className="text-green-600 font-semibold mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              {...register("fullName")}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <p className="text-red-500 text-sm mt-1">{errors.fullName?.message}</p>
          </div>
  
          <div>
            <label className="block font-semibold mb-1">Subject</label>
            <input
              type="text"
              {...register("subject")}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <p className="text-red-500 text-sm mt-1">{errors.subject?.message}</p>
          </div>
  
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>
  
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              {...register("body")}
              className="w-full p-3 border border-gray-300 rounded-md h-40"
            />
            <p className="text-red-500 text-sm mt-1">{errors.body?.message}</p>
          </div>
  
          <Button type="submit" text="Submit" className="w-full"/>
        </form>
      </div>
    );
};

export default ContactForm;
