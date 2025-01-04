'use client'

import { FC, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Program, web3, BN} from '@project-serum/anchor'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { BarChart, Activity, Users, Sparkles, Star, Album, File } from 'lucide-react'
import { CreateRoomForm } from './create-room'
import { StudyRoomDisplay } from './display-room'

export interface Goal {
  id: string
  description: string
  completed: boolean
}

export interface StudyRoom {
  id: string
  name: string
  goals: Goal[]
  stakeAmount: number
  deadline: Date
  creator: string
  participants: string[]
  completed: boolean
}

export const StudyRoom: FC = () => {
  const { publicKey } = useWallet()
  const [activeRoom, setActiveRoom] = useState<StudyRoom | null>(null)

  const createNewRoom = async (data: {
    name: string
    goals: string[]
    stakeAmount: number
    deadline: Date
  }) => {
    if (!publicKey) return

    try {
      const stakeAmount = new BN(data.stakeAmount * web3.LAMPORTS_PER_SOL)
      
      const room: StudyRoom = {
        id: Math.random().toString(),
        name: data.name,
        goals: data.goals.map(description => ({
          id: Math.random().toString(),
          description,
          completed: false
        })),
        stakeAmount: data.stakeAmount,
        deadline: data.deadline,
        creator: publicKey.toString(),
        participants: [publicKey.toString()],
        completed: false
      }

      setActiveRoom(room)
      // TODO: smart contract here
      console.log('Creating room:', room)
    } catch (error) {
      console.error('Error creating room:', error)
    }
  }

  const handleGoalToggle = (goalId: string) => {
    if (!activeRoom) return

    setActiveRoom({
      ...activeRoom,
      goals: activeRoom.goals.map(goal =>
        goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
      )
    })
  }

  const handleComplete = async () => {
    if (!activeRoom) return

    try {
      // TODO: Call your smart contract here to release stakes
      console.log('Completing room:', activeRoom)
    } catch (error) {
      console.error('Error completing room:', error)
    }
  }

  return (
    <div className=" mx-auto p-6 space-y-6">
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <div className="flex items-center justify-center gap-2 mb-5">
          <Sparkles className="h-5 w-5 text-[#9eff00]" />
          <span className="text-[#9eff00] font-medium">Get Started</span>
      </div>

      <div className="flex items-center justify-center gap-2 mb-10">
          <h1 className = "text-4xl font-display text-zinc-100 tracking-tight leading-tight text-center">
          Create a Study Room
          </h1>
      </div>

      <div className="flex items-center justify-center mb-[4em]">
        <WalletMultiButton ></WalletMultiButton>
      </div>

      {publicKey && !activeRoom && (
        <CreateRoomForm onSubmit = {createNewRoom} />
        )}
    
      {activeRoom && (
        <StudyRoomDisplay
          room={activeRoom}
          onGoalToggle={handleGoalToggle}
          onComplete={handleComplete}
        />
      )}

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
    </div>
  )
}

export default StudyRoom

