import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceD20,
  faPeopleGroup,
  faChessRook,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import AuthButton from "./AuthButton";
import styles from "/styles/NavHeader.module.css";

const LINKS = [
  {
    name: "Characters",
    to: "/characters",
    icon: faPeopleGroup,
    accentColor: "plum",
  },
  {
    name: "My Character",
    to: "/character",
    icon: faDiceD20,
    accentColor: "crimson",
  },
  {
    name: "History",
    to: "/history",
    icon: faChessRook,
    accentColor: "burlywood",
  },
];

export default function NavHeader() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          {LINKS.map(({ name, to, icon, accentColor }) => (
            <li key={to}>
              <Link href={to}>
                <a
                  className={`${styles.link} ${
                    router.pathname === to ? styles.active : ""
                  }`}
                >
                  <span>{name}</span>
                  <FontAwesomeIcon
                    icon={icon}
                    className={styles.icon}
                    style={{
                      color: router.pathname === to ? accentColor : "inherit",
                    }}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <aside className={styles.auth}>
        <AuthButton />
      </aside>
    </header>
  );
}
