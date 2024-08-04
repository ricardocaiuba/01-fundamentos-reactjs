import igniteLogo from "../../assets/ignite-logo.svg"
import styles from "./Login.module.css"

export function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <form>
            <span className={styles.loginFormTitle}>Bem vindo!</span>
            <span className={styles.loginFormTitle}><img src={igniteLogo} alt="Ignite "/></span>
              
            <div className={styles.wrapInput}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Senha" required />
            </div>
            <div className={styles.submit}>
              <a href="#">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) ;
}