import styles from '../styles/Home.module.scss'
import getRawBody from 'raw-body';
import {GetServerSideProps} from 'next'
import Accounts from '../components/Accounts/Accounts'
import Contacts from "../components/Contacts/Contacts";
import ExperienceEducation from "../components/ExperienceEducation/ExperienceEducation";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
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
    console.log(body.accounts);
    const {
        image = {},
        id = {},
        experienceAndEducation = {},
        graph = {},
        contacts = {},
        geolocation = {},
        accounts = {},
        possibleMatches = {},
        social = {},
        media = {},
        onlineAppearance = {},
        notes = {},
    } = body;
    return (
        <div className={styles.container}>
            <PersonalInfo/>
            {/*<Accounts accounts = {accounts?.activity}/>*/}
            {/*<Contacts contacts = {contacts?.activity}/>*/}
            {/*<ExperienceEducation experienceAndEducation = {experienceAndEducation?.activity} />*/}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}: any) => {
    // const newBody = await getRawBody(req)
    // const body: any = JSON.parse(newBody.toString());

    const body = await getPdfData(objMock)

    return {props: {body}};
}

async function getPdfData(body: any) {
    const {
        image = true,
        id = true,
        experienceAndEducation = true,
        contacts = true,
        graph = true,
        geolocation = true,
        accounts = true,
        possibleMatches= true,
        social = true,
        media = true,
        onlineAppearance = true,
        notes = true,
    } = body;
    const pdfData: any = {
        image,
        id,
    };

    if (experienceAndEducation) {
        console.log(process.env.BEARER_TOKEN)
        // //TODO: get request to db by id
        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", process.env.BEARER_TOKEN as any);
        // const res = await fetch(decodeURI(process.env.REQUEST_URL as any), {
        //     method: 'GET',
        //     headers: {
        //         Authorization: process.env.BEARER_TOKEN as any
        //     },
        //     redirect: 'follow'
        // })
        // const data = await res.json();
        // console.log(data)
        // pdfData.experienceAndEducation = data;
    }
    if (contacts) {
        //TODO: get request to db by id
        const res = await fetch(`https://www.boredapi.com/api/activity`)
        const data = await res.json();
        pdfData.contacts = data;
    }
    if (graph) {
        //TODO: get request to db by id
        const res = await fetch(`https://www.boredapi.com/api/activity`)
        const data = await res.json();
        pdfData.graph = data;
    }
    if (geolocation) {
        //TODO: get request to db by id
        const res = await fetch(`https://www.boredapi.com/api/activity`)
        const data = await res.json();
        pdfData.geolocation = data;
    }
    if (accounts) {
        //TODO: get request to db by id
        const res = await fetch(`https://www.boredapi.com/api/activity`)
        const data = await res.json();
        pdfData.accounts = data;
    }
    if (possibleMatches) {
        //TODO: get request to db by id
        const res = await fetch(`https://www.boredapi.com/api/activity`)
        const data = await res.json();
        pdfData.possibleMatches = data;
    }
    if (social) {
        //TODO: get request to db by id
        const res = await fetch(`https://www.boredapi.com/api/activity`)
        const data = await res.json();
        pdfData.social = data;
    }
    if (media) {
        //TODO: get request to db by id
        const res = await fetch(`https://www.boredapi.com/api/activity`)
        const data = await res.json();
        pdfData.media = data;
    }
    if (onlineAppearance) {
        //TODO: get request to db by id
        const res = await fetch(`https://www.boredapi.com/api/activity`)
        const data = await res.json();
        pdfData.onlineAppearance = data;
    }
    if (notes) {
        //TODO: get request to db by id
        const res = await fetch(`https://www.boredapi.com/api/activity`)
        const data = await res.json();
        pdfData.notes = data;
    }
    return pdfData;
}