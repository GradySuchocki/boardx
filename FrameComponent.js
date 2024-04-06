import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <form className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.idbNoTBoxParent}>
        <div className={styles.idbNoTBox}>
          <img
            className={styles.id1bno9t01Icon}
            loading="lazy"
            alt=""
            src="/id1bno9t0-1@2x.png"
          />
        </div>
        <b className={styles.welcomeToBoardx}>Welcome to BoardX!</b>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleGroup}>
          <input className={styles.frameItem} type="text" />
          <div className={styles.email}>Email</div>
        </div>
        <div className={styles.passwordInput}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <input
              className={styles.password}
              placeholder="Password"
              type="text"
            />
          </div>
          <img className={styles.icon} alt="" src="/5113021-1@2x.png" />
        </div>
      </div>
      <div className={styles.forgotPswdLabelWrapper}>
        <button className={styles.forgotPswdLabel}>
          <div className={styles.forgotPswdLabelChild} />
          <div className={styles.logIn}>{`Log In `}</div>
        </button>
      </div>
      <div className={styles.forgotPasswordWrapper}>
        <div className={styles.forgotPassword}>Forgot Password</div>
      </div>
    </form>
  );
};

export default FrameComponent;
