import { Button } from "@radix-ui/themes";

const styles = {
  whiteTopBottom: "bg-black text-white border-y-2 border-white px-10 py-4 tracking-widest",
  transparent: "bg-transparent text-white border-2 border-gray-400 px-10 py-4 tracking-widest",
  pinkGradiant: " text-white border-none px-10 py-4 tracking-widest",
};

const CustomButton = ({ variant = "readMore", children, onClick }) => (
  <Button className={styles[variant]} onClick={onClick} style={variant === "pinkGradiant" ? { background: "linear-gradient(150deg, #f72a78, #f11e8a, #ea1297, #e208a2, #d907aa, #cf0eb0, #c418b3, #b822b5)" } : {}}>
    {children}
  </Button>
);

export default CustomButton;
