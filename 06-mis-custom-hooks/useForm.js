import { useState } from "react";

export const useForm = (formInicial = {}) => {
  const [formState, setFormState] = useState(formInicial);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(formInicial);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
