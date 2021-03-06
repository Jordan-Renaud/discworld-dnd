import { useSession, signIn, signOut } from "next-auth/react";
import styles from "/styles/AuthButton.module.css";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    const firstName = (session.user.name || session.user.email).split(" ")[0];

    return (
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={() => signOut()}
          style={{ marginRight: "1rem" }}
        >
          Sign out
        </button>
        <div className={styles.profileContainer}>
          <img className={styles.profile} src={session.user.image} />
          <div className={styles.name}>{firstName}</div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
}
