import { useState } from "react";

interface setErrorProps {
  field: string;
  message: string;
}

interface ErrorTypes {
  field?: string;
  message?: string;
}
export default function useErrors() {
  const [errors, setErrors] = useState<object[]>([]);

  function setError({ field, message }: setErrorProps) {
    const errorAlreadyExists = errors.find(
      (error: ErrorTypes) => error.field === field
    );

    if (errorAlreadyExists) {
      return;
    }
    setErrors((prevState) => [...prevState, { field, message }]);
  }

  function removeError(fieldName: string) {
    setErrors((prevState) =>
      prevState.filter((error: ErrorTypes) => error.field !== fieldName)
    );
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((error: ErrorTypes) => error.field === fieldName)
      ?.message;
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
