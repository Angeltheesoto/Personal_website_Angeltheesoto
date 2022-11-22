// dependencies
import React, { useState, useEffect } from "react";

// Emailjs npm
import emailjs from "emailjs-com";

// Css / imgs
import "./footer.css";
import ProfilePic from "../../images_icons/picture_of_me.jpg";

// Bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

// Toast npm
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  // Variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  // This function handles the email being sent and logs when it fails.
  function sendEmail(e) {
    e.preventDefault();
    if (name && email && comment) {
      emailjs
        .sendForm(
          `service_kq3g3p2`,
          `template_0cl4ohp`,
          e.target,
          `cABl6iw7PSwCXKddN`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      e.target.reset();
      setComment((prev) => (prev = ""));
    } else {
      console.log("Cannot send email.");
    }
  }

  // This function is the two submit buttons that display different effects in browser when clicked.
  function SubmitButton() {
    if (name && email && comment) {
      const notify = () => {
        toast.success("Your message was successfully sent!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      };
      return (
        <button type="submit" className="button btn-color" onClick={notify}>
          Send
        </button>
      );
    } else {
      const notify = () => {
        toast.error("Sorry, you must fill in all fields.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      };
      return (
        <button type="submit" className="button btn-color" onClick={notify}>
          Send
        </button>
      );
    }
  }

  return (
    <div id="contact" className="form-flex">
      <div className="form-container">
        <h4>Contact me</h4>
        <Form onSubmit={sendEmail} method="post">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              maxLength={20}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              maxLength={30}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              className="mb-3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </FloatingLabel>
          <SubmitButton />
        </Form>
      </div>
      <div className="footer-links">
        <h4>Profile</h4>
        <img src={ProfilePic} alt="angel soto" className="profilepic" />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Contact;
