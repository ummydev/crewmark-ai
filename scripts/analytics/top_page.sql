SELECT coalesce(session.$entry_referring_domain, '$direct') AS ref, session.$entry_pathname AS page, count(DISTINCT person_id) AS uv
FROM events
WHERE event='$pageview'
 AND timestamp >= toDateTime('{START}', 'UTC') AND timestamp < toDateTime('{END}', 'UTC')
 AND {FILTERS}
GROUP BY ref, page
ORDER BY uv DESC
LIMIT 3
