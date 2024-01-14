import { memo } from 'react';
import SectionHeader from '../shared/SectionHeader/SectionHeader';
import './style.scss';

function Contact() {
  return (
    <>
      <SectionHeader title="Contact Me" />
      <div className="contact">
        <div className="contact__form">
          <div className="contact__message">Get in Touch with me</div>
          <div className="contact__form-fields">
            <input type="text" placeholder="Name" className="contact__form--input" />
            <input type="text" placeholder="Email" className="contact__form--input" />
            <textarea placeholder="Message" className="contact__form--input" />
            <button type="submit" className="contact__send">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Contact);
