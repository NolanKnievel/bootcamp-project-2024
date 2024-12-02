import mongoose from "mongoose";

const blog_url: string = process.env.MONGO_URI as string;
let blogConnection: typeof mongoose;

export const connectBlogDB = async () => {
  if (!blogConnection) {
    blogConnection = await mongoose.connect(blog_url);
    return blogConnection;
  }
};

const portfolio_url: string = process.env.MONGO_URI as string;
let portfolioConnection: typeof mongoose;

export const connectPortfolioDB = async () => {
  if (!portfolioConnection) {
    portfolioConnection = await mongoose.connect(portfolio_url);
    return portfolioConnection;
  }
};

