import styles from './PersonalInfo.module.scss'
import PageTitle from "../common/PageTitle/PageTitle";
import TagBox from "../common/TagBox/TagBox";
// import ProfilePiccture from '../Icon/Icon'
// import { ReactComponent as OneOne } from '../Icon/icons_2/11.svg';
const PersonalInfo = (props: any) => {
    // console.log(ProfilePiccture)
    const words = [
        'aaaasdfgsdg',
        'bbbbsdfgsg',
        'cccsdfgasgc',
        'ddddsdfgasg',
        'jjjasgsagj',
        'ssssasgsag',
        'aaaasdfgsdg',
        'bbbbsdfgsg',
        'cccsdfgasgc',
        'ddddsdfgasg',
        'jjjasgsagj',
        'ssssasgsag'
    ]
    const dates = [
        '12/12',
        '01/01'
    ]
    return (
        <div className={styles.PersonalInfo}>
            <PageTitle text='Personal Info'/>
            {/*<OneOne/>*/}
            <div className={styles.multiWarp}>
                <TagBox list={words} title='Name'/>
                <TagBox list={words} title='Country'/>
                <TagBox list={words} title='Nickname'/>
                <TagBox list={words} title='Languages'/>
                <TagBox list={dates} title='Dates of birth'/>
            </div>
        </div>
    )
}

export default PersonalInfo