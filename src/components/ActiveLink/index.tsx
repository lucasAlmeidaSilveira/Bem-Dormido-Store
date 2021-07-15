import Link from "next/link";
import { ActiveLinkProps } from "../../types/types";

export function ActiveLink({children, activeClassName, ...rest}: ActiveLinkProps){
  return(
    <Link {...rest}>
      {children}
    </Link>
  )
}