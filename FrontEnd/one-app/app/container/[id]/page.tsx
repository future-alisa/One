"use client";
import { useEffect, useState } from "react";
import { ReactPluginManager } from "slim-plugin";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
export default function Page() {
  const loadPlugin = (path: string) => {
    const mainCom = null;
  };
  const [plugin, setPlugin] = useState<React.ReactNode>();
  const params = useParams();
  const { id } = params;
  const mgr = new ReactPluginManager();
  useEffect(() => {
    // const pluginPath = "../../plugins/ansible-plugin/index.tsx";
    const pluginPath = `@plugins/ansible-plugin/index.tsx`;
    mgr.getMainApp(pluginPath).then((app) => setPlugin(app));
  }, []);

  const DynamicPluginComponent = dynamic(
    () => {
      // 构造路径变量，但包裹在 next/dynamic 的函数中
      const pluginPath = `@plugins/ansible-plugin/index.tsx`;

      return import(pluginPath); // ⬅️ 动态导入
    },
    {
      // 可选：加载时的占位符
      loading: () => <p>Loading Plugin: {id}...</p>,
      // SSR 设为 false，确保只在客户端加载
      ssr: false,
    }
  );

  return (
    <>
      <h1>Hello, Container {id}!</h1>
      <div>
        <DynamicPluginComponent />
      </div>
    </>
  );
}
