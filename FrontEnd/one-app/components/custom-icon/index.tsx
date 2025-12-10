import Link from "next/link";
import Image, { ImageProps } from "next/image";
import styles from "./custom-icon.module.css";
import { IconType } from "react-icons";
import { TbBrandAnsible } from "react-icons/tb";
interface CustomIconProps {
  /** 链接地址 */
  href?: string;
  /** 图标类型：react-icon 或 ico 文件 */
  iconType?: "react-icon" | "ico";
  /** 当 iconType 为 'ico' 时，指定 .ico 文件名（不含扩展名） */
  iconName?: string;
  /** 图标旁的标签文字 */
  label?: string;
  /** 图标宽度 */
  width?: number;
  /** 图标高度 */
  height?: number;
  /** 自定义 React Icon 组件，当 iconType 为 'react-icon' 时使用 */
  IconComponent?: IconType;
  /** Next.js Image 组件的其他属性 */
  imageProps?: Partial<Omit<ImageProps, "src" | "alt" | "width" | "height">>;
}

export default function CustomIcon({
  href = "/test",
  iconType = "react-icon",
  iconName = "ansible",
  label = "Ansible",
  width = 50,
  height = 50,
  IconComponent = TbBrandAnsible,
  imageProps = {},
}: CustomIconProps) {
  return (
    <Link href="/test" className={styles.iconContainer}>
      {iconType === "react-icon" ? (
        // 渲染 React Icon
        <IconComponent className={styles.icon} style={{ width, height }} />
      ) : (
        // 渲染 .ico 文件
        <Image
          src={`/icons/${iconName}.ico`}
          alt={`${label} 图标`}
          width={width}
          height={height}
          className={`${styles.icon} ${imageProps.className || ""}`}
          {...imageProps}
        />
      )}
      <span className={styles.label}>Ansible</span>
    </Link>
  );
}
