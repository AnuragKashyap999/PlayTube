import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-primary">PlayTube</h2>
            <p className="mt-3 text-sm text-gray-500">
              Watch, upload and share amazing videos with the world.
              Built using React, Tailwind CSS and Appwrite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/videos" className="hover:text-primary">
                  Videos
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-primary">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>

            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link to="/help" className="hover:text-primary">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>

            <div className="flex gap-4 text-2xl">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <FaTwitter />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-base-300 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PlayTube. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;