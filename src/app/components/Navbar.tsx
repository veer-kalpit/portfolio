import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
import Logo from '../../../public/LOGO.png';

export default function Navbar() {

  return (
    <nav className={cn(
        'py-10 flex justify-between items-center animate-move-down'
    )}>
        <Image src={Logo} alt="M"  width={300} height={300} />
        <div className='flex items-center gap-5'>
        </div>
    </nav>
  )
}
