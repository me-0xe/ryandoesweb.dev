import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

interface HeaderEasterEggDialogProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const HeaderEasterEggDialog: React.FC<HeaderEasterEggDialogProps> = (props) => {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Woah!</DialogTitle>
          <DialogDescription>Please leave me alone. I&apos;m dizzy! 😵‍💫</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HeaderEasterEggDialog;
