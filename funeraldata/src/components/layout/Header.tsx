export default function Header() {
  return (
    <header
      className="py-[8.6vmin] px-[11vmin] md:py-[4.6vmin] md:px-[7vmin]"
      role="banner"
    >
      <nav className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <a href="https://funeraldata.org/">
            <img
              src="/logo.svg"
              height={32}
              width={32}
              alt="Funeral Data Alliance"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
