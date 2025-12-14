import type ua from "@messages/ua.json";

type Messages = typeof ua;

declare module "next-intl" {
  interface AppConfig {
    Messages: Messages;
  }
}
