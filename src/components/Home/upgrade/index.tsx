import { upgradeData } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Upgrade = () => {
  return (
    <section className="py-20" id="upgrade">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-foreground font-medium">
              Built for <span className="text-primary">modern Web3</span>
            </p>
            <h2 className="text-foreground sm:text-5xl text-3xl  font-medium mb-5">
              Clean, AI-native prediction UI
            </h2>
            <p className="text-[#0A1B3F] text-lg mb-7">
              AlgoCast focuses on clarity — probabilities, liquidity and settlement — so traders
              can act quickly without noisy dashboards.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {upgradeData.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div>
                    <Icon
                      icon="la:check-circle-solid"
                      width="24"
                      height="24"
                      className="text-foreground group-hover:text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#0A1B3F]">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <div className="ml-0 lg:ml-7 w-full">
              <Image
                src="/images/geminipic/upgrade.webp"
                alt="upgrade"
                width={800}
                height={740}
                className="w-full h-auto -mr-5"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
