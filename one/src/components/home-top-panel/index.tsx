import Image from "next/image";
import styles from './style.module.scss';

export default function HomeTopPanel() {
    return (
        <div className={styles.out_border}>
             <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.logo_img}
              width={100}
              height={24}
              priority
            />
            <div className={styles.major_service_support}></div>
            <div className={styles.user_buttons}>
                <button>登录</button>
                <button>注册</button>
            </div>
        </div>
    )
}