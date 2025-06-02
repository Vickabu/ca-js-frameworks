import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import Button from './Button';

const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, 'Full name must be at least 3 characters')
    .required('Full name is required'),
  subject: yup
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .required('Subject is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  body: yup
    .string()
    .min(3, 'Message must be at least 3 characters')
    .required('Message is required'),
});

const FormInput = ({
  id,
  label,
  type,
  name,
  register,
  errors,
  placeholder,
}) => (
  <div>
    <label htmlFor={id} className="block font-medium mb-2">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        {...register(name)}
        className="w-full p-3 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 h-40"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        {...register(name)}
        className="w-full p-3 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
      />
    )}
    <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
  </div>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
};

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setSuccessMessage('Thank you! Your message has been sent.');
    reset();
  };

  return (
    <div className="w-full max-w-2xl bg-[#fdfdfd] p-8 rounded shadow-xl text-gray-700">
      {successMessage && (
        <p className="text-[#024002] font-semibold text-center mb-4 bg-green-100 p-2 rounded">
          {successMessage}
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormInput
          id="fullName"
          label="Full Name"
          type="text"
          name="fullName"
          register={register}
          errors={errors}
          placeholder="Enter your full name"
        />
        <FormInput
          id="subject"
          label="Subject"
          type="text"
          name="subject"
          register={register}
          errors={errors}
          placeholder="Enter the subject"
        />
        <FormInput
          id="email"
          label="Email"
          type="email"
          name="email"
          register={register}
          errors={errors}
          placeholder="Enter your email"
        />
        <FormInput
          id="body"
          label="Message"
          type="textarea"
          name="body"
          register={register}
          errors={errors}
          placeholder="Write your message here..."
        />
        <Button text="Submit" type="submit" variant="primary" />
      </form>
    </div>
  );
};

export default ContactForm;
