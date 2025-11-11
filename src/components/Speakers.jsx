import AmuBanner from "../assets/images/amu-banner.jpeg";
import Sandhya_Image from "../assets/images/sandhya.jpg";
import Subrata_Image from "../assets/images/subrata.jpg";
import Kunzang_Image from "../assets/images/kunzang.jpg";
import Mansaf_Image from "../assets/images/mansaf.jpg";
import Jayanta_Image from "../assets/images/jayanta.jpg";
import Braj_Image from "../assets/images/braj.jpeg";
import Sushil_Image from "../assets/images/sushil.jpg";

export const Speakers = () => {
  const speakers = [
    {
      name: "Prof. Sandhya R. Koushika",
      title: "TIFR, Mumbai",
      img: Sandhya_Image,
    },
    {
      name: "Prof. Subrata Sinha",
      title: "AIIMS, New Delhi",
      img: Subrata_Image,
    },
    {
      name: "Prof. Kunzang Chosdol",
      title: "AIIMS, New Delhi",
      img: Kunzang_Image,
    },
    { name: "Prof. Mansaf Alam", title: "JMI, New Delhi", img: Mansaf_Image },
    {
      name: "Prof. Jayanta Bhattacharyya",
      title: "IIT, Delhi",
      img: Jayanta_Image,
    },
    { name: "Prof. Braj Bhushan", title: "IIT, Kanpur", img: Braj_Image },
    { name: "Prof. Sushil K. Jha", title: "JNU, New Delhi", img: Sushil_Image },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* AMU Banner */}
      <div className="w-full h-64 md:h-100 overflow-hidden">
        <img
          src={AmuBanner}
          alt="AMU Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Speakers Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-8">
          Conference Speakers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              </div>

              {/* Speaker Image and Details */}
              <div className="p-4 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-200">
                  <img
                    src={speaker.img}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  {speaker.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
