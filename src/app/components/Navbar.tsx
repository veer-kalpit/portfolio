import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
import Logo from '../../../public/LOGO.png';

export default function Navbar() {

  return (
    <nav className={cn(
        'py-10 flex justify-between  animate-move-down self-center'
    )}>
        <Image src={Logo} alt="M"  width={300} height={300} />
    </nav>
  )
}
