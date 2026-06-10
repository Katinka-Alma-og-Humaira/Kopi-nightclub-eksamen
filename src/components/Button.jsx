import { Button } from "@radix-ui/themes";

const styles = {
  whiteTopBottom: "cursor-pointer bg-black text-white border-y-2 border-white px-10 py-4 tracking-widest focus:outline-none focus:ring-2 focus:ring-(--color-pink)",
  transparent: "cursor-pointer bg-transparent text-white border-2 border-gray-400 px-10 py-4 tracking-widest  focus:outline-none focus:ring-2 focus:ring-(--color-pink)",
  pinkGradiant: "cursor-pointer pink-gradient text-white border-none px-10 py-4 tracking-widest shadow-[0_0_18px_oklch(0.7438_0.1818_335.5/0.25)] focus:outline-none focus:ring-2 focus:ring-(--color-pink)",
};

const CustomButton = ({ variant, children, onClick }) => (
  <Button className={styles[variant]} onClick={onClick}>
    {children}
  </Button>
);

export default CustomButton;
