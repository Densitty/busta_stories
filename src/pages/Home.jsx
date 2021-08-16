import React, { useState, useContext } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { SiteContext, useGlobalContext } from "../utils/Context";

const Home = () => {
  const [home, setHome] = useState({
    heading: "thick ladies make the head turn",
    para: "come read and share your stories with big ladies",
  });

  // const dataFromContext = useContext(SiteContext);
  const dataFromContext = useGlobalContext();

  const { openModal } = dataFromContext;

  return (
    <div>
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
