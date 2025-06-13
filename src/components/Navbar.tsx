import Link from "next/link";

function Navbar() {
  return (
    <nav className="max-w-[1400px] mx-auto p-4">
      <section className="flex justify-between flex-col lg:flex-row">
        <h2 className="text-blue-300 text-xl font-bold font-mono">24/7 Exc</h2>
        <div className="flex gap-4">
          <Link
            className="hover:text-blue-300 hover:unerline text-sm md:text-lg"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:text-blue-300 hover:underline text-sm md:text-lg"
            href={"/about"}
          >
            About Us
          </Link>
          <Link
            className="hover:text-blue-300 hover:underline text-sm md:text-lg"
            href={"/contact-us"}
          >
            Contact
          </Link>
          <Link
            className="hover:text-blue-300 hover:underline text-sm md:text-lg"
            href={"/coins"}
          >
            Coins
          </Link>
          <Link
            className="hover:text-blue-300 hover:underline text-sm md:text-lg"
            href={"/exchanges"}
          >
            Exchange
          </Link>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
