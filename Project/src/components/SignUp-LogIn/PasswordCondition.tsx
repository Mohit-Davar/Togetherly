import React from "react";

// Type for PasswordCondition Component props
type PasswordConditionProps = {
    condition: boolean;
    label: string;
    currentCount?: number;
    requiredCount?: number;
};
// PasswordCondition Component
const PasswordCondition: React.FC<PasswordConditionProps> = ({
    condition,
    label,
    currentCount,
    requiredCount,
}) => {
    return (
        <li className={`${condition ? "text-green-500" : "text-red-500"}`}>
            {label}
            {/* Code block for first condition only */}
            {requiredCount && (
                <>
                    {" "}
                    ({currentCount}/{requiredCount})
                </>
            )}
        </li>
    );
};

export default PasswordCondition;
