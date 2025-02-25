import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { db, SelfGift, LovedOneGift, CBAGift } from 'astro:db'

const phoneRegex = new RegExp(`^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`);

export const gift = {
    giftToSelf: defineAction({
        accept: 'form',
        input: z.object({
            theme: z.string(),
            budget: z.number().gt(499),
            name: z.string(),
            email: z.string().email(),
            phone: z.string().regex(phoneRegex),
            address: z.string(),
            message: z.string(),
        }),
        handler: async (input) => {
            const data = {
                theme: input.theme,
                budget: input.budget,
                name: input.name,
                email: input.email,
                phone: input.phone,
                address: input.address,
                message: input.message
            }
            const sendGiftToSelf = await db
                .insert(SelfGift)
                .values(data)
                .returning();
            //Send a calendar invite to the gmail for the event

            return sendGiftToSelf;
        },
    }),
    giftToLovedOne: defineAction({
        accept: 'form',
        input: z.object({
            theme: z.string(),
            budget: z.number().gt(499),
            senderName: z.string(),
            senderEmail: z.string().email(),
            senderPhone: z.string().regex(phoneRegex),
            receiverName: z.string(),
            receiverPhone: z.string().regex(phoneRegex),
            receiverAddress: z.string(),
            message: z.string(),
        }),
        handler: async (input) => {
            const data = {
                theme: input.theme,
                budget: input.budget,
                senderName: input.senderName,
                senderEmail: input.senderEmail,
                senderPhone: input.senderPhone,
                receiverName: input.receiverName,
                receiverPhone: input.receiverPhone,
                receiverAddress: input.receiverAddress,
                message: input.message
            }
            const sendGiftToLovedOne = await db
                .insert(LovedOneGift)
                .values(data)
                .returning();
            //Send a calendar invite to the gmail for the event

            return sendGiftToLovedOne;
        },
    }),
    giftToCBA: defineAction({
        accept: 'form',
        input: z.object({
            theme: z.string(),
            budget: z.number().gt(499),
            name: z.string(),
            email: z.string().email(),
            phone: z.string().regex(phoneRegex),
            message: z.string(),
        }),
        handler: async (input) => {
            const data = {
                theme: input.theme,
                budget: input.budget,
                name: input.name,
                email: input.email,
                phone: input.phone,
                message: input.message
            }
            const sendGiftToCBA = await db
                .insert(CBAGift)
                .values(data)
                .returning();
            return sendGiftToCBA;
        },
    })
}