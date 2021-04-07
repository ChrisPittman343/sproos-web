import { Box, Divider, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box as="footer" w="100%">
      <Divider w="65%" mx="auto" />
      <Flex justifyContent="center" gridColumnGap={10} pt={5}>
        <Link href="https://github.com/ChrisPittman343/sproos-web">Github</Link>
        <NextLink href="/tac" passHref>
          <Link>Terms & Conditions</Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default Footer;
