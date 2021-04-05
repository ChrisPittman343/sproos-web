import { Flex, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex as="footer" w="100%" justifyContent="center" gridColumnGap={5}>
      <Link href="https://github.com/ChrisPittman343/sproos-web">Github</Link>
    </Flex>
  );
};

export default Footer;
