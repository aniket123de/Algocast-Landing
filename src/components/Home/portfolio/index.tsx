'use client'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <section className='pt-12' id='portfolio'>
      <div className='container px-4 sm:px-6'>
        <div className='grid lg:grid-cols-2 gap-10 items-stretch'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <div className='flex flex-col gap-4'>
              <p className='text-foreground font-medium'>
                Market <span className='text-primary'>preview</span>
              </p>
              <h2 className='text-foreground sm:text-5xl text-3xl mb-2 font-medium'>
                See an AlgoCast market in action
              </h2>
              <p className='text-[#0A1B3F] text-lg max-w-xl'>
                Example of how an AI-initialized YES/NO market looks inside the AlgoCast
                interface.
              </p>
            </div>

            <div className='mt-8 border border-primary/30 rounded-2xl bg-white/5 p-6 sm:p-8'>
              <p className='text-xs font-semibold text-primary mb-1'>
                Example market
              </p>
              <p className='text-foreground font-semibold text-base sm:text-lg mb-4'>
                Will BTC exceed $80,000 before 31 March 2026?
              </p>

              <div className='grid gap-6 sm:grid-cols-3 items-stretch'>
                <div className='sm:col-span-2 space-y-4'>
                  <div className='grid grid-cols-2 gap-4 text-xs'>
                    <div className='bg-background/60 rounded-xl p-4'>
                      <p className='text-[#0A1B3F] mb-1'>AI Probability</p>
                      <p className='text-2xl font-bold text-primary'>72%</p>
                    </div>
                    <div className='bg-background/60 rounded-xl p-4'>
                      <p className='text-[#0A1B3F] mb-1'>Market Probability</p>
                      <p className='text-2xl font-bold text-emerald-400'>65%</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-xs text-[#0A1B3F] mb-1'>
                      YES vs NO liquidity
                    </p>
                    <div className='h-2 bg-background/80 rounded-full overflow-hidden'>
                      <div
                        className='h-full bg-primary rounded-full'
                        style={{ width: '65%' }}
                      />
                    </div>
                  </div>
                </div>

                <div className='flex flex-col justify-between gap-3'>
                  <button className='w-full py-3 rounded-lg bg-primary text-background text-sm font-semibold'>
                    Buy YES
                  </button>
                  <button className='w-full py-3 rounded-lg border border-foreground/30 text-foreground text-sm font-semibold hover:bg-foreground/5 transition'>
                    Buy NO
                  </button>
                  <p className='text-[11px] text-[#0A1B3F] text-center'>
                    UI preview only. Live markets use on-chain pools and real AI
                    signals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center'>
            <div className='w-full border border-border rounded-2xl bg-background/60 p-6 sm:p-8 space-y-4'>
              <h3 className='text-foreground text-2xl font-semibold'>
                AI vs market, side by side
              </h3>
              <p className='text-[#0A1B3F]'>
                Each market card highlights AI-implied odds, current market
                pricing, liquidity and expiry — giving you a clear view of edge
                before you trade.
              </p>
              <ul className='list-disc list-inside text-[#0A1B3F] space-y-2 text-sm'>
                <li>Real-time AI probability updates</li>
                <li>Transparent YES/NO liquidity and expiry dates</li>
                <li>Simple, mobile-first layout for fast decisions</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
