import ActionLink from "@components/actionlink/ActionLink";
import { dataMenu } from "@src/data.js";
import styles from "@components/menu/menu.module.css";

function Menu() {
    return (
        <>
            <nav className={styles["menu-nav"]}>
                <ul className={styles["menu-list"]}>
                    {dataMenu.map((item) => {
                        return (
                            <li className={styles["menu__item"]} key={item.id}>
                                <ActionLink link={item.link} image={item.image} alt={item.alt} text={item.text} />
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Menu;
