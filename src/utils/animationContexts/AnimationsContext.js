import React, { useContext, useReducer, useEffect } from "react";
import animationsReducer from "./animationsReducer";

const AnimationsContext = React.createContext();

const initialState = {};

const AnimationsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(animationsReducer, initialState);

  const scrollAnimations = () => {
    // because the provider is accessible in every component, we can access any node with any class name
    const targetElements = document.querySelectorAll(".animate");

    targetElements.forEach((element) => {
      const viewportHeight = window.innerHeight;
      // get the viewportHeight and remove 100px from it
      const targetHeight = viewportHeight - 100;

      // get the position of the element on the viewport
      const elementPosition = element.getBoundingClientRect();
      // element width is [.right - .left (or .x)]
      const elementTopPosition = elementPosition.y; // we can use (.top)

      if (elementTopPosition < targetHeight) {
        element.classList.add("animateElement");
      } else {
        element.classList.remove("animateElement");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimations);
  }, []);

  return (
    <AnimationsContext.Provider value="hello">
      {children}
    </AnimationsContext.Provider>
  );
};

export const useAnimationsContext = () => {
  return useContext(AnimationsContext);
};

export { AnimationsProvider };
