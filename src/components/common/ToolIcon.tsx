import React from 'react';
import {
  Binary,
  FileText,
  CalendarDays,
  Wrench,
  Hourglass,
  Percent,
  HeartPulse,
  Landmark,
  CalendarRange,
  Code,
  Fingerprint,
  ShieldCheck,
  Link2,
  Clock,
  Palette,
  QrCode,
  KeyRound,
  Languages,
  Calculator,
  Code2,
  Sparkles,
  LucideProps,
} from 'lucide-react';

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  Binary,
  FileText,
  CalendarDays,
  Wrench,
  Hourglass,
  Percent,
  HeartPulse,
  Landmark,
  CalendarRange,
  Code,
  Fingerprint,
  ShieldCheck,
  Link2,
  Clock,
  Palette,
  QrCode,
  KeyRound,
  Languages,
  Calculator,
  Code2,
  Sparkles,
};

interface ToolIconProps extends LucideProps {
  name: string;
}

export function ToolIcon({ name, ...props }: ToolIconProps) {
  const IconComponent = ICONS[name] || Sparkles;
  return <IconComponent {...props} />;
}
