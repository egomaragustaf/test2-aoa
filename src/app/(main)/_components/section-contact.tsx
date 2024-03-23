"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section
      className="w-full mt-20 min-h-screen flex flex-col items-center justify-center gap-4"
      id="contact">
      <h1 className="p-2 leading-normal flex text-center text-3xl font-bold">
        Contact Us Now
      </h1>
      <p className="max-w-2xl text-center">
        Stepping into the digital business and technology realm will surely
        generate many questions. You can start by filling out the form below,
        and we will provide the answers for free
      </p>
      <div className="flex lg:flex-row flex-col w-full items-center justify-center space-y-10 lg:space-x-16">
        <form className="w-full max-w-xl flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Name</Label>
            <Input type="name" id="name" placeholder="Name" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="Email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="message">Your Enquiries</Label>
            <Textarea id="message" placeholder="Your Enquiries" />
          </div>
          <Button>Submit</Button>
        </form>

        <div className="flex flex-col gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.619476868206!2d106.80037687418154!3d-6.181656893805805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f68a5bebb8c1%3A0x3ebef4ed851778db!2sPT.%20Altech%20Omega%20Andalan!5e0!3m2!1sid!2sid!4v1711218458813!5m2!1sid!2sid"
            width="400"
            height="300"
            style={{ border: "0" }}
            loading="lazy"
          />

          <h2>Jakarta Office</h2>
          <p className="text-xs max-w-xs">
            Jl. Kamboja No.76 4 7 4, RT.4/RW.7, Kota Bambu Utara, Kec. Palmerah,
            Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11420
          </p>
        </div>
      </div>
    </section>
  );
}
