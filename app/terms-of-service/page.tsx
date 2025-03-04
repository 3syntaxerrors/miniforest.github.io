import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-medium text-green-700 dark:text-green-400 hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Support
      </Link>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-300">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-6">Last updated: March 04, 2025</p>

        <div className="prose dark:prose-invert max-w-none">
          <p>Please read these terms of service carefully before using Mini Forest mobile application.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">Interpretation and Definitions</h2>
          <h3 className="text-lg font-bold mt-6 mb-2">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions.
            The following definitions shall have the same meaning regardless of whether they appear in singular or in
            plural.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">Definitions</h3>
          <p>For the purposes of these Terms of Service:</p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>Application</strong> means the software program provided by the Company named Mini Forest.
            </li>
            <li>
              <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement)
              refers to Mini Forest.
            </li>
            <li>
              <strong>Country</strong> refers to: Turkey
            </li>
            <li>
              <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a
              digital tablet.
            </li>
            <li>
              <strong>Service</strong> refers to the Application.
            </li>
            <li>
              <strong>Terms of Service</strong> (also referred as "Terms") mean these Terms of Service that form the
              entire agreement between You and the Company regarding the use of the Service.
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal
              entity on behalf of which such individual is accessing or using the Service, as applicable.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">Acknowledgment</h2>
          <p>
            These are the Terms of Service governing the use of this Service and the agreement that operates between You
            and the Company. These Terms of Service set out the rights and obligations of all users regarding the use of
            the Service.
          </p>

          <p>
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms
            of Service. These Terms of Service apply to all visitors, users and others who access or use the Service.
          </p>

          <p>
            By accessing or using the Service You agree to be bound by these Terms of Service. If You disagree with any
            part of these Terms of Service then You may not access the Service.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Content</h2>
          <p>
            Our Service allows You to post, link, store, share and otherwise make available certain information, text,
            graphics, videos, or other material. You are responsible for the content that You post to the Service,
            including its legality, reliability, and appropriateness.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Prohibited Uses</h2>
          <p>
            You may use the Service only for lawful purposes and in accordance with Terms. You agree not to use the
            Service:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>
              To transmit, or procure the sending of, any advertising or promotional material, including any "junk
              mail", "chain letter," "spam," or any other similar solicitation.
            </li>
            <li>
              To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or
              entity.
            </li>
            <li>
              In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or
              harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">Termination</h2>
          <p>
            We may terminate or suspend Your access immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if You breach these Terms of Service.
          </p>

          <p>Upon termination, Your right to use the Service will cease immediately.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable
            for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to,
            damages for loss of profits, loss of data or other information, for business interruption, for personal
            injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service,
            third-party software and/or third-party hardware used with the Service, or otherwise in connection with any
            provision of this Terms), even if the Company or any supplier has been advised of the possibility of such
            damages and even if the remedy fails of its essential purpose.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Changes to These Terms of Service</h2>
          <p>
            We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is
            material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at Our sole discretion.
          </p>

          <p>
            By continuing to access or use Our Service after those revisions become effective, You agree to be bound by
            the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website
            and the Service.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about these Terms of Service, You can contact us:</p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              By email:{" "}
              <a href="mailto:kaprofis@gmail.com" className="text-primary hover:underline">
                kaprofis@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

