import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../public/assets/merchq.jpg";

export default function mercdetail() {
  return (
    <div>
      <Meta title="Car Brand : Mercedes" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col bg-gray-900">
          <h1 class="title-font sm:text-xxl text-3xl mb-8 font-bold text-white">
            Mercedes
          </h1>
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded"
            alt="hero"
            src={pic1}
          />
          <div class="text-center lg:w-2/3 w-full">
            <p class="mb-8 leading-relaxed text-base font-light mb-4 text-gray-400">
              Mercedes is a German luxury and commercial vehicle automotive
              brand established in 1926. Mercedes-Benz AG is headquartered in
              Stuttgart, Baden-Württemberg, Germany. Mercedes-Benz AG produces
              consumer luxury vehicles and commercial vehicles badged as
              Mercedes-Benz. From November 2019 onwards, Mercedes-Benz-badged
              heavy commercial vehicles (trucks and buses) are managed by
              Daimler Truck, a former part of the Mercedes-Benz Group turned
              into an independent company in late 2021. In 2018, Mercedes-Benz
              was the largest brand of premium vehicles in the world, having
              sold 2.31 million passenger cars
            </p>
            <Link
              href="https://www.mercedes-benz.co.id/"
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
