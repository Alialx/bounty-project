use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount};

declare_id!("your_program_id");

#[program]
pub mod study_rewards {
    use super::*;

    pub fn initialize_study_room(
        ctx: Context<InitializeRoom>,
        name: String,
        goal: String,
        required_stake: u64,
        completion_deadline: i64,
    ) -> Result<()> {
        let room = &mut ctx.accounts.room;
        room.name = name;
        room.goal = goal;
        room.required_stake = required_stake;
        room.completion_deadline = completion_deadline;
        room.creator = ctx.accounts.creator.key();
        room.participants = vec![ctx.accounts.creator.key()];
        room.completed = false;
        Ok(())
    }

    pub fn join_room(ctx: Context<JoinRoom>) -> Result<()> {
        let room = &mut ctx.accounts.room;
        let transfer_ix = token::Transfer {
            from: ctx.accounts.participant_token.to_account_info(),
            to: ctx.accounts.room_token.to_account_info(),
            authority: ctx.accounts.participant.to_account_info(),
        };

        token::transfer(
            CpiContext::new(
                ctx.accounts.token_program.to_account_info(),
                transfer_ix,
            ),
            room.required_stake,
        )?;

        room.participants.push(ctx.accounts.participant.key());
        Ok(())
    }

    pub fn mark_complete(ctx: Context<MarkComplete>) -> Result<()> {
        let room = &mut ctx.accounts.room;
        room.completed = true;
        Ok(())
    }
}

#[account]
pub struct StudyRoom {
    pub name: String,
    pub goal: String,
    pub required_stake: u64,
    pub completion_deadline: i64,
    pub creator: Pubkey,
    pub participants: Vec<Pubkey>,
    pub completed: bool,
}

#[derive(Accounts)]
pub struct InitializeRoom<'info> {
    #[account(init, payer = creator, space = 1000)]
    pub room: Account<'info, StudyRoom>,
    #[account(mut)]
    pub creator: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct JoinRoom<'info> {
    #[account(mut)]
    pub room: Account<'info, StudyRoom>,
    pub participant: Signer<'info>,
    #[account(mut)]
    pub participant_token: Account<'info, TokenAccount>,
    #[account(mut)]
    pub room_token: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct MarkComplete<'info> {
    #[account(mut)]
    pub room: Account<'info, StudyRoom>,
    pub creator: Signer<'info>,
}