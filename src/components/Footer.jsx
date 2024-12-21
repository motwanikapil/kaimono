import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function FooterColumn({ children }) {
  return <section className="flex flex-col gap-3">{children}</section>;
}

function FooterItem({ children }) {
  return <article className="text-neutral-200">{children}</article>;
}
export default function Footer() {
  return (
    <main className="grid-col-2 grid gap-5 bg-slate-950 px-10 py-8 md:grid-cols-5">
      {/* brand section */}
      <FooterColumn>
        <FooterItem>
          <img
            src="/brand.png"
            alt="kainomo brand logo"
            className="h-10 invert"
          />
        </FooterItem>
        <FooterItem>Subscribe</FooterItem>
        <FooterItem>Get 10% off on your first order</FooterItem>
        <FooterItem>
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-md px-3 py-1.5 text-black outline-none"
          />
          {/* add email logo also in the input */}
        </FooterItem>
      </FooterColumn>
      <hr className="h-0.5 md:hidden" />
      {/* support FooterColumn */}
      <FooterColumn>
        <FooterItem>1st block, Shibuya</FooterItem>
        <FooterItem>kaimono@kapil.com</FooterItem>
        <FooterItem>+1 234 567 890</FooterItem>
      </FooterColumn>

      <hr className="h-0.5 md:hidden" />

      {/* account FooterColumn */}
      <FooterColumn>
        <FooterItem>My Account</FooterItem>
        <FooterItem>Login / Register</FooterItem>
        <FooterItem>Cart</FooterItem>
        <FooterItem>Wishlist</FooterItem>
        <FooterItem>Shop</FooterItem>
      </FooterColumn>

      <hr className="h-0.5 md:hidden" />
      {/* Legal FooterColumn */}
      <FooterColumn>
        <FooterItem>Privacy Policy</FooterItem>
        <FooterItem>Terms of use</FooterItem>
        <FooterItem>FAQ</FooterItem>
        <FooterItem>Contact</FooterItem>
      </FooterColumn>

      <hr className="h-0.5 md:hidden" />
      {/* Download app FooterColumn */}
      <FooterColumn className="flex flex-col gap-y-3">
        <FooterItem>Download App</FooterItem>
        <FooterItem>links to app and qr</FooterItem>
        <article className="flex gap-3">
          <FooterItem>
            <Facebook />
          </FooterItem>
          <FooterItem>
            <Twitter />
          </FooterItem>
          <FooterItem>
            <Instagram />
          </FooterItem>
          <FooterItem>
            <Linkedin />
          </FooterItem>
        </article>
      </FooterColumn>
    </main>
  );
}
