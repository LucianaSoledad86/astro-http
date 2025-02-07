import type { APIRoute } from 'astro';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET: APIRoute = async ({ params }) => {
  try {
    const { id } = params;
    
    const cliente = await prisma.cliente.findUnique({
      where: { id: Number(id) }
    });

    if (!cliente) {
      return new Response(JSON.stringify({
        error: 'Cliente no encontrado'
      }), { 
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    
    return new Response(JSON.stringify({
      method: 'GET',
      clientId: Number(id),
      ...cliente
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al obtener cliente' }), { status: 500 });
  }
}; 

export const PATCH: APIRoute = async ({ params, request }) => {
  try {
    const { id } = params;
    const body = await request.json();
    
    const cliente = await prisma.cliente.update({
      where: { id: Number(id) },
      data: body
    });
    
    return new Response(JSON.stringify({
      method: 'PATCH',
      clientId: Number(id),
      ...cliente
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al actualizar cliente' }), { status: 500 });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const { id } = params;
    
    await prisma.cliente.delete({
      where: { id: Number(id) }
    });
    
    return new Response(JSON.stringify({
      method: 'DELETE',
      clientId: Number(id)
    }), { 
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al eliminar cliente' }), { status: 500 });
  }
};

