import { memo } from 'react';
import './style.scss';

interface SectionHeaderProps {
  title: string;
}

function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="section">
      <div className="section__header">
        <h4 className="section__heading">{title}</h4>
      </div>
    </div>
  );
}

export default memo(SectionHeader);
