// types/clerk-react.d.ts
import { WithClerkProp } from "@clerk/clerk-react";

interface CustomSignOutButtonProps {
  afterSignOutUrl?: string;
}

declare module "@clerk/clerk-react" {
  interface SignOutButtonProps extends CustomSignOutButtonProps, WithClerkProp<CustomSignOutButtonProps> {}
}
