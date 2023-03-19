import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import createUserValidationSchema from './validationScheme'
import Field from "../../shared/Field";

import styles from './styles.module.sass'

const CreateUser = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { name: '', email: '' }, resolver: yupResolver(createUserValidationSchema) });

  return (
      <>
        <div className={styles.title}>Create new user:</div>
        <form className={styles.form}>
            <div className={styles.textField}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Field placeholder="Joe Doe" field={field} errors={errors} />}
                />
            </div>
            <div className={styles.textField}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Field placeholder="joedoe@example.com" field={field} errors={errors} />}
                />
            </div>
            <button className={styles.button} onClick={handleSubmit((values) => {
                onSubmit(values);
                reset();
            })}>Create user</button>
        </form>
      </>
  );
};

export default CreateUser;
