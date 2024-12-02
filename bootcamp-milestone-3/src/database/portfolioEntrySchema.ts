import mongoose, { Schema } from "mongoose";

type PortfolioEntry = {
  title: string;
  description: string;
  date: Date;
};

const portfolioEntrySchema = new Schema<PortfolioEntry>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
});

const PortfolioEntry =
  mongoose.models["portfolioEntries"] ||
  mongoose.model("portfolioEntries", portfolioEntrySchema);

export default PortfolioEntry;