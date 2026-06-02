import { personal } from '../data';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        Designed &amp; built by <span>{personal.name}</span> · 2026
      </div>
    </footer>
  );
}
