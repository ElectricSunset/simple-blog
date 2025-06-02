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
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
};

const StatusDialog: React.FC<StatusDialogProps> = ({
  title,
  description,
  open,
  onClose,
  ...props
}) => {
  return (
    <Dialog {...props} open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Button onClick={onClose}>Back</Button>
      </DialogContent>
    </Dialog>
  );
};

export default StatusDialog;
