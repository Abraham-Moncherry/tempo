"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconUserCircle } from "@tabler/icons-react";
import { useState } from "react";

export function Accounts({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <IconUserCircle />
            Account
          </div>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[425px]"
          onClick={(e) => e.stopPropagation()}
        >
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="avatar-upload">Profile Picture</Label>
              <div className="relative w-fit group">
                <Avatar className="h-10 w-10 rounded-full cursor-pointer">
                  <AvatarImage
                    src={selectedImage || user.avatar}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                  <AvatarFallback className="rounded-lg">T</AvatarFallback>
                </Avatar>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
                <span className="absolute top-full left-0 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Replace image
                </span>
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue={user.name} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email-1">Email</Label>
              <Input id="email-1" name="email" defaultValue={user.email} />
            </div>
            <Button
              variant="outline"
              type="button"
              className="w-full flex items-center justify-center gap-3"
            >
              <img
                src="/strava.svg"
                alt="Strava logo"
                width="30"
                height="30"
                className="mr-2 flex-shrink-0 rounded"
              />
              <span className="sr-only">Connect with Strava</span>
              Connect with Strava
            </Button>

            <Button
              variant="outline"
              type="button"
              className="w-full flex items-center justify-center gap-3"
            >
              <img
                src="/strong-logo.png"
                alt="Strong logo"
                width="30"
                height="30"
                className="mr-2 flex-shrink-0 rounded"
              />
              <span className="sr-only">Connect with Strong</span>
              Connect with Strong
            </Button>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
