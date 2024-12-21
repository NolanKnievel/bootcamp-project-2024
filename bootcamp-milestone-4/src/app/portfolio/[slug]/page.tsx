// import CommentComponent from "@/components/comment";
// import CommentBox from "@/components/commentBox";
type Props = {
  params: { slug: string };
};

async function getPortfolioEntry(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Portfolios/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch portfolio");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params: { slug } }: Props) {
  const portfolioEntry = await getPortfolioEntry(slug);

  if (portfolioEntry) {
    return (
      <div>
        <div className="border-wrap">
          <h1 className="page-title">{portfolioEntry.title}</h1>
          <p>{portfolioEntry.description}</p>
          <p>{portfolioEntry.date}</p>
          {/* <div>
            {portfolioEntry.comments.map((comment: Comment, index) => (
              <CommentComponent key={index} comment={comment} />
            ))}
          </div>
          <div>
            <CommentBox slug={slug} />
          </div> */}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="border-wrap">
          <h1 className="page-title">Portfolio Not Found :/</h1>
        </div>
      </div>
    );
  }
}
