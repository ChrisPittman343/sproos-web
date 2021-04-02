import React from "react";
import PropTypes from "prop-types";
import { Menu, MenuButton, MenuItem, MenuList, Avatar } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import firebase from "firebase/app";
import "firebase/auth";

const GoogleAvatar = (props) => {
  const [user, loading, error] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    auth.signInWithRedirect(provider);
  };

  const signOut = () => auth.signOut();

  return (
    <Menu>
      {user ? (
        <>
          <MenuButton
            as={Avatar}
            size="sm"
            _hover={{ cursor: "pointer" }}
            name={user.displayName}
            src={user.photoURL}
          />
          <MenuList>
            <MenuItem>My Projects</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem onClick={signOut}>Sign out</MenuItem>
          </MenuList>
        </>
      ) : (
        <>
          <MenuButton as={Avatar} size="sm" _hover={{ cursor: "pointer" }} />
          <MenuList>
            <MenuItem onClick={signInWithGoogle}>Sign In</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

GoogleAvatar.propTypes = {};

export default GoogleAvatar;
