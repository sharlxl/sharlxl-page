export const convertFormDataToJsonString = (formData: FormData) => {
  const formDataObject: { [key: string]: string } = {};
  formData.forEach((value: { toString: () => string }, key: string) => {
    formDataObject[key] = value.toString();
  });

  return JSON.stringify(formDataObject);
};
