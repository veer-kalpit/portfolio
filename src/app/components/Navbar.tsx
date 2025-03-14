import Image from "next/image";

import React from "react";
import CreativeBtn from "../../components/ui/button";
import Logo from "../../../public/LOGO.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-10 flex items-center self-center">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={300} height={300}  />
      </Link>

      <div>
        <CreativeBtn text="Certification" link="/Certificate" />
      </div>
    </nav>
  );
}
