import Link from "next/link";

export const LoginButton = () => {
    return (
        // <a className="button__login" href="/api/auth/login">
        //     Log In
        // </a>
    <Link href="/api/auth/login" className={`my-auto`}>
        <div className="text-slate-500 font-bold mr-2 ">Sign In</div>
    </Link>
    );
};