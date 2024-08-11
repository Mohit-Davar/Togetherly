import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./placeholder-not-shown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Togetherly from "../../../public/Images/Togetherly.png";

interface MyFormValues {
    email: string;
    password: string;
}

export default function LoginForm(): JSX.Element {
    const initialValues: MyFormValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Required Field"),
        password: Yup.string().required("Required Field"),
    });

    function handleSubmit(values: MyFormValues) {
        alert(JSON.stringify(values));
    }

    const [visibility, setVisibility] = useState("password");

    function toggleVisibility() {
        if (visibility == "text") {
            setVisibility("password");
        } else {
            setVisibility("text");
        }
    }

    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-br via-themeOne from-themeThree  to-themeTwo">
            <section className="flex-col gap-10 bg-themeFour px-20 pb-16 rounded-2xl shadow-form">
                <img
                    src={Togetherly}
                    alt="Logo"
                    className="size-28 mx-auto my-5"
                />
                <h1 className="font-extrabold text-3xl font-Roboto mb-5 bg-clip-text bg-gradient-to-r from-themeTwo to-themeOne text-transparent text-center">
                    Welcome Back
                </h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnChange={true}
                    validateOnBlur={true}
                    // validateOnMount
                >
                    {({ isValid }) => (
                        <Form className="flex flex-col gap-3 h-auto font-Poppins">
                            <InputField
                                Name="email"
                                Type="email"
                                Label="Email*"
                            />
                            <div className="password flex items-center gap-2">
                                <InputField
                                    Name="password"
                                    Type={visibility}
                                    Label="Password*"
                                />
                                <p
                                    className="eye hover:bg-orange-50 cursor-pointer rounded-full p-2 text-sm text-gray-500 aspect-square "
                                    onClick={toggleVisibility}
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                </p>
                            </div>
                            <button
                                type="submit"
                                className={`mt-2 w-full rounded-lg text-white px-4 py-2 hover:bg-themeTwo transition-all duration-300 ease-linear ${
                                    isValid ? "bg-themeOne" : "bg-red-600"
                                }`}
                                disabled={!isValid}
                            >
                                Sign In
                            </button>
                        </Form>
                    )}
                </Formik>
                <p>
                    Do not have an Account?
                    <span className="text-themeOne hover:text-themeTwo transition-all ml-2">
                        <Link to="/user/signup">Sign Up</Link>
                    </span>
                </p>
            </section>
        </main>
    );
}
