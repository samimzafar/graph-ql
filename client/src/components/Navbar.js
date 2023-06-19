import { useCart } from "@/context/CartContext";
import { Navbar, Button, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";

export default function Nav() {
  const { isDark } = useTheme();
  const { dispatch } = useCart();

  return (
    <>
      <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            <Link href="/"> HOME SHOP</Link>
          </Text>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat href="#">
              <span
                className="cursor-pointer"
                onClick={() => dispatch({ type: "OPEN_CART" })}
              >
                Cart
              </span>
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
