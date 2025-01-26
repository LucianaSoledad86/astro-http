export { renderers } from '../../renderers.mjs';

const GET = async ({ params, request }) => {
  const person = {
    name: "Luciana",
    age: 38
  };
  return new Response(JSON.stringify(person), {
    status: 201,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
