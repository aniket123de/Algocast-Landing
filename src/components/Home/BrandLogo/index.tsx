'use client';
import Slider from 'react-infinite-logo-slider';
import { brandList } from './data';
import Image from 'next/image';

function BrandLogo() {
    return (
        <section>
            <div className="2xl:py-20 py-11">
                <div className="container">
                    <div className="gap-4">
                        <div className="flex justify-center text-center py-4 relative">
                            <p className="text-foreground font-medium">
                                Built using the best <span className='text-primary'>Technologies</span>
                            </p>
                        </div>

                        <div className="py-3 Xsm:py-7 rounded-2xl bg-gradient-to-r from-[#C8A97A] via-[#B08B5C] to-[#8B6544] shadow-inner px-4">
                            <Slider
                                width="200px"
                                duration={20}
                                pauseOnHover={true}
                                blurBorders={false}
                            >
                                {brandList.map((items, index) => (
                                    <Slider.Slide>
                                        <div key={index} className='mr-10 flex items-center justify-center'>
                                            <Image src={items?.image} alt={items?.title} width={120} height={60} className='object-contain h-10 w-auto max-w-24' unoptimized />
                                        </div>
                                    </Slider.Slide>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default BrandLogo;
