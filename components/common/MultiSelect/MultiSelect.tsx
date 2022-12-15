const MultiSelect = (props: any) => {
    const {list, title} = props
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.box}>
                {list?.map((item:any,idx:number)=><div className={styles.boxElement} key={`names ${idx}`}>{item}</div>)}
            </div>
        </div>

)
}

import styles from './MultiSelect.module.scss'

export default MultiSelect