"use client";

import "@/app/globals.css";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import darkLogoImage from "@/public/logo/apexia-dark.webp";
import lightLogoImage from "@/public/logo/apexia-light.webp";

export default function Footer() {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [logoImage, setLogoImage] = useState(lightLogoImage || darkLogoImage);

  const socials = [
    { name: "Whatsapp", href: "https://chat.whatsapp.com/IWkG8gGdnalHEcx7YTDcYu", src: "/socials/Whatsapp.svg" },
    { name: "Instagram", href: "https://instagram.com/apexia_club", src: "/socials/Instagram.svg" },
    { name: "Discord", href: "https://discord.gg/GwsBzGZnYc", src: "/socials/Discord.svg" },
    { name: "Twitter", href: "https://twitter.com/apexia_club", src: "/socials/Twitter.svg" },
    { name: "LinkedIn", href: "https://linkedin.com/company/apexia-community", src: "/socials/LinkedIn.svg" },
    { name: "Telegram", href: "http://t.me/apexia_club", src: "/socials/Telegram.svg" },
    { name: "Linktree", href: "https://linktr.ee/apexia", src: "/socials/Linktree.svg" }
  ];

  const navlinks = [
    {
      heading: "About",
      links: [
        { name: "Home", href: "/#home", target: "" },
        { name: "About Us", href: "/#about", target: "" },
        { name: "Our Focus", href: "/#focus", target: "" },
        { name: "Glimpse", href: "/#glimpse", target: "" },
        { name: "Testimonials", href: "/#testimonials", target: "" },
        { name: "FAQ", href: "/#faq", target: "" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { name: "Events", href: "/events", target: "" },
        { name: "Team", href: "/team", target: "" },
        { name: "Blogs", href: "/blog", target: "" },
        { name: "Digital schwags", href: "/schwags", target: "" },
        { name: "Certificate", href: "https://certificate.apexia.club", target: "_blank" },
        { name: "Sponsor Us", href: "https://hhbqah83d5k.typeform.com/to/Ht4dVGOa", target: "_blank" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { name: "Brand Kit", href: "http://apexia-community.notion.site", target: "_blank" },
        { name: "Wallpapers", href: "/wallpapers", target: "" },
        { name: "Contact Us", href: "/contact", target: "" },
      ],
    },
  ];

  useEffect(() => {
    setCurrentTheme(theme);
    setLogoImage(currentTheme === "light" ? lightLogoImage : darkLogoImage);
  }, [theme, currentTheme]);

  return (
    <footer className="relative p-10 footer-polygon mt-20 h-full w-full overflow-hidden border max-sm:mt-10 rounded-sm">
      <div className="flex flex-col gap-16 max-sm:gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="relative flex-none">
            <Image src={logoImage} width={96} height={96} alt={`apexia logo`} />
          </Link>
          <p className="text-sm max-sm:text-xs">Bits to Brilliance, Together</p>
        </div>
        {/* Links */}
        <div className="flex max-sm:flex-col-reverse justify-between max-sm:gap-5">
          {/* Socials */}
          <div className="flex flex-col gap-4 max-sm:gap-2 mt-20 max-sm:mt-5">
            <div className="flex gap-2">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 max-sm:p-2 border items-center rounded-lg"
                >
                  <Image
                    src={social.src}
                    width={24}
                    height={24}
                    alt={social.name}
                    className="hover:scale-110 max-sm:w-5 aspect-square transition-all duration-200 ease-in"
                  />
                </Link>
              ))}
            </div>
            <p className="text-xs text-[#cccccc]">
              Copyright © {new Date().getFullYear()} Apexia. All rights reserved
            </p>
          </div>
          {/* Nav Links */}
          <div className="flex gap-12 max-sm:flex-col items-start">
            {navlinks.map((section, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <h4 className="text-lg text-[#666666] font-semibold">{section.heading}</h4>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx} className="flex flex-col">
                      <Link
                        href={link.href}
                        target={link.target}
                        rel="noopener noreferrer"
                        className="text-[#cccccc] text-sm hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BorderBeam />
    </footer>
  );
}
