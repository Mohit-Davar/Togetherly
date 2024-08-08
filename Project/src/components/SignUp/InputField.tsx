import { Field, ErrorMessage } from "formik";
import React from "react";

interface inputField {
    Name: string;
    Label: string;
    Type: string;
    Placeholder:string
}

const InputField: React.FC<inputField> = ({ Name, Label, Type,Placeholder }) => {
    return (
        <div>
            <label htmlFor={Name} className="block">{Label}</label>
            <Field name={Name} type={Type} component="input" className="focus:outline-red-700 border-none bg-transparent outline-none" placeholder={Placeholder}/>
            <ErrorMessage
                name={Name}
                component="div"
                className="text-red-500"
            />
        </div>
    );
};
export default InputField
