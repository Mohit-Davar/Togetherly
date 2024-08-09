import { Field, ErrorMessage } from "formik";
import React from "react";
import "./placeholder-not-shown.css";

interface inputField {
    Name: string;
    Label: string;
    Type: string;
}

const InputField: React.FC<inputField> = ({ Name, Label, Type }) => {
    return (
        <div className="relative flex flex-col-reverse transition-all duration-200 ease-linear">
            <ErrorMessage
                name={Name}
                component="div"
                className="text-red-500 text-xs"
            />
            <Field
                name={Name}
                type={Type}
                component="input"
                className="border-2 rounded-lg border-gray-300 px-4 py-3 transition-all duration-300 ease-linear outline-none focus:border-green-700 peer w-full"
                placeholder=""
            />
            <label
                htmlFor={Name}
                className="top-3 left-3 text-gray-500 absolute transition-all ease-linear duration-200 peer-focus:text-green-700 peer-focus:text-sm peer-focus:bg-white peer-focus:px-1 peer-focus:rounded-sm peer-focus:-top-2 peer-focus:left-2 pointer-events-none"
            >
                {Label}
            </label>
        </div>
    );
};
export default InputField;
