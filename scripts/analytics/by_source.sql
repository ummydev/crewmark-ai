SELECT toDate(toTimeZone(timestamp,'Asia/Shanghai')) AS d,
 multiIf(
  match(coalesce(session.$entry_referring_domain,''),'chatgpt|openai|perplexity|claude\\.ai|gemini\\.google|copilot|deepseek|kimi|doubao|qianwen|tongyi|yuanbao|metaso|you\\.com|phind') OR match(coalesce(session.$entry_utm_source,''),'chatgpt|perplexity|claude|gemini|copilot'), 'ai',
  match(coalesce(session.$entry_referring_domain,''),'github'), 'github',
  session.$channel_type IN ('Organic Social','Paid Social') OR match(coalesce(session.$entry_referring_domain,''),'t\\.co$|x\\.com|twitter|reddit|tiktok|instagram|youtube|threads|facebook|xiaohongshu|xhslink|linkedin|bsky|weibo|discord'), 'social',
  session.$channel_type IN ('Organic Search','Paid Search'), 'search',
  session.$channel_type = 'Direct', 'direct',
  'other') AS src,
 count() AS pv, count(DISTINCT person_id) AS uv
FROM events
WHERE event='$pageview'
 AND timestamp >= toDateTime('{START}', 'UTC') AND timestamp < toDateTime('{END}', 'UTC')
 AND {FILTERS}
GROUP BY d, src WITH ROLLUP
ORDER BY d, src
