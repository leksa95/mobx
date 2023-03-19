import styles from './styles.module.sass'

const Field = ({ placeholder, field, errors }) => (
    <>
        <input placeholder={placeholder} {...field} />
        {errors[field.name] && (
            <div className={styles.error}>*{errors[field.name].message}</div>
        )}
    </>
)

export default Field;
