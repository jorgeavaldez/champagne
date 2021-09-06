import { signIn, signOut, useSession } from "next-auth/client";
import { useForm } from "react-hook-form";

export default function CampaignCreatePage() {
  const [session] = useSession();
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onFormSubmit = (values) => {
    // TODO: initiate creation of contracts on the backend
    console.log('values', values);
  };

  return (
    <main>
      <h1>create campaign</h1>

      {session && <p>Signed in as {session.user.name}</p>}
          <button
            onClick={() => {
              signIn();
            }}
          >
            sign in
          </button>

      {!session && (
        <p>
          not signed in
          <button
            onClick={() => {
              signIn();
            }}
          >
            sign in with twitter
          </button>
        </p>
      )}

      <form onSubmit={handleSubmit(onFormSubmit)}>

      </form>
    </main>
  );
}
