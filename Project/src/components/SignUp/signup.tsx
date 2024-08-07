import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import { FC } from "react";
import * as Yup from "yup";

interface MyFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthdate: Date;
}
interface InputField {
    name: string;
    type: string;
    label: string;
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

    const InputField: FC<InputField> = ({ name, type, label }) => {
        const { errors, touched } = useFormikContext<MyFormValues>();

        return (
            <div>
                <label htmlFor={name}>{label}</label>
                <Field name={name} type={type} />
                {errors.password && touched.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                )}
            </div>
        );
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={alert}
        >
            <Form>
                <InputField name="firstName" type="text" label="First Name"/>
            </Form>
        </Formik>
    );
}
