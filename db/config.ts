import { defineDb, defineTable, column, NOW } from 'astro:db';

const Members = defineTable({
  columns: {
    name: column.text(),
    email: column.text({primaryKey: true}),
    phone: column.text(),
    message: column.text({optional: true}),
    about: column.text({optional: true}),
    connection: column.text({optional: true}),
    place: column.text({optional: true}),
    date: column.date({default: NOW})
  }
});

const ReadingConfirmations = defineTable({
  columns: {
    name: column.text(),
    email: column.text(),
    phone: column.text(),
    contribution: column.number(),
    readingDate: column.date(),
    confirmationDate: column.date({default: NOW}),
  },
  indexes: [
    {on: ["email", "readingDate"], unique: true}
  ]
});

const Readings = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    title: column.text(),
    bookCover: column.text(),
    date: column.date(),
    startTime: column.number(),
    endTime: column.number(),
    location: column.text(),
    description: column.text(),
    calendar: column.text(),
    facilitators: column.json()
  }
});

const Self = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    email: column.text(),
    phone: column.text(),
    message: column.text(),
    address1: column.text(),
    address2: column.text(),
    city: column.text(),
    state: column.text(),
    pincode: column.number(),
    theme: column.text(),
    budget: column.number(),
    date: column.date({default: NOW}),
    surpriseTheme: column.boolean({default: false})
  }
});

const LovedOne = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    senderName: column.text(),
    senderEmail: column.text(),
    senderPhone: column.text(),
    receiverName: column.text(),
    receiverPhone: column.text(),
    message: column.text(),
    address1: column.text(),
    address2: column.text(),
    city: column.text(),
    state: column.text(),
    pincode: column.number(),
    theme: column.text(),
    budget: column.number(),
    date: column.date({default: NOW}),
    surpriseTheme: column.boolean({default: false})
  }
});

const CBA = defineTable({
  columns :{
    id: column.number({primaryKey: true}),
    name: column.text(),
    email: column.text(),
    phone: column.text(),
    message: column.text(),
    theme: column.text({optional: true}),
    budget: column.number(),
    date: column.date({default: NOW}),
    surpriseTheme: column.boolean({default: true})
  }
});

export default defineDb({
  tables: { ReadingConfirmations, Readings, Members, Self, LovedOne, CBA },
})