import api from "@/api";

export default async function Home() {
  const links = await api.links.fetch();

  return (
    <main className="main">
      <h1>Linktree clone</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id} id={link.id.toString()}>
            <a key={link.label} href={link.url}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
