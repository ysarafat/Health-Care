import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TPHFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};
type TPHFormsProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TPHFormConfig;
const PHForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: TPHFormsProps) => {
  const formConfig: TPHFormConfig = {};
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
