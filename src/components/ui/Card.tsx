import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
}

const Card: FC<CardProps> = ({
  title,
  subtitle,
  actions,
  children,
  className,
  titleClassName,
  subtitleClassName,
  actionsClassName,
}) => {
  return (
    <div className={clsx('bg-white card-shadow px-5 min-[500px]:px-10 pb-5 min-[500px]:pb-10 pt-20 relative', className)}>
      <div className="absolute top-[-30px] bg-primary left-1/2 -translate-x-1/2 rounded-bl-3xl rounded-br-3xl w-[60%] text-center py-6 px-6 card-title">
        <p className={clsx('uppercase font-medium text-white', titleClassName)}>{title}</p>
        {subtitle && <p className={clsx('text-white text-sm mt-1', subtitleClassName)}>{subtitle}</p>}
      </div>
      {children}
      {actions && <div className={clsx('mt-6 flex justify-end gap-3', actionsClassName)}>{actions}</div>}
    </div>
  );
};

export default Card;
