import styles from './Contacts.module.scss'

const Contacts = (props: any) => {
    const {contacts = ''} = props;
    return (
        <div className={styles.Contacts}>
            <h1>{contacts}</h1>
        </div>
    )
}

export default Contacts