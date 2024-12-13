type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params: { slug } }: Props) {
  let blog = await getBlog(slug);

  return (
    <div>
      <div className="border-wrap">
        <h1 className="page-title">{blog.title}</h1>
        <p>{blog.description}</p>
        <p>{blog.date}</p>
      </div>
    </div>
  );
}
