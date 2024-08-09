import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputField from "./InputField";
import { Link } from "react-router-dom";

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

    function handleSubmit(values: MyFormValues) {
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-l from-">
            <div className="flex-col gap-10">
            <h1 className="font-extrabold text-3xl font-Roboto mb-10">Create Your Account</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="flex flex-col gap-3 h-auto font-Poppins">
                    <InputField
                        Name="firstName"
                        Type="text"
                        Label="First Name*"
                    />
                    <InputField
                        Name="lastName"
                        Type="text"
                        Label="Last Name*"
                    />
                    <InputField
                        Name="email"
                        Type="email"
                        Label="Email*"
                    />
                    <button type="submit" className="mt-5 w-full bg-emerald-600 rounded-lg text-white px-4 py-2 hover:bg-emerald-900 transition-all duration-100 ease-linear">Submit</button>
                </Form>
            </Formik>
            <p>Already have an account?</p> <Link to/>
            </div>
        </main>
    );
}
