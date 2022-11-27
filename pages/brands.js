import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Image from "next/image";
import pic2 from "../public/assets/mclaren.png";
import pic3 from "../public/assets/merc.png";

import pic5 from "../public/assets/audi.png";
import pic6 from "../public/assets/toyota.png";
import pic7 from "../public/assets/bmw.png";
import pic8 from "../public/assets/alpine.png";
import pic9 from "../public/assets/lada.png";
import Link from "next/link";


export default function tools() {
  return (
    <div>
      <Meta title="Car Brands" />
      <Header />
      <section class="text-gray-600 body-font bg-gray-900">
        <div class="container px-5 py-5 mx-auto">
          <div class="text-center mb-10">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center text-indigo-500 mb-3 flex-shrink-0">
                <Image alt="icon" src={""} className="" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-xl text-center title-font font-bold mt-4 mb-4">
                  Ferrari
                </h2>
                <Link href="https://www.ferrari.com/en-ID"  class="text-slate-400 hover:text-orange-500 inline-flex items-center">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  </Link >
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center text-indigo-500 mb-3 flex-shrink-0">
                <Image alt="icon" src={pic2} className="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-xl text-center title-font font-bold mt-4 mb-4">
                    Mclaren
                    </h2>
                    <Link href="https://www.mclaren.com/"  class="text-slate-400 hover:text-orange-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link >
                  </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 items-center justify-center mb-5 flex-shrink-0">
                <Image alt="icon" src={pic3} className="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-xl text-center title-font font-bold mt-4 mb-4">
                    Mercedes
                    </h2>
                    <Link href="https://www.mercedes-benz.co.id/"  class="text-slate-400 hover:text-orange-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link >
                  </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center text-indigo-500 mb-3 flex-shrink-0">
                <Image alt="icon" src={""} className="" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-xl text-center title-font font-bold mt-4 mb-4">
                    Honda
                    </h2>
                    <Link href="https://automobiles.honda.com/"  class="text-slate-400 hover:text-orange-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link >
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center text-indigo-500 mb-3 flex-shrink-0">
                <Image alt="icon" src={pic5} className="" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-xl text-center title-font font-bold mt-4 mb-4">
                    Audi
                    </h2>
                    <Link href="https://www.audi.co.id/sea/web/id.html"  class="text-slate-400 hover:text-orange-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link >
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center text-indigo-500 mb-3 flex-shrink-0">
                <Image alt="icon" src={pic6} className="" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-xl text-center title-font font-bold mt-4 mb-4">
                    Toyota
                    </h2>
                    <Link href="https://www.toyota.astra.co.id/home"  class="text-slate-400 hover:text-orange-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link >
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center text-indigo-500 mb-3 flex-shrink-0">
                <Image alt="icon" src={pic7} className="" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-xl text-center title-font font-bold mt-4 mb-4">
                    BMW
                    </h2>
                    <Link href="https://www.bmw.co.id/en/index.html"  class="text-slate-400 hover:text-orange-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link >
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center text-indigo-500 mb-3 flex-shrink-0">
                <Image alt="icon" src={pic8} className="" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-xl text-center title-font font-bold mt-4 mb-4">
                    Alpine
                    </h2>
                    <Link href="https://www.alpinecars.com/"  class="text-slate-400 hover:text-orange-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link >
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center text-indigo-500 mb-3 flex-shrink-0">
                <Image alt="icon" src={pic9} className="" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-xl text-center title-font font-bold mt-4 mb-4">
                    Lada
                    </h2>
                    <Link href="https://www.lada.ru/en"  class="text-slate-400 hover:text-orange-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link >
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
