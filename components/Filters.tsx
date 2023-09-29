"use client"

import { formUrlQuery } from "@/sanity/utils";
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

const links = ['Information', 'Erkennen', 'Bekämpfen', 'Gefahren', 'Schäden', 'Kosten', 'Gesetze', 'Rechtliches', 'Schadenregulierung', 'Schadenersatz', 'Mietminderung', 'Rechtliche Schritte', 'Chemische Mittel', 'Hausmittel', 'Silberfische']

const Filters = () => {
    const [active, setActive] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFilter = (link: string) => {
        let newUrl = '';
               
        if(active === link) {
        setActive('');

        newUrl = formUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ['category'],
        })
    } else {
        setActive(link);

        newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: 'category',
            value: link.charAt(0).toUpperCase()
            + link.slice(1),
        })
    }

    router.push(newUrl, { scroll: false });
       
    }

  return (
    <ul className="text-[darkgreen] body-text no-scrollbar flex w-full max-w-full gap-1 overflow-auto py-4 max-md:py-6 sm:max-w-2xl outline-yellow">
        {links.map((link) => (
            <button
            key={link}
            onClick={() => handleFilter(link)}
            className={`${
                active === link ?
                "gradient_green_textyellow" : ""
            } whitespace-nowrap rounded-lg px-4 max-md:px-[1.3rem] max-[540px]:px-[0.65rem] max-[490px]:px-[0.5rem] max-[470px]:px-[0.2rem] py-2.5 capitalize`}
            >
                {link}
            </button>
        ))}
    </ul>
  )
}

export default Filters