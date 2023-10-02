import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const UserProfile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const loggedIn = await isAuthenticated();

  return loggedIn ? (
    <div>
      <h2>{user.given_name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    <p>Please sign in or register!</p>
  );
};

export default UserProfile;
