// components/Icon.tsx
import dynamic from 'next/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon = ({ name, size, color, className }: IconProps) => {
  const LucideIcon = dynamic(() => import('lucide-react').then(mod => mod[name]), {
    loading: () => <div style={{ width: size, height: size }} />,  // Fallback while loading
  });

  return <LucideIcon size={size} color={color} className={className} />;
};

export default Icon;
