'use client'

import { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Plus, X } from 'lucide-react'
import { format } from "date-fns"
import { toast } from 'react-hot-toast';

interface CreateRoomFormProps {
  onSubmit: (data: {
    name: string
    goals: string[]
    stakeAmount: number
    deadline: Date
  }) => void
}

export function CreateRoomForm({ onSubmit }: CreateRoomFormProps) {
  const [name, setName] = useState('')
  const [goals, setGoals] = useState([''])
  const [stakeAmount, setStakeAmount] = useState('')
  const [date, setDate] = useState<Date>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || goals.some(goal => !goal) || !stakeAmount || !date) {
      toast("Please fill in all required fields", {
          icon: "⚠️",
      });
      return;
    }

    onSubmit({
      name,
      goals: goals.filter(Boolean),
      stakeAmount: parseFloat(stakeAmount),
      deadline: date,
    })
  }

  const addGoal = () => setGoals([...goals, ''])
  
  const removeGoal = (index: number) => {
    setGoals(goals.filter((_, i) => i !== index))
  }

  const updateGoal = (index: number, value: string) => {
    const newGoals = [...goals]
    newGoals[index] = value
    setGoals(newGoals)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create a Study Room</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Room Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter room name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Study Goals</Label>
            <div className="space-y-2">
              {goals.map((goal, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={goal}
                    onChange={(e) => updateGoal(index, e.target.value)}
                    placeholder="Enter a goal"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => removeGoal(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={addGoal}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Goal
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="stake">Stake Amount (SOL)</Label>
            <Input
              id="stake"
              type="number"
              step="0.01"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              placeholder="Enter stake amount"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Completion Deadline</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="bg-zinc text-white"
              />
              </PopoverContent>
            </Popover>
          </div>

          <Button type="submit" className="w-full">
            Create Study Room
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

