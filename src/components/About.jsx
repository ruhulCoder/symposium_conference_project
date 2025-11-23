import { SectionPart } from "./Common";
import { FooterComponent } from "./FooterComponent";

import AmuBanner from "../assets/images/amu-banner.jpeg";

export const About = () => {
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

        {/* About Content */}
        <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-8">
              About
            </h1>
            {/* SYMPOSIUM Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <SectionPart title="SYMPOSIUM">
                <p className="text-base leading-7 text-gray-700">
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
            </div>

            {/* AMU Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <SectionPart title="ALIGARH MUSLIM UNIVERSITY (AMU)">
                <p className="text-base leading-7 text-gray-700">
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
            </div>

            {/* IBRC Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <SectionPart title="INTERDISCIPLINARY BRAIN RESEARCH CENTER (IBRC)">
                <p className="text-base leading-7 text-gray-700">
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
            </div>

            {/* IAN Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <SectionPart title="INDIAN ACADEMY OF NEUROSCIENCE (IAN) ALIGARH CHAPTER">
                <p className="text-base leading-7 text-gray-700">
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
            </div>
          </div>
        </div>
        <FooterComponent />
      </article>
    </section>
  );
};
