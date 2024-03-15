import { DevicePhoneMobileIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare as faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AtSymbolIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { number } from "@/components/contactBall"
const Footer = () => {
  const Number = JSON.stringify(number)
  return (
    <div className="w-full pb-8 flex flex-col lg:flex-row
        lg:justify-center gap-8 lg:gap-4 bg-grayA">
      {/* Location */}
      <div className="lg:w-1/2 border-l-2 lg:border-0 border-zinc-400 pl-4 py-2" >
        <h1 className="text-zinc-100 pb-1 text-lg sm:text-2xl lg:text-right
            font-semibold"
        >
          Ünvan
        </h1>
        <span className="lg:w-fit lg:float-end flex items-center text-sm sm:text-lg text-zinc-300 pl-0">
          <MapPinIcon className="w-4 sm:w-6 -translate-y-px" />
          <h1 className="pl-1"
          >
            23 Leopold və Mstislav Rostropoviçlər, Bakı
          </h1>
          <Link target="_blank" href="https://www.google.com/maps/dir/?api=1&">
            <FontAwesomeIcon icon={faLink}
              className="lg:hidden text-xs sm:text-base pl-2
                  text-zinc-100 hover:text-zinc-300"
            />
          </Link>
        </span>
      </div>
      {/* Contact */}
      <div className="lg:w-1/2 flex flex-col gap-2 border-l-2 border-zinc-400 pl-4 py-2" >
        <h1 className="text-zinc-100 pb-1 text-lg sm:text-2xl font-semibold"
        >
          Əlaqə
        </h1>
        <span className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300 pl-0">
          <DevicePhoneMobileIcon className="w-4 sm:w-6 -translate-x-[3px]" />
          <h2 className="pl-1"
          >
            055 555 55 55
          </h2>
        </span>
        <span className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300 pl-0">
          <PhoneIcon className="w-4 sm:w-6 -translate-x-[1px]
              sm:translate-x-0" />
          <h2 className="pl-1"
          >
            012 212 12 12
          </h2>
        </span>
        <span className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300 pl-0">
          <AtSymbolIcon className="w-4 sm:w-6 -translate-x-[1px]" />
          <h2 className="pl-1"
          >
            alioglu.design@gmail.com
          </h2>
        </span>
        <Link href="https://www.instagram.com/alioglu.group/" target="_blank"
          className="flex h-4 sm:h-6 items-center text-sm sm:text-lg
              text-zinc-300 hover:text-zinc-100">
          <FontAwesomeIcon icon={faInstagram}
            className="text-base sm:text-xl w-4 sm:w-6 -translate-x-[1px]"
          />
          <h2 className="pl-1"
          >
            aligolu.group
          </h2>
        </Link>
        <Link href={`https://api.whatsapp.com/send?phone=${Number}`} target="_blank"
          className="flex h-4 sm:h-6 items-center text-sm sm:text-lg
              text-zinc-300 hover:text-zinc-100">
          <FontAwesomeIcon icon={faWhatsapp}
            className="text-base sm:text-xl w-4 sm:w-6 -translate-x-[1px]"
          />
          <h2 className="pl-1"
          >
            {number}
          </h2>
        </Link>
      </div>
    </div>

  )
}
export default Footer
