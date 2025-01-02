'use client'

import { FC, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Program, web3 } from '@project-serum/anchor'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { BarChart, Activity, Users, Sparkles, Star } from 'lucide-react'

const StudyRoom: FC = () => {
  const { publicKey } = useWallet()
  const [roomName, setRoomName] = useState('')
  const [goal, setGoal] = useState('')
  const [stake, setStake] = useState('')
  const [deadline, setDeadline] = useState('')

  const createStudyRoom = async () => {
    if (!publicKey) return
    try {
      const stakeAmount = new web3.BN(parseFloat(stake) * web3.LAMPORTS_PER_SOL)
      const deadlineTimestamp = new Date(deadline).getTime() / 1000
      // Program call implementation
      console.log('Study room created:', { roomName, goal, stake: stakeAmount.toString(), deadline: deadlineTimestamp })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className=" mx-auto p-6 space-y-6">
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <div className="flex items-center justify-center gap-2 mb-5">
          <p className="h-5 w-5 text-[#9eff00]" />
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

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create a Study Room</CardTitle>
          <CardDescription>Set up your study goals and stake tokens</CardDescription>
        </CardHeader>
        <CardContent>
          <WalletMultiButton className="mb-6" />
          
          {publicKey && (
            <form onSubmit={(e) => { e.preventDefault(); createStudyRoom() }} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="roomName" className="text-zinc-200">Room Name</Label>
                <Input
                  id="roomName"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  placeholder="Enter room name"
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goal">Study Goal</Label>
                <Textarea
                  id="goal"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Describe your study goal"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="stake">Stake Amount (SOL)</Label>
                <Input
                  id="stake"
                  type="number"
                  value={stake}
                  onChange={(e) => setStake(e.target.value)}
                  placeholder="Enter stake amount"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="deadline">Completion Deadline</Label>
                <Input
                  id="deadline"
                  type="datetime-local"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
              
              <Button type="submit" className="w-full bg-[#9eff00] hover:bg-[#8de600] text-black font-medium">
                Create Study Room
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default StudyRoom

