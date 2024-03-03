import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { MailIcon } from "./MailIcon.jsx";
import { LockIcon } from "./LockIcon.jsx";
import { useState } from "react";
import SigninModal from "./SigninModal.jsx";

const LoginModal = ({ isOpen, setIsOpen }) => {
  const [backdrop, setBackdrop] = useState("blur");
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const handleSignupModalClick = () => {
    setSignupModalOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        className="bg-gray-300"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        backdrop={backdrop}
        placement="top-center"
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Link
                    onPress={handleSignupModalClick}
                    color="primary"
                    href="#"
                    size="sm"
                    className={{
                      label: "text-small",
                    }}
                  >
                    Create new account
                  </Link>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  onPress={() => setIsOpen(false)}
                >
                  Close
                </Button>
                <Button color="primary" onPress={() => setIsOpen(false)}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <SigninModal isOpen={isSignupModalOpen} setIsOpen={setSignupModalOpen} />
    </>
  );
};

export default LoginModal;
