import { Button } from "@radix-ui/themes";

const styles = {
  whiteTopBottom: "cursor-pointer bg-black text-white border-y-2 border-white px-10 py-4 tracking-widest",
  transparent: "cursor-pointer bg-transparent text-white border-2 border-gray-400 px-10 py-4 tracking-widest",
  pinkGradiant: "cursor-pointer pink-gradient text-white border-none px-10 py-4 tracking-widest shadow-[0_0_18px_oklch(0.7438_0.1818_335.5/0.25)]",
};

const CustomButton = ({ variant, children, onClick }) => (
  <Button className={styles[variant]} onClick={onClick}>
    {children}
  </Button>
);

export default CustomButton;
