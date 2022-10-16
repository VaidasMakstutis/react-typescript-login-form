import { Dialog, DialogProps, DialogTitle, DialogActions, DialogContent, Button } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { useRef } from "react";
import LoginForm, { LoginFormRef } from "./LoginForm";

type LoginModalProps = Omit<DialogProps, "onClose"> & {
  onClose: () => void;
};

const LoginModal = ({ onClose, ...rest }: LoginModalProps) => {
  const formRef = useRef<LoginFormRef>(null);

  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  const handleLogin = () => {
    console.log("FormRef:", formRef);

    formRef.current?.submitForm();
  };
  return (
    <Dialog {...rest} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <LoginForm onSubmit={handleSubmit} ref={formRef} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
