import styles from './ExperienceEducation.module.scss'

const ExperienceEducation = (props: any) => {
    const {experienceAndEducation = ''} = props;
    return (
        <div className={styles.ExperienceEducation}>
            <h1>{experienceAndEducation}</h1>
        </div>
    )
}

export default ExperienceEducation