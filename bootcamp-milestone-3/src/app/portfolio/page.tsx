import PortfolioEntryPreveiw from "@/components/portfolioEntryPreview";
import { connectPortfolioDB } from "@/database/database";
import PortfolioEntry from "@/database/portfolioEntrySchema";

async function getPortfolioEntries() {
  const url: string = process.env.PORTFOLIO_URI as string;

  await connectPortfolioDB();
  try {
    const entries = await PortfolioEntry.find().sort({ date: -1 }).orFail();

    const formattedEntries = entries.map((entry) => ({
      title: entry.title,
      description: entry.description,
      date: entry.date.toString(),
    }));

    return formattedEntries;
  } catch (err) {
    return null;
  }
}

export default async function Home() {
  const entries = await getPortfolioEntries();
  return (
    <div>
      <div className="border-wrap">
        <h1 className="page-title">Portfolio</h1>
        <div id="portfolio-container">
          {entries.map((entry) => (
            <PortfolioEntryPreveiw {...entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
