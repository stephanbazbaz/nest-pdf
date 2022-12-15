import styles from './TagBox.module.scss'

const TagBox = (props: any) => {
    const {list, title} = props
    return (
        <div className={styles.TagBox}>
            <div className={styles.title}>{title}</div>
            <div className={styles.box}>
                {list?.map((item: any, idx: number) =>
                    <div
                        className={styles.boxElement}
                        key={`names ${idx}`}>
                        {item}
                    </div>)}
            </div>
        </div>
    )

}

export default TagBox