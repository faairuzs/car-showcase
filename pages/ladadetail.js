import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../public/assets/ladahq.jpg";

export default function ladadetail() {
  return (
    <div>
      <Meta title="Car Brand : Lada" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col bg-gray-900">
          <h1 class="title-font sm:text-xxl text-3xl mb-8 font-bold text-white">
            Lada
          </h1>
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded"
            alt="hero"
            src={pic1}
          />
          <div class="text-center lg:w-2/3 w-full">
            <p class="mb-8 leading-relaxed text-base font-light mb-4 text-gray-400">
              Lada is a brand of cars manufactured by AvtoVAZ (originally VAZ), a
              Russian state-owned company. From January 2021 until May 2022,
              Lada was integrated with then sister brand Dacia into Renault's
              Lada-Dacia business unit. The first cars manufactured by AvtoVAZ
              were produced with technical assistance from Fiat and marketed
              under the Zhiguli designation. The Lada brand appeared in 1973,
              initially being overseas-focused before becoming AvtoVAZ's main
              brand for all markets in the 1990s. Renault took control of the
              brand in 2016. Technical assistance from the French company
              started in 2008, after it acquired a minority AvtoVAZ stake. Lada
              was re-acquired by the Russian government in 2022.
            </p>
            <Link
              href="https://www.lada.ru/en"
              class="text-orange-500 hover:text-white inline-flex items-center"
            >
              Go to Website
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
