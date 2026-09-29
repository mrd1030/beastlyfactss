import { useToast } from "@/components/ui/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <ToastProvider>
      {/* Closed toasts are skipped here: Toast is a plain div and would
          otherwise stay on screen with open={false} until removed. */}
      {toasts.filter((t) => t.open !== false).map(function ({ id, title, description, action, open: _open, onOpenChange: _onOpenChange, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose onClick={() => dismiss(id)} aria-label="Close" />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
} 