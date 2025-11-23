import { SectionPart } from "./Common";
import { FooterComponent } from "./FooterComponent";

import AmuBanner from "../assets/images/amu-banner.jpeg";

export const Abstract = () => {
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

        {/* Abstract Content */}
        <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-8">
              Abstract
            </h1>

            {/* Call for Abstract */}
            <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300">
              <SectionPart title="CALL FOR ABSTRACT">
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <ul className="list-disc pl-6 text-sm leading-6 space-y-2 text-gray-700">
                    <li>Registration is mandatory for all participants as well as for individuals submitting abstracts.</li>
                    <li>Please complete the registration form and submit the registration fee</li>
                    <li>
                      All participants are encouraged to submit an abstract for
                      oral/poster presentation.
                    </li>
                    <li>
                      <span className="font-semibold text-blue-800">
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
                    <li className="font-semibold text-red-600">
                      Note: Abstracts will be considered after complete payment of
                      symposium registration fee.
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold text-sm">
                    Last date for abstract submission: 10 December, 2025
                  </div>
                </div>
              </SectionPart>
            </div>

            {/* Scientific Programme & Awards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300">
                <SectionPart title="SCIENTIFIC PROGRAMME">
                  <ul className="list-disc pl-6 text-sm leading-6 space-y-2 text-gray-700">
                    <li>Plenary Lectures</li>
                    <li>Invited Lectures</li>
                    <li>Oral Presentations</li>
                    <li>Poster Presentations</li>
                  </ul>
                </SectionPart>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300">
                <SectionPart title="AWARDS">
                  <ul className="list-disc pl-6 text-sm leading-6 space-y-2 text-gray-700">
                    <li>Best Oral Presentation Award (3)</li>
                    <li>Best Poster Presentation Award (18)</li>
                    <li>Best Moment Capture Award (2)</li>
                    <span>UG/PG/Ph.D. category</span>
                  </ul>
                </SectionPart>
              </div>
            </div>

            {/* Tentative Topics */}
            <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300">
              <SectionPart title="TENTATIVE TOPICS FOR ORAL AND POSTER PRESENTATION">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 text-sm leading-6 space-y-2 text-gray-700">
                    <li>Cognitive and Behavioral Neurosciences</li>
                    <li>Sleep, Aging, and Brain Function</li>
                    <li>Brain Tumour Biology and Therapeutic Advances</li>
                    <li>
                      Artificial Intelligence and Machine Learning in
                      Neurosciences
                    </li>
                    <li>Cell Signaling Mechanisms in Neurological Disorders</li>
                  </ul>
                  <ul className="list-disc pl-6 text-sm leading-6 space-y-2 text-gray-700">
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
