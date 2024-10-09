import { Field, ErrorMessage } from "formik";
import "./placeholder-not-shown.css";

//Type for Input Field Component Prop
type InputFieldProps = {
    Name: string;
    Label: string;
    Type: string;
};

// Input Field Component
export default function InputField({ Name, Label, Type }: InputFieldProps) {
    return (
        <article className="relative flex flex-col-reverse transition-all duration-200 ease-linear">
            {/* Error Message from Pug */}
            <ErrorMessage
                name={Name}
                component="p"
                className="text-xs text-red-500"
            ></ErrorMessage>
            {/* Input Field From Pug */}
            <Field
                name={Name}
                type={Type}
                component="input"
                className="peer w-full rounded-lg border-2 border-gray-300 bg-themeFour px-4 py-3 outline-none transition-all duration-300 ease-linear focus:border-themeTwo"
                placeholder=""
            ></Field>
            {/* Custom Label that moves up and down */}
            <label
                htmlFor={Name}
                className="pointer-events-none absolute left-3 top-3 text-gray-500 transition-all duration-200 ease-linear peer-focus:-top-2 peer-focus:left-2 peer-focus:rounded-sm peer-focus:bg-themeFour peer-focus:px-1 peer-focus:text-sm peer-focus:text-themeTwo"
            >
                {Label}
            </label>
        </article>
    );
}
