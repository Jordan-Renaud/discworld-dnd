import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceD20,
  faPeopleGroup,
  faChessRook,
  faChessQueen,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import AuthButton from "./AuthButton";
import styles from "/styles/NavHeader.module.css";
import { useSession } from "next-auth/react";

const LINKS = [
  {
    name: "Characters",
    to: "/characters",
    icon: faPeopleGroup,
    accentColor: "plum",
    isPlayerAccessible: true,
  },
  {
    name: "My Character",
    to: "/character",
    icon: faDiceD20,
    accentColor: "crimson",
    isPlayerAccessible: true,
  },
  {
    name: "History",
    to: "/history",
    icon: faChessRook,
    accentColor: "burlywood",
    isPlayerAccessible: true,
  },
  {
    name: "Dungeon Master",
    to: "/dungeon-master",
    icon: faChessQueen,
    accentColor: "navy",
    isPlayerAccessible: false,
  },
];

export default function NavHeader() {
  const router = useRouter();
  const { data: session } = useSession();

  const isDungeonMaster = session?.user?.isDungeonMaster;
  const filteredLinks = LINKS.filter(({ isPlayerAccessible }) => {
    if (isDungeonMaster) return true;
    return isPlayerAccessible;
  });

  return (
    <header className={styles.header}>
      <nav>
        <ul
          className={styles.list}
          style={{
            gridTemplateColumns: `repeat(${filteredLinks.length}, 1fr)`,
          }}
        >
          {filteredLinks.map(({ name, to, icon, accentColor }) => (
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
