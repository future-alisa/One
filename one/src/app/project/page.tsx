'use client';

import { Layout } from "antd";
import styles from './style.module.scss';
import RichTextEditor from "@/components/richtext-editor";


export default function ProjectPage() {
    return (
        <Layout className={styles.layout_style}>
            <Layout.Sider width="4.5rem" className={styles.sider_style}></Layout.Sider>
            <Layout>
                <Layout.Header className={styles.header_style}></Layout.Header>
                <Layout.Content className={styles.content_style}>
                    <RichTextEditor />
                </Layout.Content>
                <Layout.Footer className={styles.footer_style}></Layout.Footer>
            </Layout>
        </Layout>
    )
}