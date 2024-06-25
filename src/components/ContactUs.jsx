import React from "react";
import Header from "./HeaderH";
import "./ContactUs.css";
import Image from "next/image";
// Footer part
import map from "@/assets/map.svg";
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24px"
    height="24px"
  >
    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.97 3.65 9.09 8.44 9.85v-6.98h-2.54v-2.87h2.54v-2.18c0-2.5 1.5-3.88 3.76-3.88 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.77-1.63 1.56v1.82h2.78l-.44 2.87h-2.34v6.98c4.79-.76 8.44-4.88 8.44-9.85 0-5.5-4.46-9.96-9.96-9.96z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24px"
    height="24px"
  >
    <path d="M12 2.16c3.24 0 3.64 0 4.91.07 1.2.06 1.88.25 2.33.42.56.22.96.48 1.39.91.43.43.69.83.91 1.39.17.45.36 1.13.42 2.33.07 1.27.07 1.67.07 4.91s0 3.64-.07 4.91c-.06 1.2-.25 1.88-.42 2.33-.22.56-.48.96-.91 1.39-.43.43-.83.69-1.39.91-.45.17-1.13.36-2.33.42-1.27.07-1.67.07-4.91.07s-3.64 0-4.91-.07c-1.2-.06-1.88-.25-2.33-.42-.56-.22-.96-.48-1.39-.91-.43-.43-.69-.83-.91-1.39-.17-.45-.36-1.13-.42-2.33-.07-1.27-.07-1.67-.07-4.91s0-3.64.07-4.91c.06-1.2.25-1.88.42-2.33.22-.56.48-.96.91-1.39.43-.43.83-.69 1.39-.91.45-.17 1.13-.36 2.33-.42 1.27-.07 1.67-.07 4.91-.07m0-2.16c-3.33 0-3.74 0-5.03.07-1.35.06-2.27.27-3.08.58-.85.32-1.56.76-2.27 1.47-.71.71-1.15 1.42-1.47 2.27-.31.81-.52 1.73-.58 3.08-.07 1.29-.07 1.7-.07 5.03s0 3.74.07 5.03c.06 1.35.27 2.27.58 3.08.32.85.76 1.56 1.47 2.27.71.71 1.42 1.15 2.27 1.47.81.31 1.73.52 3.08.58 1.29.07 1.7.07 5.03.07s3.74 0 5.03-.07c1.35-.06 2.27-.27 3.08-.58.85-.32 1.56-.76 2.27-1.47.71-.71 1.15-1.42 1.47-2.27.31-.81.52-1.73.58-3.08.07-1.29.07-1.7.07-5.03s0-3.74-.07-5.03c-.06-1.35-.27-2.27-.58-3.08-.32-.85-.76-1.56-1.47-2.27-.71-.71-1.42-1.15-2.27-1.47-.81-.31-1.73-.52-3.08-.58-1.29-.07-1.7-.07-5.03-.07z" />
    <path d="M12 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16-2.76-6.16-6.16-6.16zm0 10.16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.4-11.2c-.8 0-1.44-.64-1.44-1.44s.64-1.44 1.44-1.44 1.44.64 1.44 1.44-.64 1.44-1.44 1.44z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24px"
    height="24px"
  >
    <path d="M24 4.557a9.94 9.94 0 0 1-2.828.775 4.938 4.938 0 0 0 2.165-2.723 9.873 9.873 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.384 4.49A13.978 13.978 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.869 3.215 2.188 4.096a4.904 4.904 0 0 1-2.231-.616v.061c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419 9.874 9.874 0 0 1-6.115 2.106c-.398 0-.79-.023-1.175-.068a13.952 13.952 0 0 0 7.548 2.209c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24px"
    height="24px"
  >
    <path d="M19.615 3.184c-2.615-.253-8.615-.253-8.615-.253s-6 .001-8.615.253c-2.841.273-4.385 1.85-4.385 4.615v8.402c0 2.77 1.544 4.347 4.385 4.615 2.615.253 8.615.253 8.615.253s6-.001 8.615-.253c2.841-.273 4.385-1.85 4.385-4.615v-8.402c0-2.77-1.544-4.347-4.385-4.615zm-11.615 12.615v-8l8 4-8 4z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24px"
    height="24px"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.25 19h-2.5v-10h2.5v10zm-1.25-11.289c-.82 0-1.48-.671-1.48-1.498 0-.827.66-1.497 1.48-1.497s1.48.67 1.48 1.497c0 .827-.66 1.498-1.48 1.498zm11.25 11.289h-2.5v-5.385c0-1.284-.025-2.938-1.793-2.938-1.794 0-2.067 1.402-2.067 2.849v5.474h-2.5v-10h2.403v1.363h.034c.334-.635 1.151-1.3 2.371-1.3 2.537 0 3.007 1.67 3.007 3.839v6.098z" />
  </svg>
);

