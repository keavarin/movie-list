import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Input, Button, Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartModal } from "../layout/Modal/CartModal";
import { useDisclosure } from "@chakra-ui/react";
import CustomizedBadges from "./Cart";

function Header() {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        bg="cyan.900"
        w="100%"
        p={4}
        color="white"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box onClick={() => history.push("/")} cursor="pointer">
          <Text
            fontSize="4xl"
            fontWeight="extrabold"
            as="samp"
            bgGradient="linear(to-l, blue.200, yellow.200)"
            bgClip="text"
          >
            Movie List
          </Text>
        </Box>

        <CustomizedBadges onOpen={onOpen} />
      </Flex>

      <CartModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
}

export default Header;
