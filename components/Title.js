import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import React from "react";

const Title = () => {
  return (
    <NextLink href="/" passHref>
      <Link>
        <img src="/title.svg" width={150} />
      </Link>
    </NextLink>
  );
};

export default Title;
