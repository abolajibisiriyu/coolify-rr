export function loader() {
  return Response.json({
    message: "Hello, coolify!",
  });
}

export function action() {
  return Response.json({
    message: "Hello, coolify from action!",
  });
}