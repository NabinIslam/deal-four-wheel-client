import React from 'react';
import { Link } from 'react-router-dom';
import { BsMap, BsPhone, BsEnvelope } from 'react-icons/bs';

const FooterComponent = () => {
  return (
    <div className="border py-7">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 sm:p-0 ">
        <div>
          <h1 className="font-extrabold text-3xl">DealFourWheel</h1>
          <p className="font-semibold">
            World's no one used car buy sell hub. <br /> Find your desire car
            now.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Service</h2>
          <ul>
            <li className="mb-2">
              <Link className="font-semibold">Diagnostic</Link>
            </li>
            <li className="mb-2">
              <Link className="font-semibold">Car Listing</Link>
            </li>
            <li className="mb-2">
              <Link className="font-semibold">Trade In</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Further Links</h2>
          <ul>
            <li className="mb-2">
              <Link className="font-semibold">Term & Condition</Link>
            </li>
            <li className="mb-2">
              <Link className="font-semibold">List Of Job</Link>
            </li>
            <li className="mb-2">
              <Link className="font-semibold">News</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
          <ul>
            <li className="mb-2">
              <Link className="flex items-center gap-1 font-semibold">
                <span>
                  <BsMap />
                </span>
                <span>2443 Oak Ridge Omaha, QA 45065</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link className="flex items-center gap-1 font-semibold">
                <span>
                  <BsPhone />
                </span>
                <span> 207-8767-452</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link className="flex items-center gap-1 font-semibold">
                <span>
                  <BsEnvelope />
                </span>
                <span>support@site.com</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-5">
        Copyright © 2022 DealFourWheel | Powered by DealFourWheel
      </p>
    </div>
  );
};

export default FooterComponent;
