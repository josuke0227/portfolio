import { useEffect, useState } from "react";
import style from "../styles/Footer.module.css";

export default function Footer() {
  const [year, setYear] = useState();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer>
      <div className={style.wrapper}>
        <div>Copyright ©{year} My Portfolio by Yosuke Motosugi.</div>
      </div>
    </footer>
  );
}