const ContactUs = () => (
  <>
    <div>
      <Header />
    </div>
    <div className="contact-us-container">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.0162998601013!2d88.52741197611606!3d25.404264977578176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb46efacc7b85d%3A0x2542e67f2c38c538!2sSANDHYA%20NURSING%20HOME%20%26%20DIAGNOSTIC%20CENTRE!5e0!3m2!1sen!2sin!4v1718801340263!5m2!1sen!2sin"
          title="Google Maps Location"
          className="map-iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-info">
        <div className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-method">
            <div className="contact-method-item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="none"
                >
                  <path
                    d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 7H12.8571C13.2612 7 13.4632 7 13.5888 7.12204C13.7143 7.24408 13.7143 7.4405 13.7143 7.83333C13.7143 8.61901 13.7143 9.01184 13.4632 9.25592C13.2723 9.44155 12.9929 9.486 12.5145 9.49665C12.2692 9.50211 12.1465 9.50484 12.0732 9.5777C12 9.65056 12 9.76704 12 10V11.1667C12 11.5595 12 11.7559 12.1255 11.878C12.2511 12 12.4531 12 12.8571 12H13.7143M18 7V9.5M18 9.5H16.5429C16.2196 9.5 16.058 9.5 15.9576 9.40237C15.8571 9.30474 15.8571 9.1476 15.8571 8.83333V7M18 9.5V12"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 4.30518C10.089 4.20518 10.1815 4.10717 10.2774 4.01129C12.9591 1.32957 17.307 1.32957 19.9887 4.01129C22.6704 6.693 22.6704 11.0409 19.9887 13.7226C19.8928 13.8185 19.7948 13.911 19.6948 14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <span>Give us a call</span>
              <a href="tel:1234567899">1234567899</a>
            </div>
            <div className="contact-method-item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="none"
                >
                  <path
                    d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>Send us an email</span>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </div>
            <div className="contact-method-item">
              <div className="icon">
                <Image src={map} alt="Location Icon" width={48} height={48} />
              </div>
              <span>Come see us</span>
              <a
                href="https://maps.app.goo.gl/ZVLMudtQPmuyc9oTA"
                target="_blank"
                rel="noopener noreferrer"
              >
                SANDHYA NURSING HOME & DIAGNOSTIC CENTRE <br />
                Subhas Pally,Gangarampur,West Bengal
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="form-section">
        <h2>Drop us a line</h2>
        <p>
          If you&apos;ve got questions, we would love to answer them. Or perhaps
          some suggestions on great flavor ideas? We would love to hear them!
        </p>
        <Image
          width={800}
          height={800}
          src="/CMI.png"
          alt="Image Description"
          className="form-image "
        />
        <div className="form-content">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject*</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div className="footerC">
      <p>
        © Copyright 2024. Sandhya Nursing Home & Diagnostic Centre. All Rights
        Reserved.
      </p>
      <div className="social-media">
        <a href="https://www.facebook.com/p/Sandhya-Nursing-Home-Diagnostic-Center-100065299329176/">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon />
        </a>
        <a href="https://www.twitter.com">
          <TwitterIcon />
        </a>
        <a href="https://www.youtube.com">
          <YouTubeIcon />
        </a>
        <a href="https://www.linkedin.com">
          <LinkedInIcon />
        </a>
      </div>
      <div className="policy-linksC">
        <a href="privacy-policy.html">Privacy policy </a>
        <p>&#10072;</p>
        <a href="disclaimer.html">Disclaimer</a>
      </div>
    </div>
  </>
);

export default ContactUs;
