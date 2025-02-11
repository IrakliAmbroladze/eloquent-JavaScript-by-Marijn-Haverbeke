import "./journal.js";
import JOURNAL from "./journal.js";

for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events`);
}
