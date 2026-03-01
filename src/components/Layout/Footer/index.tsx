import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";
import { Separator } from "@/components/ui/separator";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-11 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          <div className="lg:col-span-4 md:col-span-6 col-span-6 flex flex-col gap-6">
            <Logo />
            <p className="text-foreground/70">
              AlgoCast — Where Trends Become Tradable.
              <br />
              AI-powered, on-chain prediction markets built on Algorand.
            </p>
            <p className="text-foreground/60 text-sm">
              Built for hackathon demo purposes.
            </p>
            <div className="flex gap-6 items-center relative z-1">
              <Link href="https://www.facebook.com/" className="group">
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="24"
                  height="24"
                  className="text-foreground group-hover:text-primary"
                />
              </Link>
              <Link href="https://www.instagram.com/" className="group">
                <Icon
                  icon="fa6-brands:instagram"
                  width="24"
                  height="24"
                  className="text-foreground group-hover:text-primary"
                />
              </Link>
              <Link href="https://www.twitter.com/" className="group">
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="24"
                  height="24"
                  className="text-foreground group-hover:text-primary"
                />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-foreground mb-4 font-medium text-24">Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-foreground/70 hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-foreground mb-4 font-medium text-24">Other Pages</h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.herf}
                    className="text-foreground/70 hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h3 className="text-foreground text-24 font-medium mb-4">
              Learn more
            </h3>
            <p className="text-foreground/70 text-sm">
              This interface is a prototype used to demonstrate AI-native prediction markets on
              Algorand. Do not use in production.
            </p>
          </div>
        </div>
        <Separator className="bg-foreground/15" />
        <p className="text-foreground/60 text-center py-8 text-sm">
          AlgoCast &mdash; Where Trends Become Tradable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
