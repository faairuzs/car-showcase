import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer class="sticky bottom-0 text-gray-600 font-medium bg-gray-900 py-6 ">
        <nav class="md:ml-auto ml-4 flex flex-wrap items-center text-sm justify-center">
          <Link href="/" class="mr-12 hover:text-orange-500">
            <div className="ml-1">
            <FontAwesomeIcon icon={faCar}
              class="w-5 h-5 content-center">
            </FontAwesomeIcon>
            </div>
            Cars
          </Link>
          <Link href="/brands" class="mr-12 hover:text-orange-500 ">
            <div className="ml-3">
            <FontAwesomeIcon icon={faScrewdriverWrench}
              class="w-5 h-5 content-center">
            </FontAwesomeIcon>
            </div>
            Brands
          </Link>
          <Link href="/review" class="mr-12 hover:text-orange-500">
           <div className="ml-3">
            <FontAwesomeIcon icon={faStar}
              class="w-5 h-5 content-center">
            </FontAwesomeIcon>
            </div>
            Review
          </Link>
          <Link href="/aboutus" class="hover:text-orange-500">
            <div className="ml-3">
            <FontAwesomeIcon icon={faInfo}
              class="w-5 h-5 content-center">
            </FontAwesomeIcon>
            </div>
            About
          </Link>
        </nav>
    </footer>
  );
}
