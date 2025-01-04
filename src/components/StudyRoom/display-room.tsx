'use client'

import { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Clock, Trophy } from 'lucide-react'
import type { StudyRoom } from '../StudyRoom'
import { toast } from 'react-hot-toast';

interface StudyRoomDisplayProps {
  room: StudyRoom
  onGoalToggle: (goalId: string) => void
  onComplete: () => void
}

export function StudyRoomDisplay({ room, onGoalToggle, onComplete }: StudyRoomDisplayProps) {
  const completedGoals = room.goals.filter(goal => goal.completed).length
  const progress = (completedGoals / room.goals.length) * 100
  const timeLeft = Math.max(0, new Date(room.deadline).getTime() - new Date().getTime())
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24))


  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{room.name}</span>
          <span className="text-sm font-normal flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {daysLeft} days left
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Goals</h3>
          <div className="space-y-2">
            {room.goals.map((goal) => (
              <div key={goal.id} className="flex items-center space-x-2">
                <Checkbox
                  id={goal.id}
                  checked={goal.completed}
                  onCheckedChange={() => onGoalToggle(goal.id)}
                />
                <label
                  htmlFor={goal.id}
                  className={`text-sm ${goal.completed ? 'line-through text-muted-foreground' : ''}`}
                >
                  {goal.description}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <Button
            onClick={onComplete}
            disabled={progress < 100}
            className="w-full"
          >
            <Trophy className="w-4 h-4 mr-2" />
            {progress < 100 ? 'Complete All Goals to Claim Reward' : 'Claim Reward'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

