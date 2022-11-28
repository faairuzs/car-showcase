import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../public/assets/audihq.jpg";

export default function audidetail() {
  return (
    <div>
      <Meta title="Car Brand : Audi" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col bg-gray-900">
          <h1 class="title-font sm:text-xxl text-3xl mb-8 font-bold text-white">
            Audi
          </h1>
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded"
            alt="hero"
            src={pic1}
          />
          <div class="text-center lg:w-2/3 w-full">
            <p class="mb-8 leading-relaxed text-base font-light mb-4 text-gray-400">
              Audi, is a German automotive manufacturer of luxury vehicles
              headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of
              its parent company, the Volkswagen Group, Audi produces vehicles
              in nine production facilities worldwide. The origins of the
              company are complex, going back to the early 20th century and the
              initial enterprises (Horch and the Audiwerke) founded by engineer
              August Horch (1868–1951); and two other manufacturers (DKW and
              Wanderer), leading to the foundation of Auto Union in 1932. The
              modern Audi era began in the 1960s, when Auto Union was acquired
              by Volkswagen from Daimler-Benz. After relaunching the Audi
              brand with the 1965 introduction of the Audi F103 series,
              Volkswagen merged Auto Union with NSU Motorenwerke in 1969, thus
              creating the present-day form of the company.
            </p>
            <Link
              href="https://www.audi.co.id/sea/web/id.html"
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
