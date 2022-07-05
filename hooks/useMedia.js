import { useMediaQuery } from "react-responsive";

export default function useMedia() {
  const sm = useMediaQuery({ minWidth: 640 });
  const md = useMediaQuery({ minWidth: 768 });
  const lg = useMediaQuery({ minWidth: 1024 });

  return { sm, md, lg };
}
