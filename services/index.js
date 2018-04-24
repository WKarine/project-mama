import NewsService from "./NewsService";
import UsersService from "./UsersService";
import DataService from "./DataService";

const Services = {
  news: new NewsService(),
  users: new UsersService(),
  data: new DataService()
};

export default Services;
