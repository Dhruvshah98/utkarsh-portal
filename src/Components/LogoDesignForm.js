import React, { useState } from "react";
import InputField from "./resuableComponents/InputField";
import FormSection from "./resuableComponents/FormSection";
import Button from "./resuableComponents/Button";

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
      <FormSection title="Enter your email id">
        <InputField
          name="email"
          placeholder="Type Here"
          value={formData.email}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
      </FormSection>

      <FormSection title="Please write the exact name as you would like to appear in your logo.">
        <InputField
          name="logoName"
          placeholder="Type Here"
          value={formData.logoName}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
      </FormSection>

      <FormSection title="Please brief us in detail about the product/service for which logo need to be designed.">
        <InputField
          name="brief"
          placeholder="Type Here"
          value={formData.brief}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
      </FormSection>

      <FormSection title="What is the overall message you want to convey to your target audience?">
        <InputField
          name="message"
          placeholder="Type Here"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
      </FormSection>

      <FormSection title="What is the purpose of the business?">
        <InputField
          name="purpose"
          placeholder="Type Here"
          value={formData.purpose}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
      </FormSection>

      <FormSection title="What is your tagline if applicable?">
        <InputField
          name="tagline"
          placeholder="Type Here"
          value={formData.tagline}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
      </FormSection>

      <FormSection title="Do you have specific images or icons that you wish or do not wish to be in your logo?">
        <InputField
          name="hasImage"
          placeholder="Type Here"
          value={formData.hasImage}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
      </FormSection>

      <FormSection title="What problem are you solving with this product?">
        <InputField
          name="problem"
          placeholder="Type Here"
          value={formData.problem}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
      </FormSection>

      <FormSection title="Who are the intended users?">
        <InputField
          name="intendedUsers"
          placeholder="Type Here"
          value={formData.intendedUsers}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
      </FormSection>

      <FormSection title="Age group of your target demographic?">
        <InputField
          name="ageGroup"
          placeholder="Type Here"
          value={formData.ageGroup}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
      </FormSection>

      <FormSection title="What is the most important application for your logo?">
        <InputField
          name="application"
          placeholder="Type Here"
          value={formData.application}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
      </FormSection>

      <FormSection title="What is the deadline you are looking for?">
        <InputField
          name="deadline"
          placeholder="Type Here"
          value={formData.deadline}
          onChange={handleChange}
        />
        <Button type="button" text="OKAY" onClick={() => {}} />
        <Button type="submit" text="SUBMIT" />
      </FormSection>
    </form>
  );
}

export default LogoDesignForm;
