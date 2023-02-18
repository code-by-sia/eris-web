import Page from "../components/page";
import LoginForm from "../components/login-form";

export default function LoginPage() {
  return (
    <Page className="relative bg-neutral-100 items-center justify-center">
      <LoginForm className=" z-30" />
      <span className="z-10 absolute right-12 bottom-12 text-[15em] opacity-5">
        📚
      </span>
    </Page>
  );
}
