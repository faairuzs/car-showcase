import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../public/assets/hondahq.jpg";

export default function hondadetail() {
  return (
    <div>
      <Meta title="Car Brand : Honda" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col bg-gray-900">
          <h1 class="title-font sm:text-xxl text-3xl mb-8 font-bold text-white">
            Honda
          </h1>
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded"
            alt="hero"
            src={pic1}
          />
          <div class="text-center lg:w-2/3 w-full">
            <p class="mb-8 leading-relaxed text-base font-light mb-4 text-gray-400">
              Honda is a Japanese public multinational conglomerate manufacturer
              of automobiles, motorcycles, and power equipment, headquartered in
              Minato, Tokyo, Japan. Honda has been the world's largest
              motorcycle manufacturer since 1959, reaching a production of 400
              million by the end of 2019, as well as the world's largest
              manufacturer of internal combustion engines measured by volume,
              producing more than 14 million internal combustion engines each
              year. Honda became the second-largest Japanese automobile
              manufacturer in 2001. In 2015, Honda was the eighth largest
              automobile manufacturer in the world.
            </p>
            <Link
              href="https://automobiles.honda.com/"
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
