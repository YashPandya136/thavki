import React from 'react'
import { MoreHorizontal } from 'lucide-react';
import { cn } from '../../lib/utils';

const Loader = (className) => {
  return (
    <MoreHorizontal
      className={cn('my-28 h-10 w-10 text-primary/60 animate-pulse', className)}
    />
  )
}

export default Loader
