import { Button } from "@radix-ui/themes";

const styles = {
  whiteTopBottom: "bg-black text-white border-y-2 border-white px-10 py-4 tracking-widest",
  transparent: "bg-transparent text-white border-2 border-gray-400 px-10 py-4 tracking-widest",
  pinkGradiant: "btn-shine pink-gradient text-white border-none px-10 py-4 tracking-widest shadow-[0_0_18px_oklch(0.7438_0.1818_335.5/0.25)]",
};

const CustomButton = ({ variant, children, onClick }) => (
  <Button className={styles[variant]} onClick={onClick}>
    {variant === "pinkGradiant" && <span className="absolute top-0 right-0 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.45)_0%,_transparent_30%)] pointer-events-none" />}
    {children}
  </Button>
);

export default CustomButton;
