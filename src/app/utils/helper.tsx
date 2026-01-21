import { Code2, Cpu, Layout, Database, Search, Zap, Layers, Rocket } from "lucide-react";

export const ServiceIcon = ({ iconName }: { iconName: string }) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-8 h-8" />;
      case 'Cpu': return <Cpu className="w-8 h-8" />;
      case 'Layout': return <Layout className="w-8 h-8" />;
      case 'Database': return <Database className="w-8 h-8" />;
      case 'Search': return <Search className="w-8 h-8" />;
      case 'Zap': return <Zap className="w-8 h-8" />;
      case 'Layers': return <Layers className="w-8 h-8" />;
      case 'Rocket': return <Rocket className="w-8 h-8" />;
      default: return <Code2 className="w-8 h-8" />;
    }
  };