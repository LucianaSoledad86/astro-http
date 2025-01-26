import { g as getEntry } from '../../../chunks/_astro_content_M2D6vPUe.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, request }) => {
  const { slug } = params;
  const post = await getEntry("blog", slug);
  if (!post) {
    return new Response(JSON.stringify({ msg: `Post ${slug} not found` }), {
      status: 404,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return new Response(JSON.stringify(post), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
const POST = async ({ params, request }) => {
  const body = await request.json();
  return new Response(
    JSON.stringify({
      method: "POST",
      ...body
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
const PUT = async ({ params, request }) => {
  const body = await request.json();
  return new Response(
    JSON.stringify({
      method: "",
      ...body
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
const PATCH = async ({ params, request }) => {
  const body = await request.json();
  return new Response(
    JSON.stringify({
      method: "PATCH",
      ...body
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
const DELETE = async ({ params, request }) => {
  const { slug } = params;
  return new Response(
    JSON.stringify({
      method: "DELETE",
      slug
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PATCH,
  POST,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
