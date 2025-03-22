import Logo from "@components/logo/Logo"
import Menu from "@components/menu/Menu"
import Account from "@components/account/Account"
import styles from "./header.module.css"

function Header() {
    return (
      <header className={styles.header}>
        <Logo />
        <Menu />
        <Account />
      </header>
    )
  }
  
  export default Header