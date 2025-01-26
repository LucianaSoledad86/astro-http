import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_BYOvv3OD.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/lucia/OneDrive/Escritorio/Luciana/Astro/05-Astro-http/src/components/FormattedDate.astro", undefined);

export { $$FormattedDate as $ };
