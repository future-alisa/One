import CustomIcon from "@/components/custom-icon";
import styles from "./dashboard.module.css";
import { TbBrandAnsible } from "react-icons/tb";
export default function Page() {
  return (
    <div>
      <div className={styles.appListContainer}>
        <CustomIcon IconComponent={TbBrandAnsible} />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.toolListContainer}>自定义工具列表</div>
        <div className={styles.focusEventListContainer}>自定义关注列表</div>
      </div>
    </div>
  );
}
