import { useState } from "react";
import styles from "./style.module.css"
import add from "../../assets/Images/add.png"
import phone from "../../assets/Images/phone.png"
import clock from "../../assets/Images/clock.png"
import BannerText from "../../components/BannerText/BannerText"


export default function Contact(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const validate = () => {
  //   const newErrors = {};

  //   // if (!formData.name.trim()) {
  //   //   newErrors.name = "Name is required";
  //   // }

  //   // if (!formData.email.trim()) {
  //   //   newErrors.email = "Email is required";
  //   // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //   //   newErrors.email = "Email is invalid";
  //   // }

  //   // if (!formData.message.trim()) {
  //   //   newErrors.message = "Message is required";
  //   // }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validate()) {
      alert("The message was sent successfully. Thank you!");
      console.log("Form data submitted:", formData);
    //}
    // else {
    //   console.log("Form validation failed");
    // }
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <>
      <img className="banner" src={props.banner} alt="banner" height={300} />
      <BannerText banText={props.banText } />
      <div className={styles.info}>
        <h2>Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.contactDetails}>
          <div className={styles.topTitle}>
            <div className={styles.title}>
              <img src={add} alt="add" />
            </div>
            <label>Address</label>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div className={styles.topTitle}>
            <div className={styles.title}>
              <img src={phone} alt="phone" />
            </div>
            <label>Phone</label>
            <p>Mobile: +1 (84) 546-6789</p>
            <p>Hotline: +1 (84) 456-6789</p>
          </div>
          <div className={styles.topTitle}>
            <div className={styles.title}>
              <img src={clock} alt="clock" />
            </div>
            <label>Working Time</label>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Abc"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>
          <div className={styles.inputGroup}>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Abc@def.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          <div className={styles.inputGroup}>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="This is an optional"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <p className={styles.errorText}>{errors.subject}</p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Hi! i’d like to ask about"
              onChange={handleChange}
              required
            />
            {errors.message && (
              <p className={styles.errorText}>{errors.message}</p>
            )}
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}


