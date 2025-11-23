import { FooterComponent } from "./FooterComponent";

import AmuBanner from "../assets/images/amu-banner.jpeg";
import Subrata_Image from "../assets/images/subrata.jpg";
import Sandhya_Image from "../assets/images/sandhya.jpg";
import Birendra_Image from "../assets/images/birendra.jpg";
import Kunzang_Image from "../assets/images/kunzang.jpg";
import Braj_Image from "../assets/images/braj.jpeg";
import Sushil_Image from "../assets/images/sushil.jpg";
import Mansaf_Image from "../assets/images/mansaf.jpg";
import Jayanta_Image from "../assets/images/jayanta.jpg";

export const Speakers = () => {
  const speakers = [
    {
      name: "Prof. Subrata Sinha",
      honour: "FNA, FNASc, FASc, FAMS",
      title: "AIIMS, New Delhi",
      img: Subrata_Image,
      designation: "Chief Guest",
    },
    {
      name: "Prof. Sandhya R. Koushika",
      honour: "FHHMI",
      title: "TIFR, Mumbai",
      img: Sandhya_Image,
      designation: "Guest of Honour",
    },
    {
      name: "Prof. Birendra Nath Mallick",
      honour: "FNASc, FASc, FNA",
      title: "Director Amity Institute of Neuropsychology and Neurosciences, Noida",
      img: Birendra_Image,
      designation: "Guest of Honour",
    },
    {
      name: "Prof. Kunzang Chosdol",
      honour: "FAMS",
      title: "AIIMS, New Delhi",
      img: Kunzang_Image,
    },
    {
      name: "Prof. Braj Bhushan",
      honour: "FBPS, FAPS",
      title: "IIT, Kanpur",
      img: Braj_Image,
    },
    { name: "Prof. Sushil K. Jha", title: "JNU, New Delhi", img: Sushil_Image },
    { name: "Prof. Mansaf Alam", title: "JMI, New Delhi", img: Mansaf_Image },
    {
      name: "Dr. Jayanta Bhattacharyya",
      title: "IIT, Delhi",
      img: Jayanta_Image,
    },
  ];

  return (
    <section className="w-full">
      <article className="print:break-after-page bg-white shadow ring-1 ring-neutral-200 overflow-hidden bg-gradient-to-b from-green-50 to-green-100">
        {/* AMU Banner */}
        <div className="w-full h-64 md:h-100 overflow-hidden">
          <img
            src={AmuBanner}
            alt="AMU Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Speakers Section */}
        <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-8">
              Conference Speakers
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Green Header */}
                  <div className="bg-green-900 text-white p-4">
                    <h2 className="text-lg font-semibold text-center">
                      {speaker.name}
                    </h2>
                    {speaker.designation && <p className="text-sm text-center text-green-200">{speaker.designation}</p>}
                  </div>

                  {/* Speaker Image and Details */}
                  <div className="p-4 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-200">
                      <img
                        src={speaker.img}
                        alt={speaker.name}
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      {speaker.honour}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      {speaker.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FooterComponent />
      </article>
    </section>
  );
};
