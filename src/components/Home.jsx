import { SectionPart } from "./Common";
import { FooterComponent } from "./FooterComponent";

import AmuLogo from "../assets/images/amu-logo.png";
import IanLogo from "../assets/images/ian-logo.png";
import AmuBanner from "../assets/images/amu-banner.jpeg";

import VC_Image from "../assets/images/vc-najma.jpg";
import PVC_Image from "../assets/images/pvc-mohsin.jpg";
import Khalid_Image from "../assets/images/khalid.jpg";
import Rizvi_Image from "../assets/images/rizvi.jpg";

import Shagufta_Image from "../assets/images/shagufta.jpg";
import Arman_Image from "../assets/images/arman.jpg";
import Mehdi_Image from "../assets/images/mehdi.jpg";

import RegistrationForm from "../assets/images/qr-code.png";

export const Home = () => {
  const registrationLink = "https://forms.gle/7qBjApdb59Phk4rL7";
  const committeeMembers = [
    {
      name: "Prof. Naima Khatoon",
      honour: "FNA",
      title: "Hon’ble Vice Chancellor, AMU, Aligarh",
      img: VC_Image,
    },
    {
      name: "Prof. Mohd Mohsin Khan",
      title: "Pro Vice-Chancellor, AMU, Aligarh",
      img: PVC_Image,
    },
    {
      name: "Prof. Mohd Khalid",
      title: "Dean, J.N. Medical College, AMU, Aligarh",
      img: Khalid_Image,
    },
    {
      name: "Prof. Syed Amjad Ali Rizvi",
      title: "Principal & CMS, J.N. Medical College, AMU, Aligarh",
      img: Rizvi_Image,
    },
    {
      name: "Prof. Shagufta Moin",
      title:
        "Organizing Chairperson Co-ordinator IBRC, F/o Medicine, AMU, Aligarh",
      img: Shagufta_Image,
    },
    {
      name: "Prof. Arman Raza Faridi",
      title: "Co-Organizing Chairperson Computer Science, AMU, Aligarh",
      img: Arman_Image,
    },
    {
      name: "Dr. Mehdi Hayat Shahi",
      title: "Organizing Secretary IBRC, F/o Medicine, AMU, Aligarh",
      img: Mehdi_Image,
    },
  ];

  return (
    <section className="w-full">
      <article className="print:break-after-page bg-white shadow ring-1 ring-neutral-200 overflow-hidden bg-gradient-to-b from-green-50 to-green-100">
        {/* Header */}
        <div className="relative px-4 sm:px-6 pt-6 pb-5">
          {/* Banner with opacity */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url(${AmuBanner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* Text content */}
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <img
                src={AmuLogo}
                className="w-21 h-21 rounded-full"
                alt="AMU Logo"
              />
              <div className="text-center">
                <div className="font-extrabold tracking-wide text-2xl sm:text-5xl text-[#F89309]">
                  NATIONAL SYMPOSIUM
                </div>
                <div className="mt-1 text-sm font-bold sm:text-lg text-blue-950 max-w-4xl mx-auto">
                  Interdisciplinary Brain Research Center (IBRC), Faculty of
                  Medicine, Aligarh Muslim University
                </div>
              </div>
              <img
                src={IanLogo}
                className="w-26 h-26 rounded-full"
                alt="IAN Logo"
              />
            </div>
            <div className="text-center">
              <div className="mt-3 text-sm sm:text-lg font-bold">
                Organizing a{" "}
                <span className="text-sm sm:text-xl font-extrabold tracking-wide text-red-500">
                  SYMPOSIUM
                </span>
              </div>
              <div className="mt-1 text-sm sm:text-base font-bold text-amber-950">
                ON
              </div>
              <div className="mt-1 text-sm sm:text-xl font-extrabold text-red-500 mx-auto">
                "COGNITIVE SCIENCE BRAIN TUMOURS AND ARTIFICIAL INTELLIGENCE
                (CSBTAI-2025)"
              </div>
              <div className="mt-2 text-xs sm:text-lg font-bold">
                In collaboration with Department of Computer Science, Aligarh
                Muslim University, Aligarh, U.P
              </div>
              <div className="mt-2 text-xs sm:text-lg font-bold">
                &
              </div>
              <div className="mt-2 text-xs sm:text-lg font-bold">
                Indian Academy of Neuroscience (IAN) Aligarh Chapter
              </div>
              <div className="mt-2 text-sm sm:text-lg font-bold text-[#11158c]">
                20 December 2025
              </div>
              <div className="mt-1 text-xs sm:text-lg text-amber-950 font-bold">
                Venue: Auditorium J.N.M.C., AMU
              </div>
              <div className="mt-1 text-xs sm:text-lg text-amber-950 font-bold">
                Aligarh
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-white to-blue-50 rounded-xl p-5 hover:shadow-2xl transition-all duration-500 border border-blue-100">
              <SectionPart title="DEAR COLLEAGUES">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">👋</div>
                  <div>
                    <p className="text-lg leading-8 text-gray-800 font-medium">
                      It is our pleasure and privilege to invite you all to the
                      symposium on the theme "Cognitive Science, Brain Tumours and
                      Artificial Intelligence (CSBTAI-2025)". We are fortunate to have
                      the opportunity to host a symposium at AMU, Aligarh. On behalf
                      of the organising committee and IAN Aligarh Chapter, we look
                      forward to welcoming you all at symposium CSBTAI-2025.
                    </p>
                  </div>
                </div>
              </SectionPart>
            </div>

            {/* Committee Section */}
            <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300">
              <SectionPart>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Chief Patron
                  </h3>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-200 shadow-lg">
                    <img
                      src={committeeMembers[0].img}
                      alt={committeeMembers[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-lg text-gray-800">
                    {committeeMembers[0].name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {committeeMembers[0].honour}
                  </p>
                  <p className="text-sm text-gray-600">
                    {committeeMembers[0].title}
                  </p>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Patrons</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((idx) => (
                      <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-green-300 shadow-md">
                          <img
                            src={committeeMembers[idx].img}
                            alt={committeeMembers[idx].name}
                            className="w-full h-full object-fill"
                          />
                        </div>
                        <p className="font-semibold text-sm text-gray-800">
                          {committeeMembers[idx].name}
                        </p>
                        <p className="text-xs text-gray-600 leading-tight">
                          {committeeMembers[idx].title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-bold text-green-800 mb-6">
                    Organizing Committee
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[4, 5, 6].map((idx) => (
                      <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-green-300 shadow-md">
                          <img
                            src={committeeMembers[idx].img}
                            alt={committeeMembers[idx].name}
                            className="w-full h-full object-fill"
                          />
                        </div>
                        <p className="font-semibold text-sm text-gray-800">
                          {committeeMembers[idx].name}
                        </p>
                        <p className="text-xs text-gray-600 leading-tight">
                          {committeeMembers[idx].title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionPart>
            </div>

            {/* Registration | Important Dates */}
            <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300">
              <SectionPart title="REGISTRATION | IMPORTANT DATES">
                <div className="space-y-4 text-gray-700">
                  <p>
                    Interested participants are requested to register using the Google Forms link/QR code given below on or before
                    December 10, 2025. Prior to registration, the interested participants should transfer the registration fee in the
                    bank account whose details are mentioned below:
                  </p>

                  {/* Bank Details */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                    <h4 className="text-center font-bold text-yellow-800 mb-3">BANK DETAILS</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div><strong>Bank:</strong> CANARA BANK</div>
                      <div><strong>IFSC:</strong> CNRB0005247</div>
                      <div><strong>MICR:</strong> 202015013</div>
                      <div><strong>Branch Code:</strong> 005247</div>
                      <div><strong>Branch:</strong> AMU</div>
                      <div><strong>City:</strong> Aligarh</div>
                      <div><strong>District:</strong> Aligarh</div>
                      <div><strong>State:</strong> Uttar Pradesh</div>
                      <div className="md:col-span-2"><strong>Address:</strong> Canara Bank</div>
                    </div>
                  </div>

                  <p>
                    Candidates will be notified by email if their abstract is accepted: 15th December 2025 or before.
                  </p>

                  <h4 className="text-center text-teal-700 font-semibold">
                    REGISTRATION FEES INFORMATION
                  </h4>
                </div>

                {/* Fees Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse table-auto mx-auto text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-3 text-left">Category</th>
                        <th className="border px-4 py-3 text-left">Up to Dec 10, 2025</th>
                        <th className="border px-4 py-3 text-left">On Spot</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-3">Faculty</td>
                        <td className="border px-4 py-3">
                          Base Fee + (18% GST): ₹2000/-
                        </td>
                        <td className="border px-4 py-3">₹2500/-</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-3 align-top">
                          Students<br />
                          <span className="text-xs text-gray-600">
                            JR/Ph.D/M.Sc/ M.Tech/MBBS/B.Tech/B.Sc/B.A.
                          </span>
                        </td>
                        <td className="border px-4 py-3">
                          Base Fee + (18% GST): ₹1500/-
                        </td>
                        <td className="border px-4 py-3">₹2000/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="font-semibold mt-2">Registration fees include kit, breakfast, lunch and high tea.</p>
              </SectionPart>
            </div>

            {/* Contact & Registration */}
            <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300">
              <SectionPart title="CONTACT & REGISTRATION LINK">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-700 mb-4">
                      <strong className="text-red-600 text-lg">
                        Dr. Mehdi Hayat Shahi
                      </strong>
                      <br />
                      Organizing Secretary, CSBTAI-2025
                      <br />
                      Interdisciplinary Brain Research Center, J.N. Medical College
                      <br />
                      Faculty of Medicine, Aligarh Muslim University, Aligarh, India
                      <br />
                      <span className="font-semibold">Email:</span> csbtai2025@gmail.com or mehdihayat@gmail.com <br />
                      <span className="font-semibold">Contact No.:</span> +91-8439186478
                    </p>

                    <p className="text-sm text-gray-700 mb-4">
                      <strong>
                        Any query, Contact for Payment of Registration:
                      </strong>
                      <br />
                      <span className="text-red-600 font-semibold">Dr. Sufiya Naseem</span> (Treasurer CSBTAI, 2025)
                      <br />
                      Department of Biochemistry, JNMC, AMU <br />
                      <span className="font-semibold">Contact No.:</span> +91-9897192776
                    </p>

                    <p className="text-sm text-gray-700">
                      <strong>
                        Further, any query regarding registration or payment:
                      </strong>
                      <br />
                      Intezar Ali: +91-9557415212, <br />
                      Mohd Muzzammil: +91-7417236291, <br />
                      Shahid Afridi: +91-9808997957
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-teal-800 mb-3">
                        Scan to Register
                      </p>
                      <img
                        src={RegistrationForm}
                        alt="Registration QR Code"
                        className="w-32 h-32 mx-auto border-2 border-teal-300 rounded-lg shadow-md"
                      />
                      <p className="text-xs text-gray-600 mt-2">
                        Scan with phone to register online
                      </p>
                      <a
                        href={registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-semibold"
                      >
                        Register Online
                      </a>
                    </div>
                  </div>
                </div>
              </SectionPart>
            </div>
          </div>
        </div>
        <FooterComponent />
      </article>
    </section>
  );
};
