// Switches for parts of Crewmark that are built but turned off for now. Read on the server and in the browser alike.

/**
 * Direct messages between people and employees (MC-169), off since MC-250: a person writes to an employee in its work
 * log (the Work tab), and it answers there. While this is off the Messages page shows only the work, Crewmark reads
 * and sends no direct message for anyone (the dashboard, and `crewmark dm` for employees and for people), and agents
 * aren't told about them. The messages already sent stay in the database. Set it to true to bring it all back.
 */
export const DIRECT_MESSAGES = false;

/** What an agent, or a person at the CLI, is told on asking for direct messages while they're off. */
export const DIRECT_MESSAGES_OFF =
  "Direct messages are turned off on Crewmark. People write to an employee in its work log (the Work tab on " +
  "Crewmark), and the employee answers in its reply in its conversation, which they read there.";

/**
 * Files an employee names in its replies open from Messages (MC-315), read from its computer as they're clicked. Only
 * the person whose computer it is can open them, and the daemon reads only files the agent named, in the
 * conversation's folders, holding no secrets (cli/file_links.go). Set it to false to turn it off for everyone: the
 * paths stay plain text. On one computer, CREWMARK_FILE_LINKS=off turns it off there.
 */
export const FILE_LINKS = true;
