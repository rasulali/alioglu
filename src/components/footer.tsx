import { DevicePhoneMobileIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare as faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AtSymbolIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className="relative w-full pb-16 flex flex-col lg:flex-row
        lg:justify-center gap-8 lg:gap-4 bg-grayA lg:pt-16 pt-12">

      {/* Social Media */}
      <div className="flex flex-col gap-2 px-4 py-2
      border-l-2 lg:border-0 border-zinc-400" >
        <h1 className="text-zinc-100 mb-2 text-lg sm:text-2xl font-semibold text-nowrap"
        >
          Sosial
        </h1>
        <span className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300">
          <Link target="_blank" href="https://www.instagram.com/alioglu.group/"
            className="flex"
          >
            <FontAwesomeIcon icon={faInstagram}
              className="w-4 sm:w-6 -translate-x-[1px] mr-2" />
            alioglu.group
          </Link>
        </span>
        <span className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300 pl-0">
          <Link target="_blank" href="https://api.whatsapp.com/send?phone=994502989999"
            className="flex"
          >
            <FontAwesomeIcon icon={faWhatsapp}
              className="w-4 sm:w-6 -translate-x-[1px] mr-2" />
            050 298 99 99
          </Link>
        </span>
        <span className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300 pl-0">
          <Link target="_blank" href="https://www.facebook.com/profile.php?id=61556943345997"
            className="flex"
          >
            <span className="lg:w-6 w-4 aspect-square fill-zinc-100 mr-2 -translate-x-[1px]">
              <svg viewBox="0 0 14 14">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.611.611 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.618.618 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1" />
              </svg>
            </span>
            Alioglu
          </Link>
        </span>
      </div>

      {/* Location */}
      <div className="border-l-2 lg:border-0 border-zinc-400 px-4 py-2
      lg:border-x-4 lg:border-grayALight" >
        <h1 className="text-zinc-100 lg:mb-4 mb-2 text-lg sm:text-2xl
            font-semibold"
        >
          Ünvan
        </h1>
        <span className="lg:w-fit flex items-center text-sm sm:text-lg
         text-zinc-300 pl-0">
          <MapPinIcon className="w-4 sm:w-6 mr-2" />
          <div className="flex flex-col items-start">
            <h1 className="lg:text-xl font-semibold pl-1"
            >
              Bakı, Azərbaycan
            </h1>
            <h1 className="ml-1 flex text-neutral-300"
            >
              23 Leopold və Mstislav Rostropoviçlər
              <Link target="_blank" href="https://www.google.com/maps/dir/?api=1&">
                <FontAwesomeIcon icon={faLink}
                  className="lg:hidden text-xl text-zinc-100 ml-1 mt-1 w-3"
                />
              </Link>
            </h1>
          </div>
        </span>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-2 pl-4 py-2
      border-l-2 lg:border-0 border-zinc-400" >
        <h1 className="text-zinc-100 lg:mb-3 mb-2 text-lg sm:text-2xl font-semibold"
        >
          Əlaqə
        </h1>
        <span className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300">
          <DevicePhoneMobileIcon className="w-4 sm:w-6 mr-2" />
          <Link
            href="tel:994502989999"
            className="lg:w-32"
          >
            050 298 99 99
          </Link>
        </span>
        <span className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300 pl-0">
          <PhoneIcon className="w-4 sm:w-6 mr-2" />
          <Link
            href="tel:994124921346"
            className="lg:w-32"
          >
            012 492 13 46
          </Link>
        </span>
        <span className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300 pl-0">
          <AtSymbolIcon className="w-4 sm:w-6 mr-2" />
          <Link href="mailto:alioglu.design@gmail.com"
          >
            alioglu.design@gmail.com
          </Link>
        </span>
      </div>
      <p className="absolute text-xs sm:text-sm text-neutral-500
        bottom-2 left-0 lg:left-1/2 transform lg:-translate-x-[calc(50%-1.5ch)]">
        Built by
        <Link
          target="_blank"
          href="https://github.com/rasulali/"
          className="underline text-neutral-400 pl-1">
          Rasul Ali
        </Link>
      </p>
    </div>

  )
}
export default Footer
