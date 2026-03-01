"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BuyCrypto from "./buy-form";
import SellCrypto from "./sell-form";
import CardSlider from "./slider";
import { useEffect, useState, useCallback } from "react";
import BrandLogo from "../BrandLogo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative py-12 pt-24 md:pt-28 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            {...leftAnimation}
            className="flex flex-col items-center lg:items-start gap-10"
          >
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div className="flex gap-6 items-center lg:justify-start justify-center">
                <Badge
                  variant="outline"
                  className="text-base py-1.5 px-4 bg-primary/10 rounded-full border border-white/10 text-primary font-medium h-9"
                >
                  AI-powered prediction markets on Algorand
                </Badge>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.3em] text-foreground/60">
                  ALGOCAST
                </p>
                <h1 className="font-semibold xl:text-[64px] md:text-5xl sm:text-4xl text-3xl text-foreground leading-tight">
                  Where Trends Become Tradable.
                </h1>
                <p className="text-foreground/80 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                  AlgoCast transforms real-time social signals into AI-powered on-chain
                  prediction markets. Discover, trade, and redeem YES/NO outcome tokens
                  in a few taps.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 sm:gap-6">
              <Button
                render={<Link href="/#portfolio" />}
                className="text-base bg-primary hover:bg-primary/80 flex items-center gap-2 border border-primary rounded-lg font-semibold text-background py-6 px-7 cursor-pointer h-12 w-full sm:w-auto justify-center"
              >
                Explore Markets
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/30">
                  <Image
                    src={"/images/icons/icon-arrow.svg"}
                    alt="arrow-icon"
                    width={14}
                    height={14}
                  />
                </div>
              </Button>
              <Button
                variant="outline"
                render={<Link href="/#work" />}
                className="text-base bg-transparent hover:bg-white/5 flex items-center gap-2 border border-white/20 rounded-lg font-semibold text-foreground py-6 px-7 cursor-pointer h-12 w-full sm:w-auto justify-center"
              >
                View How It Works
              </Button>
            </div>
          </motion.div>
          <motion.div {...rightAnimation} className="w-full h-full flex items-center justify-center lg:justify-end lg:scale-125 lg:-mr-16 xl:-mr-24 origin-right">
            <div className="w-full sm:w-[120%] lg:w-[140%] max-w-none translate-x-16">
              <Image
                src="/images/geminipic/hero.webp"
                alt="Banner"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
        <BrandLogo />
        <CardSlider />
      </div>

      {/* Dialogs for Buy and Sell */}
      <Dialog open={isBuying} onOpenChange={setIsBuyingOpen}>
        <DialogContent className="max-w-md bg-dark_grey/90 backdrop-blur-md border border-border p-8 pt-14 text-center">
          <BuyCrypto />
        </DialogContent>
      </Dialog>

      <Dialog open={isSelling} onOpenChange={setIsSellingOpen}>
        <DialogContent className="max-w-md bg-dark_grey/90 backdrop-blur-md border border-border p-8 pt-14 text-center">
          <SellCrypto />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
