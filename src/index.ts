import { getPeople } from "./api";

async function main() {
  const luke = await getPeople(1);
  console.log(luke);
}

main();
