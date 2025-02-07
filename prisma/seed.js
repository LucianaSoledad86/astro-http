import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Limpia la tabla existente
  await prisma.cliente.deleteMany()

  // Inserta los clientes
  await prisma.cliente.createMany({
    data: [
      { id: 1, name: 'Kasim', age: 35, isActive: true },
      { id: 2, name: 'Fernando', age: 25, isActive: true },
      { id: 3, name: 'Carlos', age: 37, isActive: true },
      { id: 4, name: 'Melissa', age: 25, isActive: false },
      { id: 5, name: 'Emin', age: 19, isActive: true }
    ]
  })

  console.log('Seed executed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })