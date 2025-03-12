import { notFound } from 'next/navigation';
import { prisma } from '@/prisma/prisma-client';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  // Ensure params is awaited
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
