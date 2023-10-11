// export const runtime = 'nodejs';

export const runtime = "edge";

import { headers } from "next/headers";

export default function Page() {
  const headersList = headers();
  const referer = headersList.get("referer");

  return (
    <div>
      <h1>RouteA</h1>
      <p>Referer: {referer}</p>
    </div>
  );
}
