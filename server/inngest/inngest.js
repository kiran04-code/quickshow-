import { Inngest } from "inngest";
import User from "../model/user.js";

export const inngest = new Inngest({ id: "Movies-Ticket-app" });

// Create user when Clerk user is created
const syncUserLoginData = inngest.createFunction(
  { id: "create-user-with-clerk" },
  { event: "webhook-integration/user.created" },
  async ({ event }) => {
    const { id, email_addresses, image_url, phone_numbers } = event.data;
    console.log("User Created Event:", event.data);
    await User.create({
      id,
      email: email_addresses?.[0]?.email_address || "",
      Phone: phone_numbers?.[0]?.phone_number || "",
      image: image_url || "",
    });
  }
);

// Delete user when Clerk user is deleted
const syncUserDelete = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "webhook-integration/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    await User.findOneAndDelete({ id });
  }
);

// Update user when Clerk user is updated
const syncUserUpdate = inngest.createFunction(
  { id: "update-user-with-clerk" },
  { event: "webhook-integration/user.updated" },
  async ({ event }) => {
    const { id, email_addresses, image_url, phone_numbers } = event.data;
    
    await User.findOneAndUpdate(
      { id },
      {
        email: email_addresses?.[0]?.email_address || "",
        Phone: phone_numbers?.[0]?.phone_number || "",
        image: image_url || "",
      },
      { new: true }
    );
  }
);

// Export all functions
export const functions = [
  syncUserLoginData,
  syncUserDelete,
  syncUserUpdate
];
