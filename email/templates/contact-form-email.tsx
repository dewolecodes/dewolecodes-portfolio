import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
  date?: string;
};

export const ContactFormEmail = ({
  message,
  senderEmail,
  senderName = "",
  date = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }),
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from {senderName} via your portfolio</Preview>
      <Tailwind>
        <Body className="m-0 bg-[#0e1714] p-[48px_0px]">
          <Container className="mx-auto w-full max-w-[465px] rounded-lg bg-[#1a2420] px-4">
            <Section className="my-[16px] rounded-[8px] bg-[#0e1714] p-[32px_24px] shadow-lg">
              {/* Logo Header */}
              <div className="mb-[32px] text-center">
                <Img
                  src="https://res.cloudinary.com/dqirwsjga/image/upload/v1758497849/dark-logo_-_Copy_gnnecl.png "
                  width="80"
                  height="80"
                  alt="Akinbola Abdulrahmon logo"
                  className="mx-auto"
                />
              </div>

              {/* Title */}
              <Heading className="m-0 mb-[24px] text-center text-[24px] font-bold leading-tight text-[#71a295]">
                New Portfolio Message
              </Heading>

              {/* Notification Badge */}
              <div className="mb-[24px] flex items-center justify-center">
                <div className="inline-block rounded-[20px] bg-[#71a295]/15 px-[16px] py-[8px]">
                  <Text className="m-0 flex items-center gap-[6px] text-center text-[14px] font-medium text-[#9cbcb2]">
                    Received on {date}
                  </Text>
                </div>
              </div>

              {/* Sender Info Section - Enhanced */}
              <div className="mb-[24px] overflow-hidden rounded-[8px] bg-gray-800 shadow-md">
                {/* Header */}
                <div className="bg-[#71a295]/15 px-[20px] py-[12px]">
                  <Text className="m-0 text-[16px] font-semibold tracking-wide text-[#9cbcb2]">
                    Sender Information
                  </Text>
                </div>

                {/* Content */}
                <div className="space-y-4 p-[20px]">
                  {/* Name Row */}
                  <div className="flex items-start gap-3">
                    <Text className="m-0 min-w-[60px] text-[14px] text-[#9cbcb2]">
                      Name:
                    </Text>
                    <Text className="m-0 flex-1 text-[15px] font-medium text-[#71a295]">
                      {senderName}
                    </Text>
                  </div>

                  {/* Email Row */}
                  <div className="flex items-start gap-3">
                    <Text className="m-0 min-w-[60px] text-[14px] text-[#9cbcb2]">
                      Email:
                    </Text>
                    <Text className="m-0 flex-1 break-all text-[15px] text-gray-400">
                      {senderEmail}
                    </Text>
                  </div>
                </div>
              </div>

              {/* Message Section - Enhanced */}
              <div className="overflow-hidden rounded-[8px] bg-gray-800 shadow-md">
                <div className="bg-[#71a295]/15 px-[20px] py-[12px]">
                  <Text className="m-0 text-[16px] font-semibold tracking-wide text-[#9cbcb2]">
                    Message Content
                  </Text>
                </div>

                <div className="p-[20px]">
                  <Text className="m-0 whitespace-pre-wrap text-[16px] leading-relaxed text-gray-300">
                    {message}
                  </Text>
                </div>
              </div>

              <Hr className="my-[24px] text-gray-600" />

              {/* Footer */}
              <div className="text-center">
                <Text className="m-0 text-[14px] text-gray-400">
                  This email was sent from your contact form on{" "}
                  <Link
                    href="https://dewolecodes.dev"
                    className="text-[#71a295] underline"
                  >
                    dewolecodes.dev
                  </Link>
                </Text>

                <Text className="mb-0 mt-[16px] text-[12px] text-gray-500">
                  © {new Date().getFullYear()} Akinbola Abdulrahmon Adewole. All rights
                  reserved.
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
