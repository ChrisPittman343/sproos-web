import React, { Component } from "react";
import PropTypes from "prop-types";
import { IconButton, Tooltip } from "@chakra-ui/react";

const SidebarButton = (props) => {
  return (
    <Tooltip
      aria-label={"Tooltip for " + props.desc}
      label={props.desc}
      bg="green.500"
      color="white"
    >
      <IconButton
        aria-label={props.desc}
        icon={props.icon}
        colorScheme="white"
        variant="ghost"
        rounded={false}
        onClick={props.onClick}
      />
    </Tooltip>
  );
};

SidebarButton.propTypes = {
  desc: PropTypes.string,
  icon: PropTypes.any,
  onClick: PropTypes.func,
};

export default SidebarButton;
