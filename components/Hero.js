import { SlideFade } from "@chakra-ui/react";
import React from "react";
import Title from "./Title";

const Hero = () => {
  return (
    <SlideFade in={true} offsetX={-200}>
      <Title />
    </SlideFade>
  );
};

export default Hero;
