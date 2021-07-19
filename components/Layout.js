import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from '../styles/layout.module.scss'

export default function Layout({ children, noAppBar }) {
    return (
        <Container className={styles.layout}>
            {
                !noAppBar &&
                <AppBar position="static" className={styles.appbar}>
                    <Toolbar classes={{ root: styles.toolbarRoot }}>
                        <img src="/bluesprint3.svg" className={styles.hacktoberfestLogo} />
                    </Toolbar>
                </AppBar>
            }
            {children}
        </Container>
    )
}
