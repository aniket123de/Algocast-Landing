'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Work = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const bottomAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const steps = [
    {
      icon: '/images/chooseus/chooseus-icon-1.svg',
      title: 'Detect',
      text: 'AI scans real-time social trends and identifies high-impact events.',
    },
    {
      icon: '/images/chooseus/chooseus-icon-2.svg',
      title: 'Generate',
      text: 'Structured YES/NO prediction markets are created automatically.',
    },
    {
      icon: '/images/chooseus/chooseus-icon-3.svg',
      title: 'Trade & Earn',
      text: 'Buy outcome tokens, track probabilities, and redeem winnings instantly.',
    },
  ]

  return (
    <section className='' id='work'>
      <div className='container px-4 mx-auto lg:max-w-(--breakpoint-xl)'>
        <div ref={ref} className='grid grid-cols-12 items-center'>
          <motion.div
            {...bottomAnimation}
            className='lg:col-span-7 col-span-12'>
            <div className='flex flex-col gap-3'>
              <p className='text-primary font-medium'>
                How AlgoCast works
              </p>
              <h2 className='sm:text-5xl text-3xl text-foreground lg:w-full md:w-70% font-medium'>
                Turn social trends into tradable markets
              </h2>
            </div>
            <div className='grid md:grid-cols-3 gap-7 mt-11'>
              {steps.map((step, index) => (
                <div key={index} className='flex flex-col gap-3'>
                  <div className='p-3 bg-[#3A4860] rounded-full w-fit'>
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={25}
                      height={25}
                    />
                  </div>
                  <h3 className='text-foreground font-semibold text-xl'>
                    {index + 1}. {step.title}
                  </h3>
                  <p className='text-foreground/80 text-sm'>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...TopAnimation} className='lg:col-span-5 col-span-12'>
            <div className='2xl:-mr-40 mt-9 flex justify-center'>
              <Image
                src='/images/geminipic/work.webp'
                alt='image'
                width={600}
                height={425}
                className='lg:w-full'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
