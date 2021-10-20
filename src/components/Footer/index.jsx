import { FaDiscord, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      class="footer relative pt-1 border-b-2 border-blue-700"
      style={{ backgroundColor: "#0E0221" }}
    >
      <div class="container mx-auto px-6">
        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div class="flex flex-col">
              <span class="font-bold text-blue-600 uppercase mb-2">
                Social Links
              </span>
              <span class="my-2 flex flex-row">
                <a href="" class="text-lg text-blue-500 mx-2 hover:text-yellow-300">
                  <FaDiscord />
                </a>
                <a href="" class="text-lg text-blue-500 mx-2 hover:text-yellow-300">
                  <FaInstagram />
                </a>
                <a href="" class="text-lg text-blue-500 mx-2 hover:text-yellow-300">
                  <FaFacebook />
                </a>
                <a href="" class="text-lg text-blue-500 mx-2 hover:text-yellow-300">
                  <FaLinkedin />
                </a>
              </span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-blue-600 uppercase mb-2">
                Site Links
              </span>
              <span class="my-2">
                <a href="" class="text-yellow-300  text-md hover:text-blue-500">
                  Timeline
                </a>
              </span>
              <span class="my-2">
                <a href="" class="text-yellow-300  text-md hover:text-blue-500">
                  FAQ
                </a>
              </span>
              <span class="my-2">
                <a href="" class="text-yellow-300  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-blue-600 uppercase mb-2">
                Contact Us
              </span>
              <span class="my-2">
                <a href="" class="text-yellow-300 text-md">
                  Email: androidclub@vit.ac.in
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-sm text-blue-600 font-bold mb-2">
              © 2021 by Android Club
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/*

*/
