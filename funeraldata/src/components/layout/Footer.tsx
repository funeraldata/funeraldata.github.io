export default function Footer() {
  return (
    <footer className="py-[8.6vmin] px-[11vmin] md:py-[4.6vmin] md:px-[7vmin]">
      <nav className="flex justify-between items-center w-full">
        <div className="self-start"></div>
        <div className="text-center md:text-right w-full ml-8">
          <p className="text-black font-bold leading-none m-0 text-[1.9rem] md:text-[1.5rem]">
            © 2025 — Funeral Data Alliance
          </p>
          <small className="block text-[1.5rem] leading-[1.25] mt-[0.8em] tracking-[-0.01em] md:text-[1.2rem]">
            Uniting the profession with guidelines for data flow & security
          </small>
        </div>
      </nav>
    </footer>
  );
}
