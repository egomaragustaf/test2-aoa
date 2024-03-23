import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center px-2">
      <div className="w-full md:w-[700px] h-[400px] flex bg-gray-100 shadow-2xl rounded-3xl">
        <section className="form w-full md:w-[350px] h-full p-4">
          <form className="w-full h-full flex flex-col items-center justify-center gap-4">
            <h2 className="text-center font-bold w-full py-2 text-[#0366fd]">
              Login
            </h2>
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xl font-medium text-[#0366fd]">
                Email
              </label>
              <Input
                id="email"
                type="email"
                autoComplete="off"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xl font-medium text-[#0366fd]">
                Password
              </label>
              <Input
                id="password"
                type="password"
                autoComplete="off"
                placeholder="password"
                required
              />
            </div>
            <Button className="w-full" type="submit" asChild>
              <Link href="/">LOGIN</Link>
            </Button>
            <p className="text-sm">Forgot Your Password?</p>
          </form>
        </section>
        <section className="hidden md:inline w-[350px] h-full">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 bg-primary text-white rounded-l-[150px] rounded-r-3xl">
            <h2 className="text-center text-4xl font-bold">Hello!</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              corporis!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
