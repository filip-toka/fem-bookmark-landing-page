import { useState } from "react";
import Button from "./Button";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState({ status: "", text: "" });

  function validateEmail(email: string) {
    setEmail(email);
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
      return setFormMessage({
        status: "error",
        text: "Whoops, make sure it’s an email",
      });
    }
    return setFormMessage({
      status: "success",
      text: "Yeey, it is an email :)",
    });
  }

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (email === "") {
      return setFormMessage({ status: "error", text: "Enter your email" });
    }

    if (formMessage.status === "error" || formMessage.status === "") {
      return;
    }

    //success logic here
    setFormMessage({ status: "success", text: "Sent!" });
  }

  const showResponseMessage =
    formMessage.status !== "" && formMessage.text !== "" ? true : false;

  return (
    <form className="newsletter-form" onSubmit={handleFormSubmit}>
      <div
        className={`newsletter-form__response${
          showResponseMessage
            ? " newsletter-form__response--" + formMessage.status
            : ""
        }`}
      >
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={`newsletter-form__input${
            showResponseMessage
              ? " newsletter-form__input--" + formMessage.status
              : ""
          }`}
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          placeholder="Enter your email"
        />
        {showResponseMessage && (
          <p className="newsletter-form__response-message">
            {formMessage.text}
          </p>
        )}
      </div>
      <Button className="btn--danger newsletter-form__submit-btn">
        Contact Us
      </Button>
    </form>
  );
};

export default NewsletterForm;
