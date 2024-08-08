import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputField from "./InputField";

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
        <main className="bg-slate-700 min-h-screen text-white">
            <h1 className="">SignUp</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <InputField
                        Name="firstName"
                        Type="text"
                        Label="First Name"
                        Placeholder="Mohit"
                    />
                    <InputField Name="lastName" Type="text" Label="Last Name" Placeholder="Davar"/>
                    <InputField Name="email" Type="email" Label="Email" Placeholder="example@gmail.com"/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </main>
    );
}
