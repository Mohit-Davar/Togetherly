import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";

interface MyFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthdate: Date;
}

export default function SignupForm(): JSX.Element {
    const initialValues: MyFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        birthdate: new Date(),
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required Field"),
        lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required Field"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Required Field"),
        birthDate: Yup.date()
            .min(new Date(1900, 0, 1), "Rest your eyes Oldie!")
            .max(new Date(), "Let's be real, you haven't been born yet!!!")
            .required("Required Field"),
        password: Yup.string()
            .min(8, "Password should contain minimum of 8 words")
            .required("Required Field"),
    });

    const { errors, touched } = useFormikContext<MyFormValues>();
    
    return (
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={alert}
      >
            <Form>
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" />
                {errors.password && touched.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                )}
            </Form>
        </Formik>
    );
}
