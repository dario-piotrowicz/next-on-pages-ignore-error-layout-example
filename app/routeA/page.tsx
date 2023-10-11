import Link from "next/link";

export default function RouteA() {
  return (
    <div>
      <h1>Route A</h1>
      <br />
      <Link href="/routeA/routeA1">To route A1</Link>
      <br />
    </div>
  );
}
