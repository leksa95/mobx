import styles from './styles.module.sass'

const User = ({ id, name, email, removeUser, avatar }) => (
      <div className={styles.card}>
          <div className={styles.card_header}>
              <div className={styles.card_header__cart} onClick={() => removeUser(id)}>✕</div>
              <img className={styles.card_header__avatar} src={avatar} alt={''}/>
          </div>

          <div className={styles.card_body}>
              <div className={styles.card_body__name}>{name}</div>
              <div className={styles.card_body__email}>{email}</div>
              <div className={styles.card_body__description}>Hello! I am {name}. I'm writing articles and newspapers.
                  sometimes I do illustrations for magazines.</div>
          </div>

          <div className={styles.card_footer}>
                <img src="https://img.icons8.com/tiny-glyph/16/null/facebook-new.png" alt={'facebook'}/>
                <img src="https://img.icons8.com/tiny-glyph/16/null/twitter.png" alt={'twitter'}/>
                <img src="https://img.icons8.com/tiny-glyph/16/null/github.png" alt={'github'}/>
                <img src="https://img.icons8.com/tiny-glyph/16/null/share.png" alt={'share'}/>
          </div>
      </div>
);
export default User;
