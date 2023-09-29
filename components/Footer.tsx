import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex-between footer-text text-lightgreen gradient_green_box w-full gap-y-10 border-t border-lightgreen bg-black-100 px-20 py-2 max-md:py-3 max-md:gap-y-0 max-md:text-base max-md:px-10 max-md:leading-3 gap-x-9 max-md:gap-x-3 max-xs:px-[0.5rem] max-xs:text-xs max-x:px-[0.7rem] max-xs:leading-3 max-sm:py-[0.5rem] max-xs:py-[0.25rem]">
      <p className="drop-shadow-[1.5px_1.2px_1.2px_#082d0b]">
        Deine Freunde aus der Nachbarschaft
      </p>

      <div className="flex gap-x-9 max-md:gap-x-3 drop-shadow-[1.5px_1.2px_1.2px_#082d0b]">
        <Link href="/terms-of-use">Nutzungsbedingungen</Link>
        <Link href="/privacy-policy">Datenschutz</Link>
      </div>
    </footer>
  )
}

export default Footer