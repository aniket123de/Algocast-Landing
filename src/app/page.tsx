
import { Metadata } from 'next';
import Hero from '@/components/Home/Hero';
import Work from '@/components/Home/work';
import TimeLine from '@/components/Home/timeline';
import Platform from '@/components/Home/platform';
import Portfolio from '@/components/Home/portfolio';
import Upgrade from '@/components/Home/upgrade';
import Perks from '@/components/Home/perks';
import GlobalReach from '@/components/Home/GlobalReach';
import Faq from '@/components/Home/Faq';

export const metadata: Metadata = {
  title: 'AlgoCast — Where Trends Become Tradable.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* How It Works */}
      <Work />
      {/* High-level metrics */}
      <GlobalReach />
      {/* Additional product narrative / timeline can stay as-is for now */}
      <TimeLine />
      {/* Wallet + ecosystem explainer */}
      <Platform />
      {/* Market preview */}
      <Portfolio />
      {/* Wallet benefits */}
      <Upgrade />
      {/* Why AlgoCast */}
      <Perks />
      <Faq />
    </main>
  );
}
