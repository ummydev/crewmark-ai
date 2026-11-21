SELECT toDate(toTimeZone(timestamp,'Asia/Shanghai')) AS d,
 count() AS pv, count(DISTINCT person_id) AS uv
FROM events
WHERE event='$pageview'
 AND timestamp >= toDateTime('{START}', 'UTC') AND timestamp < toDateTime('{END}', 'UTC')
 AND {FILTERS}
GROUP BY d ORDER BY d
