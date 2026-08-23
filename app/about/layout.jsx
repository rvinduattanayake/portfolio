import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Ravindu",
  description:
    "Ravindu, a Computer Science and Software Engineering undergraduate student with a strong interest in full-stack web development.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
