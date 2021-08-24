import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useGlobalContext } from "../utils/Context";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Genres from "../components/genre/Genres";
import Services from "../components/services/Services";
import Reviews from "../components/reviews/Reviews";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [home, setHome] = useState({
    heading: "thick ladies make the head turn",
    para: "come read and share your stories with big ladies",
  });

  const dataFromContext = useGlobalContext();

  const { openModal } = dataFromContext;

  useEffect(() => {
    // scroll the page to the top when me forward arrow btn is clicked
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Busta Stories</title>
        <meta
          name="description"
          content="Read lovely stories of thick, curvy, voluptuous ladies and the men that love them, written by both sexes."
        />
        <meta
          name="keywords"
          content="stories, curvy, girls, ladies, women, men, breasts, boobs, voluptuous, fat, erotic, romance, travel, tits, titties, thighs, horny, love, hair, body, lust, busty, travels, engagements, career, beauty"
        />
      </Helmet>
      <Header {...home}>
        <button onClick={openModal} className="btn-default">
          get started
        </button>
      </Header>

      <>
        {
          <>
            {/* registerModal is opened by default */}
            <Modal current="registerModal">
              {/* to open the loginModal form from registerModal, pass the loginModal props and use it to change the currentModal state via dispatch */}
              <Register targetModal="loginModal" />
            </Modal>
            <Modal current="loginModal">
              {/* to open the registerModal form from loginModal, pass the registerModal props and use it to change the currentModal state via dispatch */}
              <Login targetModal="registerModal" />
            </Modal>
          </>
        }
      </>
      <Genres />
      <Services />
      <Reviews />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
