import Link from "next/link";
import {Button} from "@/components/ui/button";

export const GetStartedButton = () => {
    return (
        // <a className="button__sign-up" href="/api/auth/signup">
        //     Sign Up
        // </a>
    <Link href="/api/auth/signup" >
        <Button variant="premium" className="rounded-s">
            Get Started
        </Button>
    </Link>
    );
};