import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Lock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface SubscriptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SubscriptionModal = ({ open, onOpenChange }: SubscriptionModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl text-center">Subscription Required</DialogTitle>
          <DialogDescription className="text-center text-base">
            This content is available only to our premium members. Upgrade your plan to unlock exclusive market insights and data.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-muted/50 rounded-lg p-4 space-y-2 my-4">
          <h3 className="font-semibold mb-3">Premium Features Include:</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Real-time polymer pricing across global markets</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Historical data and trend analysis</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Future market predictions and forecasts</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Direct access to buy & sell opportunities</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Button asChild className="w-full bg-primary hover:bg-primary-dark" size="lg">
            <Link to="/pricing" onClick={() => onOpenChange(false)}>
              View Membership Plans
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link to="/" onClick={() => onOpenChange(false)}>
              Back to Home
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
