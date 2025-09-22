import Footer from "../footer";
import Navbar from "../navbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />

      <main className="">{children}</main>

      <Footer />
    </div>
  );
}
