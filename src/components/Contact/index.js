import React from "react";
import { ContactSection, Form, FormInput, Title } from "./style";

export default function Contact() {
  return (
    <ContactSection>
      <div className="container">
        <Title>Contact With Me</Title>
        <Form>
          <FormInput>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </FormInput>
          <input type="text" placeholder="Your Subject" />
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" />
        </Form>
      </div>
    </ContactSection>
  );
}
