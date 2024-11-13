import "./JoinUs.css";

export const JoinUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "Web3forms access key"); // Get your own access key from web3forms.com

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Thanks for joining us"); 
    } else {
      console.error("Error", res);
    }
  };

  return (
    <div className="body">
      <div className="contact-container">
        <form className="contact-left" onSubmit={onSubmit}>
          <div className="title">
            <h2>Contact Us</h2>
            <hr />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-input"
            required
          />
          <button type="submit" className="animated-button">
            Submit
            <img
              src="https://cdn-icons-png.flaticon.com/128/556/556690.png"
              className="icon"
              alt="Submit icon"
            />
          </button>
        </form>
        <div className="contact-right">
          <img
            src="https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg"
            alt="Contact us"
          />
        </div>
      </div>
    </div>
  );
};
