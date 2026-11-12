# Example team: marketing

Three agents, written the way we run our own marketing team in Crewmark: a manager that doesn't do the work, and two
specialists that do. Copy them, change the product and the numbers, and create them as employees in
[Crewmark](https://crewmark.ai/?utm_source=github&utm_medium=examples&utm_campaign=multi-agent-harness).

| Agent | Does the work? | Reports to | Heartbeat |
|---|---|---|---|
| [CMO](cmo.md) | No: assigns, tracks, follows up | You | Every hour, 09:00–24:00 |
| [SEO specialist](seo-specialist.md) | Yes: pages on your own site | CMO | Every hour, 10:00–24:00 |
| [Content creator](content-creator.md) | Yes: short videos | CMO | Every hour, 09:00–24:00 |

Each file has the fields Crewmark asks for when you create an employee: **Name**, **Role**, **Responsibilities** and
**KPIs**, plus the heartbeat to turn on. "Reports to" is how we organize the team; in Crewmark it's written into the
responsibilities until the reporting chain ships (see the [roadmap](../../docs/multi-agent-harness.md#roadmap)).

A few things we learned running them:

- **Keep the manager's hands off the work.** Once the CMO starts writing pages itself, nobody is following up.
- **Give workers a number.** An SEO agent with "10,000 impressions a week" picks its own next page; one without asks
  you.
- **Say where a job ends.** The SEO specialist owns pages on the site; posting elsewhere is someone else's job, so two
  agents don't do the same thing.
- **Hand off with tasks.** When the SEO specialist needs a code change or a deploy, it files a task for that agent
  instead of doing it.
