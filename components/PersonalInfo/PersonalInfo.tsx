import styles from './PersonalInfo.module.scss'
import PageTitle from "../common/PageTitle/PageTitle";
import MultiSelect from "../common/MultiSelect/MultiSelect";

const PersonalInfo = (props: any) => {
    const words = [
        'aaaa',
        'bbbb',
        'cccc',
        'dddd',
        'jjjj',
        'ssss'
    ]
    return (
        <div className={styles.PersonalInfo}>
            <PageTitle text='Personal Info'/>
            <div className={styles.multiWarp}>
                <MultiSelect list={words} title='Name'/>
                <MultiSelect list={words} title='Country'/>
                <MultiSelect list={words} title='Nickname'/>
                <MultiSelect list={words} title='Languages'/>
                <MultiSelect list={words} title='Dates of birth'/>
            </div>
        </div>
    )
}

export default PersonalInfo