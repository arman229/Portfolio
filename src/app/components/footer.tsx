import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from 'next/link'

function Footer() {
  return (
    <div>
      <footer
        id={"footer"}
        className="  text-white   bg-[#090d1b] bt-black-400"
        style={{ borderTop: "3px solid white" }}
      >
        <div className="container mx-auto px-4 py-8 lg:py-8 ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4  ">
            <div>
              <h6 className="text-lg font-bold mb-4">Contact</h6>
              <div className="py-1 flex items-center hover:underline hover:text-white ">
                <FaEnvelope className="mr-2" />
                <a href="mailto:armanashraf015@gmail.com">Email</a>
              </div>

              <div className="py-1 flex items-center">
                <FaPhone className="mr-2" />
                <span>Phone: +92 3021636805</span>
              </div>
              <div className="py-1 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Location: Pakistan</span>
              </div>
            </div>
            <div>
              <h6 className="text-lg font-bold mb-4">Links</h6>
              <div className="py-1 text-md hover:underline hover:text-white">
                <Link href="#about">About Us</Link>
              </div>
              <div className="py-1  hover:underline hover:text-white">
                <Link href="/">Portfolio</Link>
              </div>
              <div className="py-1  hover:underline hover:text-white">
                <Link href="mailto:armanashraf015@gmail.com">Contact</Link>
              </div>
            </div>
            <div>
              <h6 className="text-lg font-bold mb-4">Resources</h6>
              <div className="py-1 flex items-center">
                <FaGithub className="mr-2" />
                <Link
                  href="https://github.com/arman229"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div>
              <h6 className="text-lg font-bold mb-4">Social</h6>
              <div className="py-1 flex items-center ">
                <Link
                  className="flex items-center "
                  href="https://www.linkedin.com/in/arman-ashraf-427951219"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-xl   ">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
     
    </div>
  );
}

export default Footer;
