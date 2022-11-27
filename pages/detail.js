import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!router.query.data) return;
    setData(JSON.parse(router.query.data).data);
  }, []);

  return (
    <div>
      <Meta title="Cars: Detail" />
      <Header />
      <section class="text-gray-600 body-font bg-gray-900">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{data ? data.title : ''}</h1>
    <Image class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={data ? data.img : ""}/>
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <p class="mb-8 leading-relaxed text-slate-400">Car Source : {data ? data.source : ""}</p>
      <div class="flex w-full justify-center items-end">
        <a href={data ? data.url : "/"}>
        <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg">Lihat lebih lanjut</button>
        </a>
      </div>


    </div>
  </div>
</section>
      <div class="sticky bottom-0 text-gray-600 body-font z-50 bg-gray-900">
        <Footer />
      </div>
    </div>
  );
}
