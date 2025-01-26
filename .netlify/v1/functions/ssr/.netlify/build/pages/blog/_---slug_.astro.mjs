import { e as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_BYOvv3OD.mjs';
import 'kleur/colors';
import { r as renderEntry, a as getCollection } from '../../chunks/_astro_content_M2D6vPUe.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_CMFh8raj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/lucia/OneDrive/Escritorio/Luciana/Astro/05-Astro-http/src/pages/blog/[...slug].astro", undefined);

const $$file = "C:/Users/lucia/OneDrive/Escritorio/Luciana/Astro/05-Astro-http/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
