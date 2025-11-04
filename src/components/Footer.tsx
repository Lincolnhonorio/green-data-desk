const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-7xl text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">Lincoln Honorio</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
