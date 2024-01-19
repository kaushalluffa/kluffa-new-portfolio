/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeader from '../shared/SectionHeader/SectionHeader';
import './style.scss';
import AnimatedPage from '../../AnimatedPage';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { message, user_email: email, user_name: name },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          if (result.status === 200 && result.text === 'OK') {
            setEmail('');
            setMessage('');
            setName('');
          }
        },
        (error) => {
          console.log(error);
          setEmail('');
          setMessage('');
          setName('');
        },
      );
  };
  return (
    <AnimatedPage>
      <SectionHeader title="Contact Me" />
      <div className="contact">
        <div className="contact__form">
          <div className="contact__message">Get in Touch with me</div>
          <div className="contact__form-fields">
            <input
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
              }}
              type="text"
              placeholder="Name"
              className="contact__form--input"
            />
            <input
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
              type="text"
              placeholder="Email"
              className="contact__form--input"
            />
            <textarea
              value={message}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setMessage(event.target.value);
              }}
              placeholder="Message"
              className="contact__form--input"
            />
            <button type="submit" className="contact__send" onClick={sendEmail}>
              Send
            </button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default memo(Contact);
