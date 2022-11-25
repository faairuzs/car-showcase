import Image from "next/image";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import mypic from "../public/assets/fairuzs.webp";
import Link from "next/link";

export default function Aboutus() {
  return (
    <div>
      <Meta title="About" />
      <Header />
      <section class="text-gray-600 body-font bg-gray-900 py-10">
        <div class="container px-5 py-8 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-36 h-36 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image alt="profile" className="rounded-full" src={mypic} />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-white text-lg">
                    Fairuzsyah Naufal
                  </h2>
                  <div class="w-36 h-0.5 bg-orange-500 rounded mt-2 mb-4"></div>
                  <span class="inline-flex">
                    <Link 
                    href="https://www.facebook.com/fairuzs.naufal/"
                    class="text-gray-500 hover:text-orange-500"
                    >
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    <Link
                    href="https://www.linkedin.com/in/faairuzs/"
                    class="ml-3 text-gray-500 hover:text-orange-500"
                    >
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </Link>
                    <Link
                    href="https://www.instagram.com/faairuzs/"
                    class="ml-4 text-gray-500 hover:text-orange-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </Link>
                    <Link
                    href="https://wa.me/6282324413409"
                    class="ml-4 text-gray-500 hover:text-orange-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-base font-medium mb-4 mt-4 text-white">
                Well Hello There, Chaps!
                </p>
                <p class="leading-relaxed text-base font-light mb-4 text-gray-400">
                Carshow is a progressive Web Apps created to display various cars which can be seen on the website of each car and displays the car manufacturer. This app uses the All Cars api from Brandon Crusher which is accessible via rapid api. By using this application, visitors can view images and URLs of various cars from various brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
