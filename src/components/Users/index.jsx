import { observer } from "mobx-react";

import User from "./User";
import CreateUser from "./CreateUser";

import styles from './styles.module.sass';

const Users = observer(
  ({ store: { users, fetchUsers, removeUser, addUser, allUsers } }) => {
    return (
      <div className={styles.container}>
          <div className={styles.container_title}>MobX: Users Page</div>

          <div className={styles.wrapper}>
              <div className={styles.wrapper_inner}>
                  <div className={styles.wrapper_inner__info}>
                      <div>Total users: <b>{allUsers}</b></div>
                      <button className={styles.button} onClick={fetchUsers}>
                          Fetch users
                      </button>
                  </div>
                  {users.length ? (
                      <div className={styles.users}>
                          {users.map((user) => (
                              <div key={user.id}>
                                  <User {...user} removeUser={removeUser} avatar={`https://i.pravatar.cc/300?img=${user.id}`}/>
                              </div>
                          ))}
                      </div>
                  ) : (
                      <div className={styles.emptyState}>Please, fetch users.</div>
                  )}

              </div>
              <div className={styles.wrapper_form}>
                  <CreateUser onSubmit={addUser} />
              </div>
          </div>
      </div>
    );
  }
);

export default Users;
