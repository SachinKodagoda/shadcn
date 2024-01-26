import { Button } from "@/components/ui/button";
import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-2">
        <Button>Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button>
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
      <div className="flex gap-2"></div>
    </main>
  );
}
