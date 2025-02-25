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
    message: column.text({optional: true}),
    calendar: column.text(),
    facilitators: column.json(),
    tags: column.text({optional: true})
  }
});


const SelfGift = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    theme: column.text(),
    budget: column.number(),
    date: column.date({default: NOW}),
    name: column.text(),
    email: column.text(),
    address: column.text(),
    phone: column.text(),
    message: column.text({optional: true})
  }
});

const LovedOneGift = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    theme: column.text(),
    budget: column.number(),
    date: column.date({default: NOW}),
    senderName: column.text(),
    senderEmail: column.text(),
    senderPhone: column.text(),
    receiverName: column.text(),
    receiverPhone: column.text(),
    receiverAddress: column.text(),
    message: column.text({optional: true})
  }
});

const CBAGift = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    theme: column.text(),
    budget: column.number(),
    date: column.date({default: NOW}),
    name: column.text(),
    email: column.text(),
    phone: column.text(),
    message: column.text({optional: true})
  }
});

export default defineDb({
  tables: { ReadingConfirmations, Readings, Members, SelfGift, LovedOneGift, CBAGift },
})