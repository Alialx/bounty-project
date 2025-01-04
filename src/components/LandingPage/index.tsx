'use client'

import { FC } from 'react'
import { Button } from "@/components/ui/button"
import { BarChart, Activity, Users, Sparkles, Album, } from 'lucide-react'

export const LandingPage: FC = () => {
  
  return (
    <div className=" mx-auto p-6 space-y-6">
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <div className="flex items-center justify-center gap-2 mb-5 pt-[4em]">
          <Album className="h-5 w-5 text-[#9eff00]" />
          <span className="text-[#9eff00] font-medium">How it works</span>
      </div>

      <div className="flex items-center justify-center gap-2 mb-10">
          <h1 className = "text-4xl  mb-4 font-display text-zinc-100 tracking-tight leading-tight text-center">
            Take Charge of Your Studies
          </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 
        <div className="group relative bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl border border-zinc-800">
          <div className="h-16 w-16 rounded-full bg-[#9eff00] bg-opacity-20 flex items-center justify-center mb-6">
            <BarChart className="h-8 w-8 text-[#9eff00]" />
          </div>
          <h3 className="text-2xl text-zinc-300 mb-4 font-display">
            Effective Learning
          </h3>
          <p className="text-zinc-400 text-l">
            Track your progress and stay motivated with our reward system.
          </p>
        </div>

        <div className="group relative bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl border border-zinc-800">
          <div className="h-16 w-16 rounded-full bg-[#9eff00] bg-opacity-20 flex items-center justify-center mb-6">
            <Activity className="h-8 w-8 text-[#9eff00]" />
          </div>
          <h3 className="text-2xl text-zinc-300 mb-4 font-display">
            Customized Goals
          </h3>
          <p className="text-zinc-400 text-l">
            Set personalized goals that match your learning style and pace.
          </p>
        </div>

        <div className="group relative bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl border border-zinc-800">
          <div className="h-16 w-16 rounded-full bg-[#9eff00] bg-opacity-20 flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-[#9eff00]" />
          </div>
          <h3 className="text-2xl text-zinc-300 mb-4 font-display">
            Collaborative Learning
          </h3>
          <p className="text-zinc-400 text-l">
            Join study rooms and collaborate with others in real-time.
          </p>
        </div>
      </div>
    </div>

        <div className="flex items-center justify-center gap-2 mb-5">
            <Sparkles className="h-5 w-5 text-[#9eff00]" />
            <span className="text-[#9eff00] font-medium">Get Started</span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-[2em]">
            <h1 className = "text-4xl font-display text-zinc-100 tracking-tight leading-tight text-center">
            Create a Study Room
            </h1>
        </div>

        <div className="flex items-center justify-center mb-[4em]">
            <Button className = "bg-[#9eff00] text-zinc-900 text-lg pl-6 pr-6">Get Started</Button>
        </div>
    </div>
  )
}

export default LandingPage

