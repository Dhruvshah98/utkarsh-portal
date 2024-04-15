import React, { useState } from "react";
import "./App.css";

function LogoDesignForm() {
  const [formData, setFormData] = useState({
    email: "",
    logoName: "",
    brief: "",
    message: "",
    purpose: "",
    tagline: "",
    hasImage: "",
    problem: "",
    intendedUsers: "",
    ageGroup: "",
    application: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form className="main" onSubmit={handleSubmit}>
      {/* Enter email section */}
      <section className="center-align">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">Enter your email id</h4>
            <div className="answer-input-area">
              <input
                type="email"
                className="form-field"
                id="email"
                name="email"
                placeholder="Type Here"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
          </div>
        </div>
      </section>

      {/* Logo name section */}
      <section className="center-align">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">
              Please write the exact name as you would like to appear in your
              logo.
            </h4>
            <div className="answer-input-area">
              <input
                type="text"
                className="form-field"
                name="logoName"
                placeholder="Type Here"
                value={formData.logoName}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
          </div>
        </div>
      </section>

      {/* Brief section */}
      <section className="center-align">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">
              Please brief us in detail about the product/service for which logo
              need to be designed.
            </h4>
            <div className="answer-input-area">
              <input
                type="text"
                className="form-field"
                name="brief"
                placeholder="Type Here"
                value={formData.brief}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
          </div>
        </div>
      </section>

      {/* Overall message section */}
      <section className="center-align">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">
              What is the overall message you want to convey to your target
              audience?
            </h4>
            <div className="answer-input-area">
              <input
                type="text"
                className="form-field"
                name="message"
                placeholder="Type Here"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
          </div>
        </div>
      </section>

      {/* Purpose section */}
      <section className="center-align">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">What is the purpose of the business?</h4>
            <div className="answer-input-area">
              <input
                type="text"
                className="form-field"
                name="purpose"
                placeholder="Type Here"
                value={formData.purpose}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
          </div>
        </div>
      </section>

      {/* Tagline section */}
      <section className="center-align">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">What is your tagline if applicable?</h4>
            <div className="options">
              <a className="button select yes" onClick={() => {}}>
                Yes
              </a>
              <a className="button select" onClick={() => {}}>
                No
              </a>
            </div>
            <div className="answer-input-area" id="tagline-input">
              <input
                type="text"
                className="form-field"
                name="tagline"
                placeholder="Type Here"
                value={formData.tagline}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
          </div>
        </div>
      </section>

      {/* Image section */}
      <section className="center-align tagline">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">
              Do you have specific images or icons that you wish or do not wish
              to be in your logo?
            </h4>
            <div className="options">
              <a className="button select yes-image" onClick={() => {}}>
                Yes
              </a>
              <a className="button select" onClick={() => {}}>
                No
              </a>
            </div>
            <div className="answer-input-area">
              <div className="control-group file-upload" id="file-upload1">
                <div className="image-box text-center">
                  <p>Upload Image</p>
                  <img src="" alt="" />
                </div>
                <div className="controls" style={{ display: "none" }}>
                  <input type="file" name="contact_image_1" />
                </div>
              </div>
            </div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
          </div>
        </div>
      </section>

      {/* Problems section */}
      <section className="center-align">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">
              What problem are you solving with this product?
            </h4>
            <div className="answer-input-area">
              <input
                type="text"
                className="form-field"
                name="problem"
                placeholder="Type Here"
                value={formData.problem}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
          </div>
        </div>
      </section>

      {/* Intended users section */}
      <section className="center-align">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">Who are the intended users?</h4>
            <div className="answer-input-area">
              <input
                type="text"
                className="form-field"
                name="intendedUsers"
                placeholder="Type Here"
                value={formData.intendedUsers}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
          </div>
        </div>
      </section>

      {/* Age group section */}
      <section className="center-align">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">Age group of your target demographic?</h4>
            <div
              className="slider"
              data-value-0="#first"
              data-value-1="#second"
              data-range="#third"
            ></div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
          </div>
        </div>
      </section>

      {/* Applications section */}
      <section className="center-align">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">
              What is the most important application for your logo?{" "}
            </h4>
            <div className="options application">
              <input type="radio" name="select" id="radio1" />
              <label className="radio-buttons" htmlFor="radio1">
                Website
              </label>
              <input type="radio" name="select" id="radio2" />
              <label className="radio-buttons" htmlFor="radio2">
                Business
              </label>
              <input type="radio" name="select" id="radio3" />
              <label className="radio-buttons" htmlFor="radio3">
                Signage
              </label>
              <input type="radio" name="select" id="radio4" />
              <label className="radio-buttons" htmlFor="radio4">
                Website
              </label>
              <input type="radio" name="select" id="radio5" />
              <label className="radio-buttons" htmlFor="radio5">
                Tshirt
              </label>
              <input type="radio" name="select" id="radio6" />
              <label className="radio-buttons" htmlFor="radio6">
                Other
              </label>
            </div>
            <div className="answer-input-area" id="tagline-input-apps">
              <input
                type="text"
                className="form-field"
                name="application"
                placeholder="Type Here"
                value={formData.application}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
          </div>
        </div>
      </section>

      {/* Deadline section */}
      <section className="center-align">
        <div className="container ">
          <div className="question">
            <h4 className="hdn3">What is the deadline you are looking for?</h4>
            <div className="answer-input-area">
              <input
                type="date"
                className="form-field"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="button-start okay-input">
              <span>OKAY</span>
              <em>OKAY</em>
            </button>
            <button type="submit" className="button submit-final">
              SUBMIT
            </button>
          </div>
        </div>
      </section>
    </form>
  );
}

export default LogoDesignForm;
