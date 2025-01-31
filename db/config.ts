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
    facilitators: column.json()
  }
});


export default defineDb({
  tables: { ReadingConfirmations, Readings, Members },
})