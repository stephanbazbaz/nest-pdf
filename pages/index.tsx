import styles from '../styles/Home.module.scss'
import getRawBody from 'raw-body';
import {GetServerSideProps} from 'next'
import Accounts from '../components/Accounts/Accounts'
import Contacts from "../components/Contacts/Contacts";
import ExperienceEducation from "../components/ExperienceEducation/ExperienceEducation";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import MainPage from "../components/MainPage/MainPage";
const objMock = {
    "id": 3,
    "experienceAndEducation": true,
    "contacts":true,
    "graph": true,
    "geolocation":true,
    "accounts": true,
    "possibleMatches": true,
    "social": true,
    "media": true,
    "onlineAppearance": true,
    "notes": true,
    "image":"https://earthobservatory.nasa.gov/img/biome/graph-coniferous-perm.png"
}

export default function Home({body}: any) {

    return (
        <div className={styles.container}>
            <MainPage/>
            <PersonalInfo/>

        </div>
    )
}
