import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../public/assets/ferrarihq.jpg";

export default function ferraridetail() {
  return (
    <div>
      <Meta title="Car Brand : Ferrari" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col bg-gray-900">
          <h1 class="title-font sm:text-xxl text-3xl mb-8 font-bold text-white">
            Ferrari
          </h1>
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded"
            alt="hero"
            src={pic1}
          />
          <div class="text-center lg:w-2/3 w-full">
            <p class="mb-8 leading-relaxed text-base font-light mb-4 text-gray-400">
              Ferrari is a car company manufacturing luxury sports cars. The
              firm's models include the F12Berlinetta, 488GTB, 488 Spider, 458
              Speciale, California T, the LaFerrari Hybrid, LaFerrari and the FF
              four-wheel drive. It participates in car racing such as Formula
              One. The company was founded by Enzo Anselmo Ferrari in 1939 and
              is headquartered in Maranello, Italy.
            </p>
            <Link
                href="https://www.ferrari.com/en-EN"
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
