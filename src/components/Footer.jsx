/**
 * This is the Footer component
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="container py-8">
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Charlie McLaughlin. Made with love and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
