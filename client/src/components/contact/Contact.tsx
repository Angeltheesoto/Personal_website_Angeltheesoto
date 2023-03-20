import React, { ChangeEvent, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Technologies from "../technologies/Technologies";

function Contact(): JSX.Element {
  interface FormData {
    name: string;
    email: string;
    comment: string;
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    comment: "",
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: event.target.value });
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: event.target.value });
  };
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, comment: event.target.value });
  };

  // This function handles the email being sent and logs when it fails.
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formData.name && formData.email && formData.comment) {
      emailjs
        .sendForm(
          `service_kq3g3p2`,
          `template_0cl4ohp`,
          e.currentTarget,
          `cABl6iw7PSwCXKddN`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      e.currentTarget.reset();
      // setComment((prev) => (prev = ""));
    } else {
      // console.log("Cannot send email.");
    }
  }

  // This function is the two submit buttons that display different effects in browser when clicked.
  function SubmitButton(): JSX.Element {
    if (formData.name && formData.email && formData.comment) {
      const notify = () => {
        toast.success("Your message was successfully sent!", {
          position: "bottom-center",
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
          position: "bottom-center",
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
            {...(formData.name as any)}
            controlId="floatingInput"
            label="Name"
            className="mb-3"
            value={formData.name}
            onChange={handleNameChange}
          >
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              maxLength={20}
            />
          </FloatingLabel>

          <FloatingLabel
            {...(formData.name as any)}
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
            value={formData.email}
            onChange={handleEmailChange}
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
              {...(formData.name as any)}
              as="textarea"
              name="message"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              className="mb-3"
              value={formData.comment}
              onChange={handleCommentChange}
            />
          </FloatingLabel>
          <SubmitButton />
        </Form>
      </div>
      <div className="technologies-container">
        <h4>Technologies</h4>
        <div className="technologies-links">
          <Technologies />
        </div>
      </div>
      <ToastContainer
        position="top-right"
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
