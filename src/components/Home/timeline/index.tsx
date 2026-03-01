'use client'
import Image from 'next/image'
import { timelineData } from '@/app/api/data'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TimeLine = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }
  return (
    <section className='md:pt-40 pt-9' id='development'>
      <div className='container lg:px-16 px-4'>
        <div className='text-center'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <div className='flex flex-col gap-4'>
              <p className='text-foreground font-medium'>
                We deliver <span className='text-primary'>best solution</span>
              </p>
              <h2 className='text-foreground sm:text-5xl text-3xl font-medium lg:w-80% mx-auto mb-20'>
                One application with multiple options to give you freedom of buying & selling
              </h2>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <div className='md:grid hidden grid-cols-[1fr_auto_1fr] items-center gap-6'>
              {/* Left labels */}
              <div className='flex flex-col justify-between h-full gap-16'>
                {/* Planning */}
                <div className='flex items-center justify-end gap-4'>
                  <div className='text-right'>
                    <h3 className='text-[#0A1B3F] text-xl font-semibold mb-1'>Planning</h3>
                    <p className='text-sm text-[#0A1B3F]'>Map the crypto projects scope with framer template</p>
                  </div>
                  <div className='bg-[#3A4860] backdrop-blur-xs p-4 rounded-full shrink-0'>
                    <Image src='/images/solution/solution-icon-1.svg' alt='Planning' width={40} height={40} className='w-10 h-10' />
                  </div>
                </div>
                {/* Prototype */}
                <div className='flex items-center justify-end gap-4'>
                  <div className='text-right'>
                    <h3 className='text-[#0A1B3F] text-xl font-semibold mb-1'>Prototype</h3>
                    <p className='text-sm text-[#0A1B3F]'>Build crypto website test for your product</p>
                  </div>
                  <div className='bg-[#3A4860] backdrop-blur-xs p-4 rounded-full shrink-0'>
                    <Image src='/images/solution/solution-icon-3.svg' alt='Prototype' width={40} height={40} className='w-10 h-10' />
                  </div>
                </div>
              </div>

              {/* Center image */}
              <div className='w-full max-w-lg'>
                <Image
                  src='\images\geminipic\timeline.webp'
                  alt='image'
                  width={1220}
                  height={1000}
                  className='w-full h-auto'
                />
              </div>

              {/* Right labels */}
              <div className='flex flex-col justify-between h-full gap-16'>
                {/* Refinement */}
                <div className='flex items-center justify-start gap-4'>
                  <div className='bg-[#3A4860] backdrop-blur-xs p-4 rounded-full shrink-0'>
                    <Image src='/images/solution/solution-icon-2.svg' alt='Refinement' width={40} height={40} className='w-10 h-10' />
                  </div>
                  <div className='text-left'>
                    <h3 className='text-[#0A1B3F] text-xl font-semibold mb-1'>Refinement</h3>
                    <p className='text-sm text-[#0A1B3F]'>Refine &amp; improve your crypto landing page</p>
                  </div>
                </div>
                {/* Support */}
                <div className='flex items-center justify-start gap-4'>
                  <div className='bg-[#3A4860] backdrop-blur-xs p-4 rounded-full shrink-0'>
                    <Image src='/images/solution/solution-icon-4.svg' alt='Support' width={40} height={40} className='w-10 h-10' />
                  </div>
                  <div className='text-left'>
                    <h3 className='text-[#0A1B3F] text-xl font-semibold mb-1'>Support</h3>
                    <p className='text-sm text-[#0A1B3F]'>Deploy product live and ensure expert support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 md:hidden'>
              {timelineData.map((item, index) => (
                <div key={index} className='flex items-center gap-6'>
                  <div className='bg-[#3A4860] p-6 rounded-full'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className='text-start'>
                    <h4 className='text-2xl text-[#0A1B3F] mb-2'>{item.title}</h4>
                    <p className='text-[#0A1B3F] text-lg'>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine
