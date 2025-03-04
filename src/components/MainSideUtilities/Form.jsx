import React from 'react';
import { Formik } from 'formik';
import { registerUser } from '../../../UseCases/register.js';

export default function Form() {
    return (
        <Formik
            initialValues={{ email: '', password: '', files: null }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);

                    // Crear un FormData para enviar el archivo
                    const formData = new FormData();
                    formData.append('email', values.email);
                    formData.append('password', values.password);
                    if (values.files) {
                        formData.append('files', values.files);
                    }

                    // Llamar a registerUser con el FormData
                    registerUser(formData);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue, // Añadir setFieldValue para manejar el archivo
            }) => (
                <form onSubmit={handleSubmit} className='flex flex-col h-full w-full gap-4 '>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}

                    {/* Cambiar el input de tipo file para usar setFieldValue */}
                    <input
                        type="file"
                        name="files"
                        onChange={(event) => {
                            setFieldValue("files", event.currentTarget.files[0]);
                        }}
                        onBlur={handleBlur}
                    />
                    {errors.files && touched.files && errors.files}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    );
}