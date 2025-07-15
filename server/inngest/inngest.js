import { verifyToken } from "@clerk/express";
import { Inngest } from "inngest";
import User from "../model/user.js";
export const inngest = new Inngest({ id: "Movies-Ticket-app" });
// inngenst Function to add data in mongodb!

const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
        await step.sleep("wait-a-moment", "1s");
        return { message: `Hello ${event.data.email}!` };
    },
)

const synsUserlogindata = inngest.createFunction(
    { id: "create-user-with-clerk" },
    { event: "clerk/user.created" },
    async ({ event }) => {
        const { id, email_adress, image_Url, Phone } = event.data
        const userData = await User.create({
            id: id,
            email: email_adress[0].email_adress,
            Phone: Phone,
            image: image_Url
        })
        console.log(userData)
    }
)

const SynforDeltedTheUser = inngest.createFunction(
    { id: "delete-user-with-clerk" },
    { event: "clerk/user.deleted" },
    async ({ event }) => {
        const { id } = event.data
        await User.findByIdAndUpdate(id)
    }
)

const SynforUpdateUser = inngest.createFunction(
    { id: "upadte-user-with-clerk" },
    { event: "clerk/user.updated" },
    async ({ event }) => {
        const { email_adress, image_Url, Phone } = event.data
        await User.findByIdAndUpdate(id,
            {
                id: id,
                email: email_adress[0].email_adress,
                Phone: Phone,
                image: image_Url
            }
            , { new: true })
    }
)
export const functions = [
    synsUserlogindata,
    SynforDeltedTheUser,
    SynforUpdateUser
];