import { SectionPart } from "./Common";
import { FooterComponent } from "./FooterComponent";
import AmuLogo from "../assets/images/amu-logo.png";
import IanLogo from "../assets/images/ian-logo.png";
import AmuBanner from "../assets/images/amu-banner.jpeg";
import VC_Image from "../assets/images/vc-najma.jpg";
import PVC_Image from "../assets/images/pvc-mohsin.jpg";
import Khalid_Image from "../assets/images/khalid.jpg";
import Subrata_Image from "../assets/images/subrata.jpg";
import Kunzang_Image from "../assets/images/kunzang.jpg";
import Mansaf_Image from "../assets/images/mansaf.jpg";
import Jayanta_Image from "../assets/images/jayanta.jpg";
import Braj_Image from "../assets/images/braj.jpeg";
import Sushil_Image from "../assets/images/sushil.jpg";
import Shagufta_Image from "../assets/images/shagufta.jpg";
import Arman_Image from "../assets/images/arman.jpg";
import Mehdi_Image from "../assets/images/mehdi.jpg";
import Rizvi_Image from "../assets/images/rizvi.jpg";
import Sandhya_Image from "../assets/images/sandhya.jpg";
import RegistrationForm from "../assets/images/qr-code.png";

export const Home = () => {
  const registrationLink = "https://forms.gle/7qBjApdb59Phk4rL7";
  const committeeMembers = [
    {
      name: "Prof. Najma Khatoon",
      title: "Vice Chancellor, AMU",
      img: VC_Image,
    },
    {
      name: "Prof. Mohd Mohsin Khan",
      title: "Pro Vice-Chancellor, AMU",
      img: PVC_Image,
    },
    {
      name: "Prof. Mohd Khalid",
      title: "Dean, J.N. Medical College, AMU",
      img: Khalid_Image,
    },
    {
      name: "Prof. Syed Amjad Ali Rizvi",
      title: "Principal & CMS, J.N. Medical College, AMU",
      img: Rizvi_Image,
    },
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
    {
      name: "Prof. Shagufta Moin",
      title: "Organizing Chairperson IBRC, F/o Medicine, AMU, Aligarh",
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
                  SYMPOSIUM
                </div>
                <div className="mt-1 text-xs font-bold sm:text-sm text-blue-950 max-w-3xl mx-auto">
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
              <div className="mt-3 text-[13px] sm:text-sm font-bold">
                Organise
              </div>
              <div className="text-lg sm:text-xl font-extrabold tracking-wide text-red-500">
                SYMPOSIUM
              </div>
              <div className="mt-1 text-sm sm:text-base font-bold text-amber-950">
                ON
              </div>
              <div className="mt-1 text-sm sm:text-lg font-extrabold text-red-500 mx-auto">
                "COGNITIVE SCIENCE BRAIN TUMOURS AND ARTIFICIAL INTELLIGENCE
                (CSBTAI-2025)"
              </div>
              <div className="mt-2 text-xs sm:text-sm font-bold">
                In collaboration with Department of Computer Science, Aligarh
                Muslim University, Aligarh, U.P
              </div>
              <div className="mt-2 text-sm sm:text-base font-bold text-[#11158c]">
                20 December 2025
              </div>
              <div className="mt-1 text-xs sm:text-sm text-amber-950 font-bold">
                Venue: Auditorium J.N.M.C., AMU
              </div>
              <div className="mt-1 text-xs sm:text-sm text-amber-950 font-bold">
                Aligarh
              </div>
              {/* <div className="mt-1 text-xs sm:text-sm text-[#F89309]">
                      Start 10 AM
                    </div> */}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6">
          <div className="mb-6">
            <SectionPart title="Dear Colleagues">
              <p className="text-sm leading-6">
                It is our pleasure and privilege to invite you all to the
                Symposium. The Theme for this "Cognitive Science, Brain Tumours
                and Artificial Intelligence (CSBTAI‑2025)". It is very
                propitious for us that IBRC is India’s first Brain Research
                Center, established in 1976 by Padma Shri Late Prof. Mahdi
                Hasan, founder‑director of IBRC. AMU is one of the oldest
                citadels of higher education, known worldwide for academic
                excellence and character nurturing. We are fortunate to have the
                opportunity to play host to a symposium here at AMU. Aligarh on
                behalf of the organising committee and IAN Aligarh Chapter, we
                look forward to welcoming you all at CSBTAI‑2025.
              </p>
            </SectionPart>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-5">
              <SectionPart title="About SYMPOSIUM">
                <p className="text-sm leading-6">
                  Welcome to the National Symposium CSBTAI-2025, a premier
                  scientific assembly dedicated to exploring the profound
                  research opportunities at the intersection of cognitive
                  science, brain tumor research, and artificial intelligence.
                  This distinguished event gathers renowned clinician,
                  scientists, computational scientists, and academic pioneers to
                  delve into the foundational challenges and opportunities
                  within these disciplines. Our focus is squarely on the
                  rigorous, intellectual pursuit of knowledge: developing novel
                  theoretical frameworks for understanding neural computation,
                  pioneering advanced AI methodologies for complex data
                  interpretation, and modeling the intricate dynamics of brain
                  pathology. AI can revolutionize therapeutics for brain tumour
                  induced cognitive decline by integrating imaging, genomic, and
                  clinical data to predict decline early, personalize
                  treatments, and optimize drug targeting.
                </p>
              </SectionPart>

              <SectionPart title="About AMU">
                <p className="text-sm leading-6">
                  The Aligarh Muslim University (AMU) is a public central
                  university located in Aligarh, Uttar Pradesh. It was
                  established in 1920 and evolved out of the Mohammedan
                  Anglo-Oriental (MAO) which was set up in 1875 by the great
                  visionary and social reformer, Sir Syed Ahmad Khan. The AMU is
                  accredited by NAAC (National Assessment and Accreditation
                  Council) in 'A+' grade and occupies a unique position amongst
                  universities and institutions of higher learning in the
                  country. It is spread over 467.6 hectares in the city of
                  Aligarh, Uttar Pradesh and has three off-campus centers viz.
                  AMU Malappuram Campus (Kerala), AMU Murshidabad Centre (West
                  Bengal), and AMU Kishanganj Centre (Bihar). The AMU offers
                  more than 300 courses in the traditional and modern branches
                  of education. It draws students from all corners of the
                  country as well as foreign countries, especially Africa, West
                  Asia and Southeast Asia. In some courses, seats are reserved
                  for students from SAARC and Commonwealth Countries. The
                  University has 13 faculties viz. Agricultural Science, Arts,
                  Commerce, Engineering & Technology, Law, Life Sciences,
                  Medicine, Management Studies & Research, Science, Social
                  Sciences, Theology, Unani Medicine and International Studies
                  with each faculty composed of several Department of Studies.
                  The University also maintains a number of Colleges,
                  Institutes, Centres and Schools. Notably among them are
                  Women's College, Centre of Professional Courses,
                  Interdisciplinary Biotechnology Unit, Zakir Hussain College of
                  Engineering & Technology, Ajmal Khan Tibbiya College,
                  Jawaharlal Nehru Medical College, Dr. Ziauddin Ahmad Dental
                  College, Institute of Ophthalmology, Centre for Advanced
                  Studies in History, Centre for Women Studies, Centre for Nehru
                  Studies, University Polytechnic, University Women's
                  Polytechnic, K.A. Nizami Centre for Quranic Studies. The
                  University also runs 10 schools including one for the visually
                  challenged.
                </p>
              </SectionPart>

              {/* <SectionPart title="About IBRC">
                      <p className="text-sm leading-6">
                        Interdisciplinary Brain Research Centre (IBRC) established
                        in 1976 by Padma Shri Late Prof. Mahdi Hasan and later
                        approved by Academic Council and Executive Council in 1978
                        and 1982 respectively. IBRC is the India’s first brain
                        research centre committed to basic and applied research in
                        molecular neurosciences. The vision of IBRC is to achieve
                        the leading position in neuroscience by interdisciplinary
                        research, education and innovation to translate basic
                        neuroscience research into clinical application for the
                        betterment of patients, society and the Nation.
                      </p>
                    </SectionPart> */}

              <SectionPart title="About IAN Aligarh Chapter">
                <p className="text-sm leading-6">
                  The Indian Academy of Neuroscience (IAN) came to existence in
                  1982 with the tireless effort of Late Prof. K.P. Bhargava,
                  Padam Shri Late Prof. Mahdi Hasan, Prof. S.S. Parmar, Prof.
                  B.N. Dhawan, Prof. P.K. Seth and renowned neuroscientists. IAN
                  Aligarh local chapter proposal was initiated at the 32nd IAN
                  Annual meeting at Bengaluru in 2014. Thereafter, this was
                  further approved by IAN Executive Council and finally
                  announced in the general body meeting of the 33rd annual
                  meeting of IAN at Panjab University in 2015. Since its
                  inception, the IAN has actively promoted neuroscience
                  education and research through seminars, workshops, and
                  collaborative initiatives. It continues to serve as a vibrant
                  platform for scientists and students to exchange ideas and
                  foster innovation in the field of neuroscience. The chapter
                  remains committed to advancing public awareness about brain
                  health and neurological disorders through various outreach and
                  educational programs.
                </p>
              </SectionPart>

              <SectionPart>
                <h3 className="text-center font-bold underline">
                  Chief Patron
                </h3>
                <div className="text-center my-5">
                  <div className="w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                    <img
                      src={committeeMembers[0].img}
                      alt={committeeMembers[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold text-sm">
                    {committeeMembers[0].name}
                  </p>
                  <p className="text-xs text-gray-600">
                    {committeeMembers[0].title}
                  </p>
                </div>

                <h3 className="text-center font-bold underline">Patron</h3>
                <div className="grid grid-cols-3 gap-3 my-6 text-xs">
                  {[1, 2, 3].map((idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-1 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                        <img
                          src={committeeMembers[idx].img}
                          alt={committeeMembers[idx].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-semibold text-[10px] leading-tight">
                        {committeeMembers[idx].name}
                      </p>
                      <p className="text-[9px] text-gray-600 leading-tight">
                        {committeeMembers[idx].title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* <h2 className="text-center font-bold uppercase mt-8">
                        Conference Speakers
                      </h2>
                      <h3 className="text-center font-bold uppercase text-red-500 my-6">
                        Guest of Honour
                      </h3>
    
                      <div className="grid grid-cols-2 gap-3 text-xs mt-9">
                        {[4, 5].map((idx) => (
                          <div key={idx} className="text-center">
                            <div className="w-16 h-16 mx-auto mb-1 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                              <img
                                src={committeeMembers[idx].img}
                                alt={committeeMembers[idx].name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="font-semibold text-[10px] leading-tight">
                              {committeeMembers[idx].name}
                            </p>
                            <p className="text-[9px] text-gray-600 leading-tight">
                              {committeeMembers[idx].title}
                            </p>
                          </div>
                        ))}
                      </div>
    
                      <div className="grid grid-cols-3 gap-3 text-xs my-10">
                        {[6, 7, 8].map((idx) => (
                          <div key={idx} className="text-center">
                            <div className="w-16 h-16 mx-auto mb-1 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                              <img
                                src={committeeMembers[idx].img}
                                alt={committeeMembers[idx].name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="font-semibold text-[10px] leading-tight">
                              {committeeMembers[idx].name}
                            </p>
                            <p className="text-[9px] text-gray-600 leading-tight">
                              {committeeMembers[idx].title}
                            </p>
                          </div>
                        ))}
                      </div>
    
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        {[9, 10].map((idx) => (
                          <div key={idx} className="text-center">
                            <div className="w-16 h-16 mx-auto mb-1 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                              <img
                                src={committeeMembers[idx].img}
                                alt={committeeMembers[idx].name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="font-semibold text-[10px] leading-tight">
                              {committeeMembers[idx].name}
                            </p>
                            <p className="text-[9px] text-gray-600 leading-tight">
                              {committeeMembers[idx].title}
                            </p>
                          </div>
                        ))}
                      </div> */}

                <h2 className="text-center font-bold uppercase my-7">
                  Organizing Committee
                </h2>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  {[11, 12, 13].map((idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-1 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                        <img
                          src={committeeMembers[idx].img}
                          alt={committeeMembers[idx].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-semibold text-[10px] leading-tight">
                        {committeeMembers[idx].name}
                      </p>
                      <p className="text-[9px] text-gray-600 leading-tight">
                        {committeeMembers[idx].title}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionPart>
            </div>

            <div className="space-y-5">
              <SectionPart title="About IBRC">
                <p className="text-sm leading-6">
                  Interdisciplinary Brain Research Centre (IBRC) established in
                  1976 by Padma Shri Late Prof. Mahdi Hasan and later approved
                  by Academic Council and Executive Council in 1978 and 1982
                  respectively. IBRC is the India’s first brain research centre
                  committed to basic and applied research in molecular
                  neurosciences. The vision of IBRC is to achieve the leading
                  position in neuroscience by interdisciplinary research,
                  education and innovation to translate basic neuroscience
                  research into clinical application for the betterment of
                  patients, society and the Nation.
                </p>
              </SectionPart>

              {/* <SectionPart title="About IAN Aligarh Chapter">
                      <p className="text-sm leading-6">
                        The Indian Academy of Neuroscience (IAN) came to existence
                        in 1982 with the tireless effort of Late Prof. K.P.
                        Bhargava, Padam Shri Late Prof. Mahdi Hasan, Prof. S.S.
                        Parmar, Prof. B.N. Dhawan, Prof. P.K. Seth and renowned
                        neuroscientists. IAN Aligarh local chapter proposal was
                        initiated at the 32nd IAN Annual meeting at Bengaluru in
                        2014. Thereafter, this was further approved by IAN Executive
                        Council and finally announced in the general body meeting of
                        the 33rd annual meeting of IAN at Panjab University in 2015.
                      </p>
                    </SectionPart> */}

              <SectionPart title="CALL FOR ABSTRACT">
                <ul className="list-disc pl-5 text-sm leading-6 space-y-1">
                  <li>Registration is compulsory for abstract submission.</li>
                  {/* <li>
                          Please complete the registration form with abstract and{" "}
                          <span className="font-semibold">
                            submit the soft copy by
                          </span>
                          <br />
                          <span className="font-semibold">
                            email: worldneurocongress17@gmail.com
                          </span>
                        </li> */}
                  <li>
                    All participants are encouraged to submit an abstract for
                    oral/poster presentation.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Format for abstract submission:
                    </span>
                    <br />
                    Title of the abstract
                    <br />
                    Author(s) name in full
                    <br />
                    Corresponding Author: Full name, address, and email
                    <br />
                    Word Limit: Maximum 300 words with 5 keywords
                    <br />
                    Acknowledge funding agency and specify conflict of interest
                    (if any). Single line spacing, Times New Roman Font, 12
                    Size, Word format (.docx)
                  </li>
                  <li className="font-semibold">
                    Note: Abstracts will be considered after payment of
                    symposium registration fees.
                  </li>
                </ul>

                <div className="mt-2 text-sm font-semibold text-red-500 underline">
                  Last date for abstract submission: 5 December, 2025
                </div>
              </SectionPart>

              <div className="grid grid-cols-2 gap-4">
                <SectionPart title="SCIENTIFIC PROGRAMME">
                  <ul className="list-disc pl-5 text-sm leading-6 space-y-1">
                    <li>Plenary Lectures</li>
                    <li>Invited Lectures</li>
                    <li>Oral Presentations</li>
                    <li>Poster Presentations</li>
                  </ul>
                </SectionPart>

                <SectionPart title="AWARDS">
                  <ul className="list-disc pl-5 text-sm leading-6 space-y-1">
                    <li>Best Two Oral Presentation Award</li>
                    <li>Best Two Poster Presentation Award</li>
                    <li>Best Moment Capture Award</li>
                  </ul>
                </SectionPart>
              </div>

              <SectionPart title="TENTATIVE TOPICS FOR ORAL AND POSTER PRESENTATION">
                <ul className="list-disc pl-5 text-sm leading-6 space-y-1">
                  <li>Cognitive and Behavioral Neurosciences</li>
                  <li>Sleep, Aging, and Brain Function</li>
                  <li>Brain Tumour Biology and Therapeutic Advances</li>
                  <li>
                    Artificial Intelligence and Machine Learning in
                    Neurosciences
                  </li>
                  <li>Cell Signaling Mechanisms in Neurological Disorders</li>
                  <li>
                    Neurodegenerative Diseases: Mechanisms and Interventions
                  </li>
                  <li>Molecular and Translational Neurobiology</li>
                  <li>Neuropharmacology and Targeted Therapeutics</li>
                  <li>Medical Technology and Computational Neuroscience</li>
                  <li>
                    Integrative and Unani Approaches to Neurological Health
                  </li>
                </ul>
              </SectionPart>

              <SectionPart title="Contact & Registration Link">
                <p className="text-sm">
                  <strong className="text-red-500">
                    Dr. Mehdi Hayat Shahi
                  </strong>
                  <br />
                  Organizing Secretary, CSBTAI-2025
                  <br />
                  Interdisciplinary Brain Research Center, J.N. Medical College
                  <br />
                  Faculty of Medicine, Aligarh Muslim University, Aligarh, India
                  <br />
                  <strong>Email: csbtai2025@gmail.com</strong> or
                  mehdihayat@gmail.com <br />
                  Contact No.- +91-7895952787, +91-8439186478
                </p>

                <p className="text-sm my-1.5">
                  <strong>
                    Any query, Contact for Payment of Registration:
                  </strong>
                  <br />
                  Dr. Sufiya Naseem (Treasurer CBSRAI, 2025)
                  <br />
                  Department of Biochemistry, JNMC, AMU Contact No.-
                  +91-9897192776
                </p>

                <p className="text-sm">
                  <strong>
                    Further, any query regarding registration or payment:
                  </strong>
                  <br />
                  Intezar Ali: +91-9557415212, Mohd Muzzammil: +91-7417236291,
                  Shahid Afridi: +91-9808997957
                </p>

                <div className="mt-4 flex flex-col items-center">
                  <p className="text-xs font-semibold text-teal-700 mb-2">
                    Scan to Register
                  </p>
                  <img
                    src={RegistrationForm}
                    alt="Registration QR Code"
                    className="w-32 h-32 md:w-36 md:h-36 border border-gray-300 rounded-lg"
                  />
                  <p className="text-[10px] text-gray-600 mt-1 text-center max-w-[160px]">
                    Scan with phone to register online
                  </p>
                </div>
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <p className="text-xs font-semibold text-teal-700 my-2.5 text-center hover:underline">
                    Link: https://forms.gle/7qBjApdb59Phk4rL7
                  </p>
                </a>
              </SectionPart>
            </div>
          </div>
        </div>
        <FooterComponent />
      </article>
    </section>
  );
};
