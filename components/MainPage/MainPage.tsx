import styles from './MainPage.module.scss'
import PROFILE_IMG from '../../public/profile-image.jpeg'
import Image from 'next/image';
import flag from '../../public/flag.png'
import {HiMail} from 'react-icons/hi';
import {MdPhoneIphone} from 'react-icons/md';

const MainPage = (props: any) => {
    const obj = {
        fullName: 'sen alex padilla',
        entityId: '#16522',
        country: 'united states',
        phoneNumber: '+221781767472',
        email: 'albertdiatta2727@gmail.com',
        createdAt:'Created at Thu Sep 01 2022 17:06:49 GMT+0300 by Spiderman'
    }
    return (
        <div className={styles.MainPage}>
            <div className={styles.imageWarp}>
                <Image alt='profile-image' src={PROFILE_IMG}/>
            </div>
            <div>
                <div className={styles.fullName}>{obj.fullName}</div>
                <div className={styles.entityId}>{obj.entityId}</div>
            </div>
                <div className={styles.aboutRow}>
                    <div className={styles.aboutCol}>
                        <MdPhoneIphone/>
                        <div className={styles.aboutValue}>{obj.phoneNumber}</div>
                    </div>
                    <div className={styles.aboutCol}>
                        <Image className={styles.flagImage} src={flag} alt='flag'/>
                        <div className={styles.aboutValue}>{obj.country}</div>
                    </div>
                    <div className={styles.aboutCol}>
                        <HiMail/>
                        <div className={styles.aboutValue}>{obj.email}</div>
                    </div>
                </div>
            <div className={styles.createdBy}>{obj.createdAt}</div>
        </div>
    )
}

export default MainPage