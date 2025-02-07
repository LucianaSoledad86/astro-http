import type { APIRoute } from 'astro';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET: APIRoute = async () => {
  try {
    const clientes = await prisma.cliente.findMany();
    return new Response(JSON.stringify({
      method: 'GET',
      clientes
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al obtener clientes' }), { status: 500 });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const cliente = await prisma.cliente.create({
      data: {
        name: body.name,
        age: body.age,
        isActive: body.isActive ?? true
      }
    });
    return new Response(
      JSON.stringify({
        method: 'POST',
        ...cliente,
      }), {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al crear cliente' }), { status: 500 });
  }
}; 