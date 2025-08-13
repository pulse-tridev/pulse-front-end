import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useCallback } from "react";

type CoreConfirmDialogProps = {
  title?: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => Promise<void> | void;
};

export const CoreConfirmDialog = ({
  title,
  description,
  isOpen,
  onClose,
  onSubmit,
}: CoreConfirmDialogProps) => {
  const handleSubmit = useCallback(() => {
    onClose();
    onSubmit();
  }, [onSubmit, onClose]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}

      {description && (
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
      )}

      <DialogActions>
        <Button onClick={onClose} color="error" variant="outlined" size="small">
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="outlined"
          size="small"
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
