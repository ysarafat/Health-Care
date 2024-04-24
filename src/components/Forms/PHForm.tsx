import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
interface IPHFormsProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}
const PHForm = ({ children, onSubmit }: IPHFormsProps) => {
  const methods = useForm();

  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
