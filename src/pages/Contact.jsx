import { useState } from "react";
import { Helmet } from "react-helmet-async";
import AboutImage from "../components/partials/AboutImage";
import ContactForm from "../components/partials/ContactForm";
import PageContainer from "../components/partials/PageContainer";

const Contact = () => {
  const [contact, setContact] = useState({
    heading: "contact us",
    copyWord: "write us for any enquiry and we will respond back",
    description:
      "Interested in becoming a publisher on Busta Stories or have any enquiry? Kindly message us and we will get back to within 48 hours.",
  });
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="Contact Busta Stories" />
        <meta
          name="keywords"
          content="stories, storybook, leisure, play, fun, playtime, reading, sci-fi, fiction, children, teens, adults, war, romance, technology, travel, culture, religion, satire, non-fiction"
        />
      </Helmet>
      <PageContainer {...contact}>
        <ContactForm />
      </PageContainer>
    </>
  );
};

export default Contact;
