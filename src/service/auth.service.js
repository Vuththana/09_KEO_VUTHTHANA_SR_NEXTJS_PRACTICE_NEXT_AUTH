export async function loginService(req) {
  const user = {
    email: req.email,
    password: req.password,
  };
  console.log("this is user in service :", user);
  const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auths/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const loggedUser = await res.json();
  console.log("logged User in service :", loggedUser);
  return loggedUser;
}
