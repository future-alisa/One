import { Plugin } from "./plugin-type";

class PluginManager {
  constructor() {
    this.installedPlugins = [];
  }
  private installedPlugins: Plugin[];

  install_plugin(pluginUrl: string) {}
  uninstall_plugin(pluginId: string) {}
  enable_plugin(pluginId: string) {}
  disable_plugin(pluginId: string) {}
  get_installed_plugins() {}
}
