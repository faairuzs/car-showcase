import Link from "next/link";
import Image from "next/image";
import icon from "../public/assets/logo-car.png"
export default function Header() {
  return (
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    </div>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    <Image alt="icon" src={icon} width="40" height="40" /> 
      <span class="ml-3 text-xl">Car-Showcase</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    </div>
  </div>
</header>
  );
}
