"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { loginWithEmail } from "@/lib/actions/auth";
import { Card, CardContent } from "@/components/ui/card";

interface Signup1Props {
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Signup1 = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await loginWithEmail(email);
      setEmailSent(true);
    } catch (error) {
      console.error("Error sending magic link:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (emailSent) {
    return (
      <section className="bg-muted h-screen">
        <div className="flex h-full items-center justify-center">
          <Card className="overflow-hidden p-6 max-w-md">
            <CardContent className="text-center">
              <h2 className="text-2xl font-bold mb-4">Check your email!</h2>
              <p className="text-muted-foreground mb-4">
                We've sent a magic link to <strong>{email}</strong>
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Click the link in the email to complete your signup and access
                your account.
              </p>
              <Button variant="outline" onClick={() => setEmailSent(false)}>
                Try another email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-muted h-screen">
      <div className="flex h-full items-center justify-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          <img
            src="/tempo-logo.png"
            alt="logo"
            title="shadcnblocks.com"
            className="h-10 dark:invert"
          />
          <form
            onSubmit={handleEmailSubmit}
            className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md"
          >
            <h1 className="text-xl font-semibold">Sign up</h1>
            <p className="text-sm text-muted-foreground text-center">
              Enter your email to receive a magic link
            </p>
            <Input
              type="email"
              placeholder="Email"
              className="text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending magic link..." : "Sign up with Email"}
            </Button>
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => {
                // Import login action for Google
                import("@/lib/actions/auth").then(({ login }) => login());
              }}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Google
            </Button>
          </form>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>Already a user?</p>
            <a
              href="/login"
              className="text-primary font-medium hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup1 };
