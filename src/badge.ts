
import { useAuth0 } from "@auth0/auth0-react";

export default function Badge() {
  const { user } = useAuth0();
  return <span>Logged in as {user.name}</span>;
}