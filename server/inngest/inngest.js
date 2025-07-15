import { Inngest } from "inngest";
import User from "../model/user.js";

export const inngest = new Inngest({ id: "Movies-Ticket-app" });

const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

// Export all functions
export const functions = [
 helloWorld
];
