import styles from './PageTitle.module.scss'

const PageTitle = (props: any) => {
    const {text} = props
    return (
        <div className={styles.PageTitle}>
            {text}
        </div>
    )
}

export default PageTitle