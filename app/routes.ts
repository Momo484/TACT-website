import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "./routes/layout.tsx", [
    index("./routes/home.tsx"),
    route("portfolio", "./routes/portfolio.tsx"),
    route("contact", "./routes/contact.tsx"),
    route("about", "./routes/about.tsx"),
  ]),
] satisfies RouteConfig;
