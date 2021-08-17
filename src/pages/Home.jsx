import React, { useState } from "react";
import Login from "../auth/Login";
import { Helmet } from "react-helmet-async";
import Register from "../auth/Register";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useGlobalContext } from "../utils/Context";

const Home = () => {
  const [home, setHome] = useState({
    heading: "thick ladies make the head turn",
    para: "come read and share your stories with big ladies",
  });

  const dataFromContext = useGlobalContext();

  const { openModal } = dataFromContext;

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

      {/* {showModal && (
        <>
          <Modal current="loginModal">
            <Login />
          </Modal>
        </>
      )} */}
    </div>
  );
};

export default Home;
