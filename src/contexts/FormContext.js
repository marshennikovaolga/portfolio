import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState(null);

  const setOpenFormAndCloseOthers = (formName) => {
    setOpenForm((prevOpenForm) => (prevOpenForm === formName ? null : formName));
  };

  return (
    <FormContext.Provider value={{ openForm, setOpenFormAndCloseOthers }}>
      {children}
    </FormContext.Provider>
  );
};