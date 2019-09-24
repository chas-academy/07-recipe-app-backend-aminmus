import { prisma } from '../src/generated/prisma-client';

async function main(): Promise<void> {
  const dietLabels = [
    { label: 'Balanced' },
    { label: 'High-Protein' },
    { label: 'Low-Fat' },
    { label: 'Low-Carb' },
  ];
  const healthLabels = [
    { label: 'Vegan' },
    { label: 'Vegetarian' },
    { label: 'Sugar-Conscious' },
    { label: 'Peanut-Free' },
    { label: 'Tree-Nut-Free' },
    { label: 'Alcohol-Free' },
    { label: 'Alcohol' },
  ];

  await dietLabels.forEach(async (curLabel) => {
    await prisma.createdietLabel(curLabel);
  });

  await healthLabels.forEach(async (curLabel) => {
    await prisma.createhealthLabel(curLabel);
  });
}

main();
