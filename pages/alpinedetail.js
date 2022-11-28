import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../public/assets/alpinehq.jpg";

export default function alpinedetail() {
  return (
    <div>
      <Meta title="Car Brand : Alpine" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col bg-gray-900">
          <h1 class="title-font sm:text-xxl text-3xl mb-8 font-bold text-white">
            Alpine
          </h1>
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded"
            alt="hero"
            src={pic1}
          />
          <div class="text-center lg:w-2/3 w-full">
            <p class="mb-8 leading-relaxed text-base font-light mb-4 text-gray-400">
              Alpine is a French manufacturer of racing and sports cars
              established in 1955. The Alpine car marque was created in 1954.
              Jean Rédélé, the founder of Alpine, was originally a Dieppe garage
              proprietor who began to achieve success in motorsport with one of
              the few French cars that were produced just after the Second World
              War, the Renault 4CV. The company has been closely related to
              Renault through its history, and was bought by it in 1973. The
              Alpine competition department merged into Renault Sport in 1976
              and the production of Alpine-badged models ceased in 1995. The
              Alpine brand was relaunched with the 2017 introduction of the new
              Alpine A110. In January 2021, as part of a company revamp, Renault
              announced that Renault Sport was again merged into Alpine to form
              an Alpine business unit.
            </p>
            <Link
              href="https://www.alpinecars.com/"
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
