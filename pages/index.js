import Head from "next/head";
import { useState } from "react";
export default function Home() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/email", {
      method: "post",
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <Head>
        <title>Contact page</title>
        <meta name="description" content="contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="container">
          <form id="contact" onSubmit={handleSubmit}>
            <h3> Contact Form</h3>
            <h4>Contact us for custom quote</h4>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabindex="1"
                required
                autofocus
                name="name"
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabindex="2"
                required
                name="email"
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number (optional)"
                type="tel"
                tabindex="3"
                required
                name="phone"
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Web Site (optional)"
                type="url"
                tabindex="4"
                required
                name="website"
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your message here...."
                tabindex="5"
                required
                name="message"
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}
