import { Box, Flex, Link } from "@chakra-ui/react";
import Head from "next/head";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Hero />
      <Link href="/projects">Projects</Link>
      <Box>Details</Box>
    </Flex>
  );
}
