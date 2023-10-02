import { LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

const UserProfile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const loggedIn = await isAuthenticated();

  return loggedIn ? (
    <div>
      <h2>{user.given_name}</h2>
      <p>{user.email}</p>
      <LogoutLink>Sign out</LogoutLink>
    </div>
  ) : (
    <small className="mb-2 block text-xs px-4 text-center text-gray-500">
      <LoginLink>Sign in</LoginLink> or <RegisterLink>Sign up</RegisterLink>
    </small>
  );
};

export default UserProfile;
