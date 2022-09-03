import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { outsiteWebHelper } from "../router/outer_router";
const Footer = () => {
  return (
    <div className="text-white bg-green-600 font-inter">
      <div className="flex lg:flex-row flex-col lg:w-8/12 w-10/12 m-auto justify-between py-10 gap-10">
        <div className="flex lg:w-96 flex-col">
          <div>
            <h1 className="font-bold text-2xl mb-4">About Ayungon</h1>
          </div>
          <p className="flex text-sm text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the
          </p>
        </div>

        <div className="flex flex-col text-sm">
          <div>
            <h1 className="font-bold text-2xl mb-4">Location </h1>
          </div>
          <div className="flex flex-col justify-start gap-3">
            <div>
              <strong>Address:</strong> Poblacion, Ayungon Negros Oriental,
              Philippines 6210
            </div>

            <div>
              <strong>Phone:</strong> 0917 - 3200 - 557 (035) - 400 - 5276
            </div>
            <div>
              <strong>Email:</strong> ayungon_mayorsoffice@yahoo.com
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="font-bold text-2xl mb-4">Social Media</h1>
          </div>
          <div className="flex flex-col text-sm gap-3">
            {socialMediaAccounts?.map((item, key) => {
              return (
                <div
                  key={key}
                  onClick={() => outsiteWebHelper(item.link)}
                  className="flex flex-row gap-3 items-center"
                >
                  <div>{item.icon}</div>
                  <div className="cursor-default hover:underline">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const socialMediaAccounts = [
  {
    label: "@municipalityofayungon",
    link: "https://web.facebook.com/municipalityofayungon",
    icon: <AiFillFacebook size={30} />,
    alt: "facebook",
  },
  {
    label: "@municipalityofayungon",
    link: "https://www.instagram.com/municipalityofayungon/",
    icon: <AiFillInstagram size={30} />,
    alt: "instagram",
  },
];
