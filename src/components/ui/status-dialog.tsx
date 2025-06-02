import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './button';

type StatusDialogProps = {
  open: boolean;
  onClose: () => void;
};

const StatusDialog: React.FC<StatusDialogProps> = ({
  open,
  onClose,
  ...props
}) => {
  return (
    <Dialog {...props} open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Email or Password Wrong!</DialogTitle>
          <DialogDescription>
            Please try again with different email or password
          </DialogDescription>
        </DialogHeader>
        <Button onClick={onClose}>Back</Button>
      </DialogContent>
    </Dialog>
  );
};

export default StatusDialog;
