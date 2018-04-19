import NewsService from "./NewsService";
import UsersService from "./UsersService";
import ChartsService from "./ChartsService";

const Services = {
  news: new NewsService(),
  users: new UsersService(),
  charts: new ChartsService()
};

export default Services;
