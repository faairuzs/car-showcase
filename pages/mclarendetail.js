import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../public/assets/mclarendetail.jpg";

export default function mclarendetail() {
  return (
    <div>
      <Meta title="Car Brand : Mclaren" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col bg-gray-900">
          <h1 class="title-font sm:text-xxl text-3xl mb-8 font-bold text-white">
            Mclaren
          </h1>
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded"
            alt="hero"
            src={pic1}
          />
          <div class="text-center lg:w-2/3 w-full">
            <p class="mb-8 leading-relaxed text-base font-light mb-4 text-gray-400">
              McLaren Automotive is a creator of luxury, high-performance
              supercars. Every vehicle is hand-assembled at the McLaren
              Production Centre (MPC) in Woking, Surrey, England. Launched in
              2010, the company is now the largest part of the McLaren Group.
              The company’s product portfolio of GT, supercar, Motorsport and
              Ultimate models are retailed through over 100 retailers in over 40
              markets around the world.
            </p>
            <Link
              href="https://www.mclaren.com/racing/mclaren+/?gclid=Cj0KCQiAsoycBhC6ARIsAPPbeLv2a7BgxHPuXMcdhiOCrIg__uhFESH5JPsWWwQAN7Jq9QVqT2VYtzsaAq3TEALw_wcB"
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
