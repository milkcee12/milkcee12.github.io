import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const modules = import.meta.glob("../../../../lib/data/md/*.md");
  const project: any = await modules[
    `../../../../lib/data/md/${params.slug}.md`
  ]();

  const { title, date, tags } = project.metadata;
  const content = project.default;

  return {
    slug: params.slug,
    title: title,
    date: date,
    tags: tags,
    content: content,
  };
}
