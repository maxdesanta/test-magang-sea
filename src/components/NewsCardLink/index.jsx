import { Link } from "react-router-dom";

export default function NewsCardLink({
  to,
  state,
  children,
  className = "news-card-link",
  style,
}) {
  return (
    <Link to={to} state={state} className={className} style={style}>
      {children}
    </Link>
  );
}
