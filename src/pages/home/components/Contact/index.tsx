import { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Lottie2 from "react-lottie";

import { useInView, useAnimation } from "framer-motion";

import animationData from "../../../../components/Animation/animations.json";
import { HeaderTopic } from "../../../../components/HeaderTopic";
import { FormContact } from "./components/FormContact";
import { ContactContainer, ContactData, ImageContainer } from "./styles";

interface ContactProps {
  color: string;
}

function Contact({ color }: ContactProps) {
  const [animationControl, setAnimationControl] = useState({
    isStopped: true,
    isPaused: false
  });
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  useEffect(() => {
    if (isInView) {
      setAnimationControl({
        ...animationControl,
        isStopped: false
      });
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0 }
      });
    } else {
      animation.start({
        x: "100vw"
      });
    }
  }, [isInView]);

  return (
    <ContactContainer id="contact">
      <HeaderTopic title="Contato">
        <AiOutlineMail size={16} color={color} />
      </HeaderTopic>

      <ContactData>
        <ImageContainer>
          <Lottie2
            options={defaultOptions}
            isStopped={animationControl.isStopped}
            isPaused={animationControl.isPaused}
          />
        </ImageContainer>
        <FormContact />
      </ContactData>
    </ContactContainer>
  );
}

export { Contact };
