import NewsService from "./NewsService";
import UsersService from "./UsersService";

const Services = {
  news: new NewsService(),
  users: new UsersService()
};

export default Services;
