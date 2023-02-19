import Header from "../components/header";
import TextField from "../components/text-field";
import Button from "../components/button";
import classNames from "classnames";
import Link from "next/link";

export default function LoginForm({ className, children }) {
  return (
    <form
      className={classNames(
        "flex-col p-6 shadow-lg bg-white rounded-xl",
        className
      )}
    >
      <Header>
        <strong>Login</strong>
        <small>
          If you have an account, please login to the system using this form.
        </small>
      </Header>
      <div className="flex flex-col gap-1 my-4">
        <TextField id="username" label="Username" />
        <TextField id="password" label="Password" type="password" />
      </div>
      <Link href="/">
        <Button label="Sign-in" />
      </Link>
      <div className="flex justify-between">
        <Button style="link" size="small">
          Anonymous Login
        </Button>
        <Button style="link" size="small">
          Support
        </Button>
      </div>
      {children}
    </form>
  );
}
