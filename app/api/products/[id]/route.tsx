import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const productID = parseInt(params.id);
  const product = await prisma.product.findUnique({
    where: { id: productID },
  });
  if (!product)
    return NextResponse.json({ error: "No product found" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const productID = parseInt(params.id);
  const body = await request.json();
  const product = await prisma.product.findUnique({
    where: { id: productID },
  });
  if (!product)
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  const updatedProduct = await prisma.product.update({
    where: { id: product.id },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId = parseInt(params.id);
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  await prisma.product.delete({
    where: { id: product.id },
  });
  return NextResponse.json({});
}
