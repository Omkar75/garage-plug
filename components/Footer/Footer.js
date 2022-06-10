import React from 'react';
import localstyles from './Footer.module.css';
import Link from 'next/link'

function Footer() {
  return (
    <div className={localstyles.footer_container}>
      <section className={localstyles.footer_subscription}>
        <p className={localstyles.footer_subscription_heading}>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className={localstyles.footer_subscription_text}>
          You can unsubscribe at any time.
        </p>
        <div className={localstyles.input_areas}>
          <form>
            <input
              className={localstyles.footer_input}
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button>Subscribe</button>
          </form>
        </div>
      </section>
      <div class={localstyles.footer_links}>
        <div className={localstyles.footer_link_wrapper}>
          <div className={localstyles.footer_link_items}>
            <h2>About Us</h2>
            <Link href=''>How it works</Link>
            <Link href=''>Testimonials</Link>
            <Link href=''>Careers</Link>
            <Link href=''>Investors</Link>
            <Link href=''>Terms of Service</Link>
          </div>
          <div className={localstyles.footer_link_items}>
            <h2>Contact Us</h2>
            <Link href=''>Contact</Link>
            <Link href=''>Support</Link>
            <Link href=''>Destinations</Link>
            <Link href=''>Sponsorships</Link>
          </div>
        </div>
        <div className={localstyles.footer_link_wrapper}>
          <div className={localstyles.footer_link_items}>
            <h2>Videos</h2>
            <Link href=''>Submit Video</Link>
            <Link href=''>Ambassadors</Link>
            <Link href=''>Agency</Link>
            <Link href=''>Influencer</Link>
          </div>
          <div className={localstyles.footer_link_items}>
            <h2>Social Media</h2>
            <Link href=''>Instagram</Link>
            <Link href=''>Facebook</Link>
            <Link href=''>Youtube</Link>
            <Link href=''>Twitter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
