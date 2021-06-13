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
} from "@chakra-ui/react";

export function PaymentModal({ paymentModal, count, setIsRunning, setCount }) {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen, onOpen, onClose } = paymentModal;
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment</ModalHeader>

          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Directing to payment method in 1 minute: {count}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                setIsRunning(false);
                setCount(60);
              }}
            >
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
