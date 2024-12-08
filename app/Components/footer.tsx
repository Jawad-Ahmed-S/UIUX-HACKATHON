import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-custom-purple-dark text-white py-8 mt-[5rem]">
      <div className="container mx-auto px-8">
        {/* Footer Content */}
        <div className="flex justify-between items-start space-y-8 lg:space-y-0 flex-wrap">
          {/* Menu Section */}
          <div>
            <h2 className="mb-4 font-medium headline-five">Menu</h2>
            <ul className="space-y-2">
              <li className="body-small">
                <Link href="/new-arrivals">New arrivals</Link>
              </li>
              <li className="body-small">
                <Link href="/best-sellers">Best sellers</Link>
              </li>
              <li className="body-small">
                <Link href="/recently-viewed">Recently viewed</Link>
              </li>
              <li className="body-small">
                <Link href="/popular-this-week">Popular this week</Link>
              </li>
              <li className="body-small">
                <Link href="/all-products">All products</Link>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h2 className="mb-4 font-medium headline-five">Categories</h2>
            <ul className="space-y-2">
              <li className="body-small">
                <Link href="/categories/crockery">Crockery</Link>
              </li>
              <li className="body-small">
                <Link href="/categories/furniture">Furniture</Link>
              </li>
              <li className="body-small">
                <Link href="/categories/homeware">Homeware</Link>
              </li>
              <li className="body-small">
                <Link href="/categories/plant-pots">Plant pots</Link>
              </li>
              <li className="body-small">
                <Link href="/categories/chairs">Chairs</Link>
              </li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h2 className="mb-4 font-medium headline-five">Our company</h2>
            <ul className="space-y-2">
              <li className="body-small">
                <Link href="/about-us">About us</Link>
              </li>
              <li className="body-small">
                <Link href="/vacancies">Vacancies</Link>
              </li>
              <li className="body-small">
                <Link href="/contact-us">Contact us</Link>
              </li>
              <li className="body-small">
                <Link href="/privacy">Privacy</Link>
              </li>
              <li className="body-small">
                <Link href="/returns-policy">Returns policy</Link>
              </li>
            </ul>
          </div>

          {/* Mailing List Section */}
          <div className="w-full lg:w-auto">
            <h2 className="mb-4 font-medium headline-five">Join our mailing list</h2>
            <form className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="body-small bg-custom-purple-light text-white border-none rounded-l-md p-2 w-full lg:w-auto placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-white text-custom-purple-dark rounded-r-md px-4 py-2 font-medium"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex justify-between items-center border-t border-white pt-4">
          <p className="body-small text-gray-400">
            &copy; Copyright 2022 Avion LTD
          </p>
          <div className="flex space-x-4">
            <a href="#" className="body-small">LinkedIn</a>
            <a href="#" className="body-small">Facebook</a>
            <a href="#" className="body-small">Instagram</a>
            <a href="#" className="body-small">Skype</a>
            <a href="#" className="body-small">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
