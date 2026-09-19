import { useEffect, useState } from 'react'
import { useLanyard } from 'use-lanyard'
import { connections } from '../data/connections'
import { location } from '../data/location'

const discordConnection = connections.find((connection) => connection.name === 'Discord')

function getActivityAsset(activity, key) {
  const asset = activity?.assets?.[key]

  if (!asset) return null
  if (asset.startsWith('spotify:')) return `https://i.scdn.co/image/${asset.slice(8)}`
  if (asset.startsWith('mp:')) {
    return `https://media.discordapp.net/${asset.slice(3)}`
  }
  if (activity.application_id) {
    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${asset}.png`
  }

  return null
}

export function StatusBar() {
  const presence = useLanyard(discordConnection.userId)
  const [currentTime, setCurrentTime] = useState(() => new Date())

  useEffect(() => {
    const clock = window.setInterval(() => setCurrentTime(new Date()), 1000)

    return () => window.clearInterval(clock)
  }, [])

  const activity = presence?.activities?.find((item) => item.type !== 4)
  const spotify = presence?.spotify
  const discordStatus = presence?.discord_status || 'loading'
  const statusLabel = discordStatus === 'loading'
    ? 'Summoning Discord User Activity...'
    : spotify
      ? `Listening to ${spotify.song}`
    : activity
      ? `Playing ${activity.name}`
      : `${discordStatus === 'dnd' ? 'Do not disturb' : discordStatus[0].toUpperCase() + discordStatus.slice(1)} on Discord`
  const statusDetail = spotify
    ? `${spotify.artist}${spotify.album ? ` - ${spotify.album}` : ''}`
    : activity?.details || activity?.state || 'Usually replies within a day (or so)'
  const activityBackground = spotify?.album_art_url || getActivityAsset(activity, 'large_image')
  const activityIcon = getActivityAsset(activity, 'small_image')
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    timeZone: location.timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(currentTime)

  return (
    <section className="signal-bar container" aria-label="Current status">
      <div className="signal-main">
        <span className={`pulse-ring pulse-ring-${discordStatus}`}>
          <span />
        </span>
        <div className="signal-activity">
          {activityBackground && (
            <div
              className="activity-art"
              style={{ backgroundImage: `url(${activityBackground})` }}
              aria-label={activity?.assets?.large_text || spotify?.album || 'Activity artwork'}
            >
              {activityIcon && (
                <img
                  src={activityIcon}
                  alt={activity?.assets?.small_text || `${activity?.name || 'App'} icon`}
                />
              )}
            </div>
          )}
          <div>
          <strong>{statusLabel}</strong>
          <span>{statusDetail}</span>
          </div>
        </div>
      </div>
      <div className="signal-meta">
        <span>
          Based in <b>{location.name}</b>
          <br />
          Local time: <b>{formattedTime}</b> ({location.timeZoneLabel})
        </span>
      </div>
    </section>
  )
}