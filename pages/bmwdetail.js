import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../public/assets/bmwhq.jpg";

export default function bmwdetail() {
  return (
    <div>
      <Meta title="Car Brand : BMW" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col bg-gray-900">
          <h1 class="title-font sm:text-xxl text-3xl mb-8 font-bold text-white">
            BMW
          </h1>
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded"
            alt="hero"
            src={pic1}
          />
          <div class="text-center lg:w-2/3 w-full">
            <p class="mb-8 leading-relaxed text-base font-light mb-4 text-gray-400">
              Bayerische Motoren Werke abbreviated as BMW is a German
              multinational manufacturer of performance luxury vehicles and
              motorcycles headquartered in Munich, Bavaria, Germany. The
              corporation was founded in 1916 as a manufacturer of aircraft
              engines, which it produced from 1917 until 1918 and again from
              1933 to 1945. Automobiles are marketed under the brands BMW, Mini
              and Rolls-Royce, and motorcycles are marketed under the brand BMW
              Motorrad. In 2017, BMW was the world's fourteenth-largest producer
              of motor vehicles, with 2,279,503 vehicles produced. The company
              has significant motor-sport history, especially in touring cars,
              sports cars, and the Isle of Man TT.
            </p>
            <Link
              href="https://www.bmw.co.id/en/index.html"
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
