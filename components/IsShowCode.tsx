import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import styles from "./IsShowCode.module.css";

type Props = {
  children: ReactNode;
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function IsShowCode({ children }: Props) {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <motion.div initial={{ paddingTop: "8px" }}>
      <div style={{ display: "flex" }}>
        <div
          className={styles.switch}
          data-ison={isShow}
          onClick={() => setIsShow((isShow) => !isShow)}
        >
          <motion.div
            className={styles.handle}
            layout
            transition={spring}
            animate={{
              background: isShow ? "#fff" : "#e2a4a1",
            }}
          />
        </div>
      </div>
      <motion.div
        initial={{ marginTop: "16px" }}
        animate={{
          height: isShow ? "100%" : "0px",
          overflow: "hidden",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default IsShowCode;
