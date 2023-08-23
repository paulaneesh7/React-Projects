import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function ContactForm() {
  const [name, setName] = useState("Aneesh");
  const [email, setEmail] = useState("help123@gmail.com");
  const [text, setText] = useState("Keep exploring and learning");

  const onSubmit = function (e) {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<BiSolidMessageSquareDetail fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form action="" onSubmit={onSubmit}>
          {/* Input-name */}
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          {/* Email */}
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          {/* TextArea */}
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          {/* Submit Button */}
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>

          {/* to display */}
          <div>{name + " , " + email + " , " + text}</div>
        </form>
      </div>

      {/* For the right side image */}
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
}

export default ContactForm;
