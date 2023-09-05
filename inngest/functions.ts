import { inngest } from "./client";

export const testFunction = inngest.createFunction(
  { name: "Testing error logging" },
  { event: "api/test" },
  async ({ event, step, logger }) => {}
);
