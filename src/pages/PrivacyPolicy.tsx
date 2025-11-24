const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto py-12 px-4">
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              At Polymer Bazaar, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <p className="text-muted-foreground">
              This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-maroon mb-3">Information We Collect</h3>
            <p className="text-muted-foreground mb-3">
              <strong>Personal Information:</strong> When you register on our website, subscribe to our newsletter, or fill out a form, we may collect personal information such as your name, email address, phone number, and company details.
            </p>
            <p className="text-muted-foreground">
              <strong>Non-Personal Information:</strong> We may also collect non-personal information such as your browser type, operating system, IP address, and browsing behavior on our website through cookies and similar technologies.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-maroon mb-3">How We Use Your Information</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To personalize your experience on our website and deliver content tailored to your interests.</li>
              <li>To improve our website based on your feedback and usage patterns.</li>
              <li>To process transactions and provide you with information about your account.</li>
              <li>To send periodic emails regarding updates, promotions, and other information related to our services. You can opt-out of receiving these emails at any time.</li>
              <li>To comply with legal obligations and protect our rights and the rights of others.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-maroon mb-3">How We Protect Your Information</h3>
            <p className="text-muted-foreground">
              We implement a variety of security measures to maintain the safety of your personal information. This includes using secure servers, encrypting sensitive data, and regularly updating our security practices to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-maroon mb-3">Sharing Your Information</h3>
            <p className="text-muted-foreground mb-3">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>With trusted third parties who assist us in operating our website, conducting our business, or providing services to you, provided that these parties agree to keep your information confidential.</li>
              <li>When we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</li>
              <li>In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the new owner.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-maroon mb-3">Cookies and Tracking Technologies</h3>
            <p className="text-muted-foreground mb-3">
              Our website uses cookies and similar technologies to enhance your experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
            </p>
            <p className="text-muted-foreground">
              You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. If you disable cookies, some features of our website may not function properly.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-maroon mb-3">Third-Party Links</h3>
            <p className="text-muted-foreground">
              Our website may contain links to third-party sites. These sites have their own separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites. Nevertheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-maroon mb-3">Your Rights</h3>
            <p className="text-muted-foreground">
              You have the right to access, update, and delete your personal information. You can do this by logging into your account or contacting us directly. Additionally, you have the right to object to the processing of your data and to withdraw your consent at any time.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-maroon mb-3">Changes to Our Privacy Policy</h3>
            <p className="text-muted-foreground mb-3">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-maroon mb-3">Contact Us</h3>
            <p className="text-muted-foreground mb-2">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="space-y-1 text-muted-foreground">
              <p><strong>POLYMER BAZAAR</strong></p>
              <p>M/S SAMYAK ENTERPRISE, Partner-Parita, Ahmedabad – 380001</p>
              <p>Email: <a href="mailto:info@polymerbazaar.com" className="text-maroon hover:underline">info@polymerbazaar.com</a></p>
              <p>Phone: +91 93746 24365</p>
            </div>
            <p className="text-muted-foreground mt-4">
              By using our website, you consent to our Privacy Policy.
            </p>
            <p className="text-muted-foreground">
              Thank you for visiting Polymer Bazaar!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
