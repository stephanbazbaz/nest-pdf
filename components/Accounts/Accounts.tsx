
import styles from './styles.module.scss'

const Accounts = (props: any) => {
    const {accounts = ''} = props
    return (
        <div className={styles.Accounts}>
        <h1>{accounts}</h1>
        </div>
    )
}

export default Accounts

