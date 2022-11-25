import Header from "../components/Header";
import Meta from "../components/Meta";
import List from "../components/List";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Meta title="Car Showcase:home" />

      <Header />
      <List/>
      <Footer />
    </div>
  );
}
