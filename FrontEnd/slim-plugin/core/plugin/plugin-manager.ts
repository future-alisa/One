import * as React from "react";
import { Plugin } from "./plugin-type";
import { ReactNode } from "react";
export interface PluginManager {
  install_plugin(pluginUrl: string): boolean;
  uninstall_plugin(pluginId: string): boolean;
  enable_plugin(pluginId: string): boolean;
  disable_plugin(pluginId: string): boolean;
  get_installed_plugins(): Plugin[];
}

export class ReactPluginManager implements PluginManager {
  constructor() {
    this.installedPlugins = [];
  }
  private installedPlugins: Plugin[];

  install_plugin(pluginUrl: string) {
    return false;
  }
  uninstall_plugin(pluginId: string) {
    return false;
  }
  enable_plugin(pluginId: string) {
    return false;
  }
  disable_plugin(pluginId: string) {
    return false;
  }
  get_installed_plugins() {
    return this.installedPlugins;
  }

  async getMainApp(path: string): Promise<ReactNode> {
    try {
      const module = await import(path);

      const AppComponent = module.default || module.App || module;

      return React.createElement(AppComponent);
    } catch (error) {
      console.error(`加载模块 ${path} 失败:`, error);
      return null;
    }
  }
}
