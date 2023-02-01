import style from "./mainContainer.module.css";
export default function MainContainer({ children }) {
  return <div className={style.mainContainer}>{children}</div>;
}
