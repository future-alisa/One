export interface Plugin {
  id: string;
  name: string;
  version: string;
  description?: string;
  author?: string;
  icon?: string;
  enabled: boolean;
}
