import styles from './ContactHeader.module.css';

function ContactHeader() {
  return (
    <div className={`${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>
        LETS CONNECT WE ARE HERE TO HELP, AND WE WOULD LOVE TO LOVE TO HEAR FROM
        YOU! WHETHER YOU HAVE A QUESTION, COOMMENT, OR JUST WANT TO CHAT, YOU
        CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA
      </p>
    </div>
  );
}

export default ContactHeader;
