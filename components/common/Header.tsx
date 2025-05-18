"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MenuIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import darkLogoImage from "@/public/logo/apexia-dark.webp";
import ShinyButton from "@/components/magicui/shiny-button";
import lightLogoImage from "@/public/logo/apexia-light.webp";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


export default function Header() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [logoImage, setLogoImage] = useState(lightLogoImage || darkLogoImage);

  useEffect(() => {
    setCurrentTheme(theme);
    if (currentTheme === "light") {
      setLogoImage(lightLogoImage);
    } else {
      setLogoImage(darkLogoImage);
    }
  }, [theme, currentTheme]);

  const NavItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Team",
      href: "/team",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Schwags",
      href: "/schwags",
    },
    {
      name: "Contact",
      href: "/contact",
    }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full max-w-[85vw] mx-auto bg-transparent ">
      <div className="flex justify-between pt-8">
        <Link href="/" className="relative flex-none">
          <Image src={logoImage} width={128} height={128} alt={`apexia logo`} className="p-4" />
        </Link>

        <div className="hidden fixed right-0 mx-5  max-sm:block">
          <Sheet
            open={open}
            onOpenChange={
              (isOpen) => {
                setOpen(isOpen);
              }
            }
          >
            <SheetTrigger asChild>
              <Button variant="outline" className="flex py-7 items-center backdrop-blur-lg rounded-full bg-transparent">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image src={logoImage} width={128} height={128} alt={`apexia logo`} className="p-4" />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <nav className="p-4 flex flex-col gap-4">
                {NavItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-blue-500 ease-out transition duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 flex items-center">
                  <Link
                    target="_blank"
                    onClick={() => setOpen(false)}
                    href="https://hhbqah83d5k.typeform.com/to/Ht4dVGOa"
                  >
                    <ShinyButton text="Sponsor Us" />
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="pl-4 pr-2 flex gap-4 border rounded-full fixed right-0 mx-20 max-sm:hidden backdrop-blur-xl">
          {NavItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="py-4 px-2 hover:text-blue-500 ease-out transition duration-300"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center">
            <Link
              target="_blank"
              href="https://hhbqah83d5k.typeform.com/to/Ht4dVGOa"
            >
              <ShinyButton text="Sponsor Us" />
            </Link>
          </div>
        </nav>
      </div>
    </header >
  );
}
