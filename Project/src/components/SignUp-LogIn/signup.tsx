import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./placeholder-not-shown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

type MyFormValues = {
    username: string;
    email: string;
    password: string;
}

export default function SignupForm(): React.JSX.Element {
    const initialValues: MyFormValues = {
        username: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        username: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required Field"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Required Field"),
        password: Yup.string()
            .required("Required Field")
            .matches(/[a-z]/, " ")
            .matches(/[A-Z]/, " ")
            .matches(/[0-9]/, " ")
            .min(12, "Minimum 12 characters"),
    });

    function handleSubmit(values: MyFormValues) {
        alert(JSON.stringify(values));
    }

    const [visibility, setVisibility] = useState<"password" | "text">("password");
    const [char, setChar] = useState<string>("");

    function toggleVisibility() {
        visibility == "text" ? setVisibility("password") : setVisibility("text")
    }

    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-br via-themeOne from-themeThree  to-themeTwo">
            <section className="flex-col gap-10 bg-themeFour px-20 pb-16 rounded-2xl shadow-form">
                <img
                    src="/Images/Togetherly.png"
                    alt="Logo"
                    className="size-28 mx-auto my-5"
                />
                <h1 className="font-extrabold text-3xl font-Roboto mb-5 bg-clip-text bg-gradient-to-r from-themeTwo to-themeOne text-transparent">
                    Create Your Account
                </h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnChange={true}
                    validateOnBlur={true}
                // validateOnMount
                >
                    {({ setFieldValue, isValid }) => (
                        <Form className="flex flex-col gap-3 h-auto font-Poppins">
                            <InputField
                                Name="username"
                                Type="text"
                                Label="Username*"
                            />
                            <InputField
                                Name="email"
                                Type="email"
                                Label="Email*"
                            />
                            <article className="Password relative flex gap-2 items-center">
                                <Field
                                    name="password"
                                    type={visibility}
                                    component="input"
                                    className="border-2 rounded-lg border-gray-300 px-4 py-3 transition-all duration-300 ease-linear outline-none focus:border-themeTwo peer w-full bg-themeFour"
                                    placeholder=""
                                    value={char}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setFieldValue(
                                            "password",
                                            e.target.value
                                        );
                                        setChar(e.target.value);
                                    }}
                                ></Field>
                                <label
                                    htmlFor="password"
                                    className="top-3 left-3 text-gray-500 absolute transition-all ease-linear duration-200 peer-focus:text-themeTwo peer-focus:text-sm peer-focus:bg-themeFour peer-focus:px-1 peer-focus:rounded-sm peer-focus:-top-2 peer-focus:left-2 pointer-events-none"
                                >
                                    Password*
                                </label>
                                <p
                                    className="eye hover:bg-orange-50 cursor-pointer rounded-full p-2 text-sm text-gray-500 aspect-square"
                                    onClick={toggleVisibility}
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                </p>
                            </article>
                            <article
                                className={`border-2 border-gray-300 text-xs p-3 rounded-lg ${char.length > 0 ? "visible" : "hidden"
                                    }`}
                            >
                                <p>Your password must contain:</p>
                                <ul className="list-inside list-disc">
                                    <li
                                        className={`${char.length >= 12
                                            ? "text-green-500"
                                            : "text-red-500"
                                            }`}
                                    >
                                        At least 12 characters ({char.length}
                                        /12)
                                    </li>
                                    <li
                                        className={`${/[a-z]/.test(char)
                                            ? "text-green-500"
                                            : "text-red-500"
                                            }`}
                                    >
                                        At least one Lower case letter
                                    </li>
                                    <li
                                        className={`${/[0-9]/.test(char)
                                            ? "text-green-500"
                                            : "text-red-500"
                                            }`}
                                    >
                                        At least one number
                                    </li>
                                    <li
                                        className={`${/[A-Z]/.test(char)
                                            ? "text-green-500"
                                            : "text-red-500"
                                            }`}
                                    >
                                        At least one Upper case letter
                                    </li>
                                </ul>
                            </article>
                            <button
                                type="submit"
                                className={`mt-2 w-full rounded-lg text-white px-4 py-2 hover:bg-themeTwo transition-all duration-300 ease-linear ${isValid ? "bg-themeOne" : "bg-red-600"
                                    }`}
                                disabled={!isValid}
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
                <p>
                    Already have an account?
                    <span className="text-themeOne hover:text-themeTwo transition-all ml-2">
                        <Link to="/user/login">Log in</Link>
                    </span>
                </p>
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </section>
        </main>
    );
}
