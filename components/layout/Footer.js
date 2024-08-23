import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-gray-600 text-white shadow mt-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/3">
          {/* <h4 className="text-lg font-semibold">Follow Us</h4> */}
          {/* <div className="mt-2 flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.53 17.5 2 12 2S2 6.53 2 12.07c0 4.99 3.66 9.12 8.44 9.92v-6.99h-2.54v-2.73h2.54v-2.1c0-2.52 1.49-3.9 3.78-3.9 1.1 0 2.25.2 2.25.2v2.49h-1.27c-1.25 0-1.64.78-1.64 1.57v1.89h2.76l-.44 2.73h-2.32v6.99C18.34 21.19 22 17.06 22 12.07z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.49 4.5c-.87.38-1.81.63-2.8.75a4.92 4.92 0 002.17-2.72c-.95.56-2 .95-3.13 1.17a4.92 4.92 0 00-8.38 4.49c-4.09-.2-7.72-2.17-10.15-5.15a4.92 4.92 0 001.52 6.57c-.79-.03-1.53-.24-2.17-.6v.06c0 2.26 1.6 4.14 3.72 4.57-.39.1-.8.15-1.22.15-.3 0-.59-.03-.87-.08.59 1.84 2.3 3.17 4.32 3.21A9.86 9.86 0 010 19.54a13.94 13.94 0 007.57 2.23c9.06 0 14.01-7.51 14.01-14.01 0-.21 0-.42-.02-.63a10.01 10.01 0 002.47-2.56z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.16c1.59 0 1.77 0 2.4.03.63.03 1.06.12 1.3.2.3.12.52.26.76.5.24.24.38.45.5.76.08.24.17.67.2 1.3.03.63.03.81.03 2.4s0 1.77-.03 2.4c-.03.63-.12 1.06-.2 1.3-.12.3-.26.52-.5.76-.24.24-.45.38-.76.5-.24.08-.67.17-1.3.2-.63.03-.81.03-2.4.03s-1.77 0-2.4-.03c-.63-.03-1.06-.12-1.3-.2a2.35 2.35 0 01-.76-.5 2.35 2.35 0 01-.5-.76c-.08-.24-.17-.67-.2-1.3-.03-.63-.03-.81-.03-2.4s0-1.77.03-2.4c.03-.63.12-1.06.2-1.3.12-.3.26-.52.5-.76.24-.24.45-.38.76-.5.24-.08.67-.17 1.3-.2.63-.03.81-.03 2.4-.03m0-2.16c-1.63 0-1.84 0-2.48.03-.65.03-1.09.12-1.49.23-.43.13-.8.3-1.16.65-.35.35-.53.72-.65 1.16-.11.4-.2.83-.23 1.49-.03.64-.03.85-.03 2.48s0 1.84.03 2.48c.03.65.12 1.09.23 1.49.13.43.3.8.65 1.16.35.35.72.53 1.16.65.4.11.83.2 1.49.23.64.03.85.03 2.48.03s1.84 0 2.48-.03c.65-.03 1.09-.12 1.49-.23.43-.13.8-.3 1.16-.65.35-.35.53-.72.65-1.16.11-.4.2-.83.23-1.49.03-.64.03-.85.03-2.48s0-1.84-.03-2.48c-.03-.65-.12-1.09-.23-1.49-.13-.43-.3-.8-.65-1.16-.35-.35-.72-.53-1.16-.65-.4-.11-.83-.2-1.49-.23-.64-.03-.85-.03-2.48-.03zM12 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.08a3.92 3.92 0 110-7.84 3.92 3.92 0 010 7.84zm6.16-10.24a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.45c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.44H3.56V9h3.56v11.44zm-1.78-13c-1.14 0-1.85-.77-1.85-1.74 0-.99.73-1.75 1.88-1.75 1.15 0 1.85.76 1.86 1.75-.01.97-.7 1.74-1.85 1.74zm15.43 13H17.1v-5.72c0-1.44-.5-2.42-1.76-2.42-.96 0-1.53.66-1.79 1.3-.09.23-.11.56-.11.89v5.96H9.88c.05-9.68 0-11 0-11h3.55v1.57h-.02c.47-.73 1.31-1.76 3.18-1.76 2.33 0 4.08 1.5 4.08 4.72v6.49z" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-4 text-center">
        <p className="text-sm ">
          © 2024 Ego-X. All rights reserved. |
          <Link href="/privacy-policy" className="hover:text-blue-500 ml-1">
            Privacy Policy
          </Link>{" "}
          |
          <Link href="/terms-of-service" className="hover:text-blue-500 ml-1">
            Terms of Service
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
