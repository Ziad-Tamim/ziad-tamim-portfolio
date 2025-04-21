import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Privacy Policy | Ziad Tamim',
  description: 'Privacy Policy for Ziad Tamim\'s personal website and newsletter.'
}

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-30 pb-16">
      <div className="container max-w-3xl">
        <h1 className="title mb-8">Privacy Policy</h1>
        
        <div className="mb-10">
          <p className="mb-4 text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <p className="mt-1 text-muted-foreground">
            This Privacy Policy explains how I collect, use, and protect your personal information when you visit my website or interact with my services.
            I respect your privacy and am committed to protecting your personal data.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">Information I Collect</h2>
          <p className="mt-1 text-muted-foreground">When you visit my website, I may collect the following information:</p>
          <ul className="mt-3 space-y-2 ml-6 list-disc text-muted-foreground">
            <li><span className="font-semibold text-foreground">Contact Information:</span> When you fill out the contact form, I collect your name and email address.</li>
            <li><span className="font-semibold text-foreground">Newsletter Subscriptions:</span> When you subscribe to my newsletter, I collect your email address.</li>
            <li><span className="font-semibold text-foreground">Usage Data:</span> Information about how you interact with my website, including pages visited and time spent.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">How I Use Your Information</h2>
          <p className="mt-1 text-muted-foreground">I use the information I collect for the following purposes:</p>
          <ul className="mt-3 space-y-2 ml-6 list-disc text-muted-foreground">
            <li>To respond to your inquiries and messages</li>
            <li>To send you my newsletter if you have subscribed</li>
            <li>To improve my website and services</li>
            <li>To analyze how visitors use my website</li>
            <li>To maintain the security of my website</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">Email Communications</h2>
          <p className="mt-1 text-muted-foreground">
            If you subscribe to my newsletter, I will send you periodic emails about my work, projects, and relevant updates.
            You can unsubscribe at any time by clicking the unsubscribe link at the bottom of any email or by contacting me directly.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">Data Storage and Security</h2>
          <p className="mt-1 text-muted-foreground">
            I use Resend.com for email and newsletter services. Your contact information is stored securely on their servers.
            For more information about how they handle data, please refer to <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Resend's Privacy Policy</a>.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">Cookies and Tracking Technologies</h2>
          <p className="mt-1 text-muted-foreground">
            My website uses cookies to enhance your browsing experience. These are small text files stored on your device 
            that help improve site functionality and provide analytics. You can control cookie settings through your browser preferences.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">Third-Party Services</h2>
          <p className="mt-1 text-muted-foreground">
            My website may use third-party services such as analytics providers and hosting services.
            These services may collect information about your visit to my website, and they have their own privacy policies.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">Your Rights</h2>
          <p className="mt-1 text-muted-foreground">You have the right to:</p>
          <ul className="mt-3 space-y-2 ml-6 list-disc text-muted-foreground">
            <li>Access the personal data I hold about you</li>
            <li>Request correction of your personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">Children's Privacy</h2>
          <p className="mt-1 text-muted-foreground">
            My website is not intended for children under 16 years of age, and I do not knowingly collect personal information from children.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">Changes to This Privacy Policy</h2>
          <p className="mt-1 text-muted-foreground">
            I may update this privacy policy from time to time. Any changes will be posted on this page, and if significant changes are made, I will notify you via email if you're a newsletter subscriber.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-10">Contact Me</h2>
          <p className="mt-1 text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact me at: <a href="mailto:info@ziadtamim.com" className="text-primary hover:underline">info@ziadtamim.com</a>
          </p>
        </div>
      </div>
    </section>
  )
} 