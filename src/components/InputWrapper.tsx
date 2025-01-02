import React from 'react';

export interface InputLabelWrapperProps {
  label: string;
  fieldSetCss: string;
  children: React.ReactNode;
}

export const InputLabelWrapper: React.FC<InputLabelWrapperProps> = ({
  label,
  fieldSetCss,
  children,
}) => {
  return (
    <fieldset className={`p-2 ${fieldSetCss}`}>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
};
