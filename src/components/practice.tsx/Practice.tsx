import { useUser } from "@clerk/clerk-react";
import "../../index.css"
 
export default function Practice() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  console.log(user);
  if (isSignedIn) {
    return (
<>    <div>Hello {user.fullName}!</div>
     {user.hasImage && <img className="user-avatar" src={user?.imageUrl} alt="" />}
</>
    );
  }
 
  return <div>Not signed in</div>;
}
 