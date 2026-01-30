import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Shield, Zap, Check, Star, Trophy, Target, Instagram, Twitter, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DISCORD_LINK = "https://discord.gg/GS5HJfh2";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1629] text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2147FF]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#2147FF]/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69773910f2d4bef7a3411f95/6ec43501b_ChatGPTImageJan29202607_38_49AM.png" 
            alt="Oddsfolio" 
            className="h-10 w-auto"
          />
        </div>
        <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-6 rounded-full transition-all hover:scale-105">
            Join Discord
          </Button>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 pt-16 md:pt-24 pb-20 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2147FF]/10 border border-[#2147FF]/20 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-[#4D7CFF] font-medium">Join 1,000+ Active Members</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Win Smarter with{' '}
            <span className="bg-gradient-to-r from-[#4D7CFF] via-[#2147FF] to-[#1E40FF] bg-clip-text text-transparent">
              Expert Picks
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join the most trusted sports predictions community. Get daily picks, 
            real-time analysis, and connect with fellow bettors – completely free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-[#2147FF] to-[#1E40FF] hover:from-[#1E40FF] hover:to-[#1933CC] text-white font-bold text-lg px-10 py-6 rounded-full shadow-lg shadow-[#2147FF]/25 transition-all hover:scale-105 hover:shadow-[#2147FF]/40 group">
                Join Free Discord
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <span className="text-gray-500 text-sm">No credit card required</span>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { value: '94%', label: 'Win Rate', icon: Target },
            { value: '1K+', label: 'Members', icon: Users },
            { value: '400+', label: 'Monthly Picks', icon: TrendingUp },
            { value: '24/7', label: 'Community', icon: Zap },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
              <stat.icon className="w-6 h-6 text-[#4D7CFF] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 md:px-12 py-24 bg-gradient-to-b from-transparent via-[#2147FF]/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Oddsfolio?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Everything you need to make informed betting decisions</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Expert Analysis',
                description: 'Our team of analysts provides detailed breakdowns and reasoning behind every pick.',
              },
              {
                icon: Users,
                title: 'Active Community',
                description: 'Connect with thousands of like-minded bettors, share insights, and learn together.',
              },
              {
                icon: Shield,
                title: 'Transparent Results',
                description: 'We track every pick publicly. No hidden losses, no fake screenshots.',
              },
              {
                icon: BookOpen,
                title: 'Education',
                description: 'Learn betting strategies, and bankroll management from experts.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#2147FF]/30 transition-all hover:shadow-lg hover:shadow-[#2147FF]/5"
                >
                <div className="w-14 h-14 rounded-2xl bg-[#2147FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#2147FF]/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-[#4D7CFF]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 px-6 md:px-12 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-gray-400">Start free, upgrade when you're ready</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08]"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500">/forever</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Access to free picks channel',
                  'Community chat access',
                  'Bankroll management tips',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-[#4D7CFF] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full py-6 rounded-full border-white/20 hover:bg-white/5 text-gray-900 hover:text-gray-700 font-semibold">
                  Join Our Discord
                </Button>
              </a>
            </motion.div>

            {/* Premium Tier */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#2147FF]/20 to-[#1E40FF]/10 border border-[#2147FF]/30 relative overflow-hidden"
              >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-[#2147FF] text-xs font-semibold">POPULAR</span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  VIP <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$49.99</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Everything in Free',
                  'All VIP picks (5-8 Daily)',
                  'Value betting picks (5-8 Daily)',
                  'Arbitrage betting picks (5-8 Daily)',
                  'Betting education',
                  'VIP Discord channels',
                  'Direct expert access',
                  'VIP Giveaways',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <Check className="w-5 h-5 text-[#4D7CFF] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button disabled className="w-full py-6 rounded-full bg-gray-600 text-white font-semibold cursor-not-allowed">
                Coming Soon
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 md:px-12 py-24 bg-gradient-to-b from-transparent via-[#2147FF]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Bettors</h2>
            <p className="text-gray-400">See what our community members say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Marcus T.',
                text: "Finally a picks community that's actually transparent. The free tier alone has been profitable for me.",
                rating: 5,
              },
              {
                name: 'Jake R.',
                text: "VIP is worth every penny. The value betting and arbitrage picks have been game-changers for my bankroll.",
                rating: 5,
              },
              {
                name: 'DeShawn M.',
                text: "Best Discord server I've joined. The VIP channels and direct expert access are incredible. Picks are consistently solid.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <p className="text-sm text-gray-500 font-medium">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 px-6 md:px-12 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about Oddsfolio</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/[0.06] rounded-2xl bg-white/[0.03] px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Is Oddsfolio really free to join?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed">
                Yes! Our Discord community is completely free to join. You get access to free picks, community chat, and bankroll management tips without any payment required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-white/[0.06] rounded-2xl bg-white/[0.03] px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What makes your picks different from others?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed">
                We provide transparent, data-driven analysis with every pick. Our team tracks all results publicly, and we focus on long-term profitability rather than flashy win streaks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-white/[0.06] rounded-2xl bg-white/[0.03] px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How do I access VIP picks?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed">
                VIP access is coming soon! Once launched, you'll be able to upgrade directly through our website to get access to premium picks, arbitrage opportunities, and exclusive channels.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-white/[0.06] rounded-2xl bg-white/[0.03] px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Do you guarantee winning picks?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed">
                No service can guarantee wins in sports betting. We provide well-researched picks and maintain transparency about our results, but betting always involves risk.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-white/[0.06] rounded-2xl bg-white/[0.03] px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What sports do you cover?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed">
                We cover major sports including NFL, NBA, MLB, NHL, and soccer. Our analysts specialize in finding value across multiple leagues and competitions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#2147FF]/20 via-[#1E40FF]/10 to-transparent border border-[#2147FF]/20"
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69773910f2d4bef7a3411f95/f73a4e8c5_ChatGPTImageJan29202607_24_01AM.png" 
            alt="Oddsfolio" 
            className="h-24 w-auto mx-auto mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Winning?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Join thousands of bettors already using Oddsfolio to make smarter picks. It's free to start.
          </p>
          <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-lg px-12 py-6 rounded-full shadow-lg shadow-[#5865F2]/25 transition-all hover:scale-105 group">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Our Discord
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-12 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69773910f2d4bef7a3411f95/6ec43501b_ChatGPTImageJan29202607_38_49AM.png" 
              alt="Oddsfolio" 
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/oddsfolio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://x.com/oddsfolio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5865F2] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Oddsfolio. All rights reserved. Bet responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
}