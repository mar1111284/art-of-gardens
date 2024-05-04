import React from 'react';

const PrivacyAndSupport = () => {
  return (
    <div className='privacy-support-container'>

      <div className='privacy-policy'>

        <h2>Privacy Policy</h2>
        <p>
          At <span className='medium-green-text'>Art of Gardens</span>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website.
        </p>
        <h3>Information We Collect</h3>
        <p>
          When you visit our website, we may collect certain information about your visit, such as your IP address, browser type, device information, and the pages you access. We use this information to analyze trends, administer the site, track user movements, and gather demographic information for aggregate use.
        </p>
        <h3>Use of Cookies</h3>
        <p>
          Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your computer's hard drive that help us improve our site's usability and performance. You can choose to accept or decline cookies through your browser settings.
        </p>
        <h3>Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites for your convenience. Please note that we are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy or the practices of this website, please contact us at [Your Contact Email].
        </p>
      </div>

      <div className='support'>
        <h2>Support</h2>
        
        <div className='contact-info'>
          <h3>Contact Information</h3>
          <p>
            For customer support, inquiries, or feedback, please contact us at:
            <br />
            Email: [Your Contact Email]
            <br />
            Phone: [Your Phone Number]
          </p>
        </div>
        <div className='faq-section'>
          <h3>FAQs</h3>
          <p>Have questions? Check out our Frequently Asked Questions (FAQs) section for answers to common queries.</p>
        </div>
        <div className='troubleshooting-section'>
          <h3>Troubleshooting Tips</h3>
          <p>Encountering issues? Visit our Troubleshooting Tips section for assistance with common problems.</p>
        </div>
        <div className='feedback-section'>
          <h3>Feedback</h3>
          <p>
            We value your feedback! Let us know how we can improve our website or services by contacting us at [Your Contact Email].
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyAndSupport;
