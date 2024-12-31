export const formDataToObj = (formData: FormData) => {
  const formDataObject: { [key: string]: string } = {};
  formData.forEach((value: { toString: () => string }, key: string) => {
    formDataObject[key] = value.toString();
  });
  return formDataObject;
};
