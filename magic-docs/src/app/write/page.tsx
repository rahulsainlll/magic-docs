import Footer from "@/pages/footer";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Write() {
  return (
    <div>
      <div className="py-8 pb-8 px-12 divide-y">
        <div className="max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
          <h1 className="font-medium text-3xl text-gray-900 mb-4">
            Contribute to MagicDocs and Get Rewarded!
          </h1>
          <p className="text-xl max-w-prose text-muted-foreground mb-4">
            Welcome to our community! MagicDocs is a platform where users can
            contribute to documentation and get rewarded for their efforts.
            Whether you're a programmer, technical writer, developer advocate,
            customer support professional, marketer, or simply passionate about
            ensuring great software experiences, we welcome you to join us.
          </p>
          <h2 className="font-medium text-2xl antialiased text-gray-900 mb-2">
            How It Works
          </h2>
          <ol className="list-decimal pl-6 mb-4 text-lg">
            <li className="mb-2">
              <span className="subpixel-antialiased">
                Access the Repository:
              </span>{" "}
              Begin by visiting our GitHub repository at{" "}
              <a
                href="https://github.com/rahulsainlll/magic-docs"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MagicDocs GitHub
              </a>{" "}
              where you'll find all the resources and templates needed to start
              writing documentation.
            </li>

            <li className="mb-2">
              <span className="subpixel-antialiased">Use the Template:</span>{" "}
              Locate the template provided by MagicDocs in the root directory as{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                Template.md
              </code>
              . Download or clone this template to your local machine and use it
              as a guide to write your documentation, ensuring consistency with
              the specified format.
            </li>

            <li className="mb-2">
              <span className="subpixel-antialiased">Write Your Docs:</span>{" "}
              Utilize the template as a reference to write your documentation,
              aiming for clarity, conciseness, and thoroughness. Consider
              reviewing existing documents in the{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                Documentations
              </code>{" "}
              folder for examples and references.
            </li>
            <li className="mb-2">
              <span className="subpixel-antialiased">
                Submit a Pull Request (PR):
              </span>{" "}
              After completing your documentation, add your file to the{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                Documentations
              </code>{" "}
              folder in the repository. Then, open a Pull Request (PR) to the
              main repository. Our team will review your submission within one
              week. Ensure your payment details are up-to-date in your profile
              to receive the payment promptly.
            </li>
            <li className="mb-2">
              <span className="subpixel-antialiased">Final Checks:</span> Ensure
              your documentation is up-to-date and original. Include your email
              and Twitter ID in your submission for follow-up confirmation.
            </li>
            <li className="mb-2">
              <span className="subpixel-antialiased">Earn Rewards:</span> Upon
              successful merging of your PR, you'll receive compensation ranging
              from $1 to $4 based on the quality of your documentation.
            </li>
          </ol>
          <p className="text-lg">
            Start contributing today and help us make documentation more
            accessible and comprehensive for everyone!
          </p>
          <div className="mt-8">
            <h2 className="font-medium text-2xl antialiased text-gray-900 mb-2">
              Connect with Our Team
            </h2>
            <p className="text-lg">
              If you have any doubts or need assistance, feel free to reach out
              to our team members:
            </p>
            <ul className="list-disc  mt-2">
              <div className="flex gap-4">
                <li className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="rahul.png" alt="@shadcn" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <a
                    href="https://x.com/Rahulsainlll"
                    className="underline ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rahul Sain
                  </a>
                </li>

                <li className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="kairvee.png" alt="@shadcn" />
                    <AvatarFallback>KV</AvatarFallback>
                  </Avatar>
                  <a
                    href="https://x.com/kairveee"
                    className="underline ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kairvee
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
