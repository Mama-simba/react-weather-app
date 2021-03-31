import "./Footer.css";

export default function Footer() {
  return (
    <footer className="text-center">
      <span className="copyright">©️ Coded by Cristina Padilla</span>
      <a href="https://github.com/Mama-simba/my-weather-app" target="_blank">
        <i className="fab fa-github-square"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/cristina-padilla-plasencia/"
        target="_blank"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </footer>
  );
}