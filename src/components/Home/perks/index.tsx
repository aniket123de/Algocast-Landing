const Perks = () => {
  return (
    <section className="pb-28 relative">
      <div className="container px-4 relative z-2">
        <div className="text-center">
          <div className="flex flex-col gap-4">
            <p className="text-[#0A1B3F] text-base relative">
              Built for <span className="text-primary">clarity & speed</span>
            </p>
            <h2 className="text-foreground sm:text-5xl text-3xl font-medium">
              Why AlgoCast
            </h2>
          </div>
          <div className="mt-16 border border-border grid lg:grid-cols-3 sm:grid-cols-2 py-12 sm:py-16 gap-10 sm:px-12 px-6 rounded-3xl bg-dark_grey/35 lg:bg-bottom bg-center bg-no-repeat">
            <div className="text-left flex flex-col gap-3">
              <h3 className="text-foreground text-2xl font-semibold">
                Autonomous Market Creation
              </h3>
              <p className="text-[#0A1B3F]">
                AI continuously converts trending narratives into structured YES/NO markets so you
                never miss a move.
              </p>
            </div>
            <div className="text-left flex flex-col gap-3">
              <h3 className="text-foreground text-2xl font-semibold">
                AI Probability Engine
              </h3>
              <p className="text-[#0A1B3F]">
                Compare AlgoCast AI probabilities with market odds to find mispriced outcomes.
              </p>
            </div>
            <div className="text-left flex flex-col gap-3">
              <h3 className="text-foreground text-2xl font-semibold">
                Transparent On-Chain Settlement
              </h3>
              <p className="text-[#0A1B3F]">
                Markets settle on Algorand for fast, verifiable resolution you can trust.
              </p>
            </div>
            <div className="text-left flex flex-col gap-3">
              <h3 className="text-foreground text-2xl font-semibold">
                Instant Withdrawals
              </h3>
              <p className="text-[#0A1B3F]">
                Custodial wallets make moving funds in and out of markets simple and quick.
              </p>
            </div>
            <div className="text-left flex flex-col gap-3">
              <h3 className="text-foreground text-2xl font-semibold">
                Built for Speed &amp; Simplicity
              </h3>
              <p className="text-[#0A1B3F]">
                A focused interface that highlights probabilities, liquidity, and settlement
                timelines.
              </p>
            </div>
            <div className="text-left flex flex-col gap-3">
              <h3 className="text-foreground text-2xl font-semibold">
                Hackathon-Ready Experience
              </h3>
              <p className="text-[#0A1B3F]">
                Designed to showcase AI + Web3 prediction markets in a clean, demo-friendly flow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-linear-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 z-0 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 absolute sm:-left-48 opacity-60"></div>
    </section>
  );
};

export default Perks;
