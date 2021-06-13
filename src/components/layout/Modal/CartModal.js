import React, { useContext, useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Badge,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { MovieCartContext } from "../../../contexts/MovieCartContextProvider";
import { PaymentModal } from "./PaymentModal";

export function CartModal({ isOpen, onClose }) {
  const [count, setCount] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const { addMovie, setAddMovie } = useContext(MovieCartContext);
  console.log("isRun", isRunning);
  console.log("count", count);

  const paymentModal = useDisclosure();

  const totalPrice = addMovie.reduce((total, movie) => {
    return total + movie.price;
  }, 0);

  const onClear = () => {
    const clearMovie = [];
    setAddMovie(clearMovie);
    alert("Clear success");
  };

  const handleOpenModal = (check) => {
    const { onOpen } = check;
    onOpen();
  };

  useEffect(() => {
    let timer = null;
    if (isRunning) {
      timer =
        count > 0 &&
        setInterval(() => {
          setCount((prevCount) => prevCount - 1);
        }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {addMovie.map((i) => (
              <>
                <UnorderedList>
                  <ListItem key={i.id}>
                    {i.title}: ${i.price}{" "}
                  </ListItem>
                </UnorderedList>
              </>
            ))}

            {addMovie.length > 3 && addMovie.length <= 5 ? (
              <Box w={20}>
                <Badge colorScheme="yellow" fontSize="16px">
                  Total: {(totalPrice * 90) / 100} $
                </Badge>
              </Box>
            ) : (
              <>
                {addMovie.length > 5 ? (
                  <Box w={20}>
                    <Badge colorScheme="red" fontSize="16px">
                      Total: {(totalPrice * 80) / 100} $
                    </Badge>
                  </Box>
                ) : (
                  <Text fontWeight="bold" fontSize="16px">
                    Total: {totalPrice}
                  </Text>
                )}
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={() => {
                setIsRunning(true);
                handleOpenModal(paymentModal);
              }}
            >
              Confirm
            </Button>
            <Button variant="ghost" onClick={onClear}>
              Clear Cart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <PaymentModal
        paymentModal={paymentModal}
        count={count}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setCount={setCount}
      />
    </>
  );
}
