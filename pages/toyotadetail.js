import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../public/assets/toyotahq.jpg";

export default function toyotadetail() {
  return (
    <div>
      <Meta title="Car Brand : Toyota" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col bg-gray-900">
          <h1 class="title-font sm:text-xxl text-3xl mb-8 font-bold text-white">
            Toyota
          </h1>
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded"
            alt="hero"
            src={pic1}
          />
          <div class="text-center lg:w-2/3 w-full">
            <p class="mb-8 leading-relaxed text-base font-light mb-4 text-gray-400">
              Toyota is a Japanese multinational automotive manufacturer headquartered
              in Toyota City, Aichi, Japan. It was founded by Kiichiro Toyoda
              and incorporated on August 28, 1937. Toyota is one of the largest
              automobile manufacturers in the world, producing about 10 million
              vehicles per year. Toyota is the largest company in Japan and the
              ninth-largest company in the world by revenue, as of December
              2020. Toyota was the world's first automobile manufacturer to
              produce more than 10 million vehicles per year, a record set in
              2012, when it also reported the production of its 200 millionth
              vehicle.
            </p>
            <Link
              href="https://www.toyota.astra.co.id/home"
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
