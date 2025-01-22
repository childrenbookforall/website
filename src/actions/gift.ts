import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { db, Self, LovedOne, CBA } from 'astro:db'

const phoneRegex = new RegExp(`^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`);

export const gift = {
  chooseOption: defineAction({
    accept: 'form',
    input: z.object({
      receiver: z.string(),
    }),
    handler: async (input) => {
      return input;
    },
  }),
  chooseTheme: defineAction({
    accept: 'form',
    input: z.object({
      theme: z.string(),
      budget: z.string(),
      surpriseTheme: z.boolean()
    }),
    handler: async (input) => {
      return input;
    },
  }),
  toSelf: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.string().regex(phoneRegex),
      message: z.string(),
      address1: z.string(),
      address2: z.string(),
      city: z.string(),
      state: z.string(),
      pincode: z.number(),
      theme: z.string(),
      budget: z.number(),
      surpriseTheme: z.boolean()
    }),
    handler: async (input) => {
      const giftToSelf = {
        name: input.name,
        email: input.email,
        phone: input.phone,
        message: input.message,
        address1: input.address1,
        address2: input.address2,
        city: input.city,
        state: input.state,
        pincode: input.pincode,
        theme: input.theme,
        budget: input.budget,
        surpriseTheme: input.surpriseTheme
      }
      const updateGiftToSelf = await db
        .insert(Self)
        .values(giftToSelf)
        .returning();
      //Send a calendar invite to the gmail for the event

      return updateGiftToSelf;
    },
  }),
  toLovedOne: defineAction({
    accept: 'form',
    input: z.object({
      senderName: z.string(),
      senderEmail: z.string().email(),
      senderPhone: z.string().regex(phoneRegex),
      receiverName: z.string(),
      receiverPhone: z.string().regex(phoneRegex),
      message: z.string(),
      address1: z.string(),
      address2: z.string(),
      city: z.string(),
      state: z.string(),
      pincode: z.number(),
      theme: z.string(),
      budget: z.number(),
      surpriseTheme: z.boolean()
    }),
    handler: async (input) => {
      const giftToLovedOne = {
        senderName: input.senderName,
        senderEmail: input.senderEmail,
        senderPhone: input.senderPhone,
        receiverName: input.receiverName,
        receiverPhone: input.receiverPhone,
        message: input.message,
        address1: input.address1,
        address2: input.address2,
        city: input.city,
        state: input.state,
        pincode: input.pincode,
        theme: input.theme,
        budget: input.budget,
        surpriseTheme: input.surpriseTheme
      }
      const updateGiftToLovedOne = await db
        .insert(LovedOne)
        .values(giftToLovedOne)
        .returning();
      //Send a calendar invite to the gmail for the event

      return updateGiftToLovedOne;
    },
  }),
  toCBA: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.string().regex(phoneRegex),
      message: z.string(),
      theme: z.string().nullable(),
      budget: z.number(),
      surpriseTheme: z.boolean()
    }),
    handler: async (input) => {
      const giftToCBA = {
        name: input.name,
        email: input.email,
        phone: input.phone,
        message: input.message,
        theme: input.theme,
        budget: input.budget,
      }
      const updateGiftToCBA = await db
        .insert(CBA)
        .values(giftToCBA)
        .returning();
      //Send a calendar invite to the gmail for the event

      return updateGiftToCBA;
    },
  })
}